import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import erc721Abi from "../erc721Abi";
import { CONTRACT_ADDR as contractAddr } from '../global_variables';
import Web3 from 'web3';


const name = "TOKEN";
const initialState = {
    web3: null,
    tokenContract: null,
    tokens: {},
    totalSupply: 0,
    contractName: null,
    tokenSymbol: null,
};

const initializeWeb3 = async (thunkAPI) => {
    if (!thunkAPI.getState().web3) {
        const web3 = new Web3(window.ethereum);
        await thunkAPI.dispatch(tokenActions.setWeb3(web3));
        return web3;
    }
    return thunkAPI.getState().web3
};

const initializeTokenContract = async (thunkAPI) => {
    if (!thunkAPI.getState().tokenContract) {
        const web3 = await initializeWeb3(thunkAPI);
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            contractAddr
        );
        const contractName = await tokenContract.methods.name().call();
        const tokenSymbol = await tokenContract.methods.symbol().call();
        await thunkAPI.dispatch(tokenActions.setTokenContract({tokenContract, contractName, tokenSymbol}));
        return tokenContract;
    }
    return thunkAPI.getState().tokenContract
};

const setTotalSupply = createAsyncThunk(
    `${name}/SET_TOTAL_SUPPLY`,
    async (_, thunkAPI) => {
        const tokenContract = await initializeTokenContract(thunkAPI);
        const totalSupply = await tokenContract.methods.totalSupply().call();
        return parseInt(totalSupply);
    }
);

const fetchToken = createAsyncThunk(
    `${name}/FETCH`,
    async (tokenId, thunkAPI) => {
        console.log(tokenId);
        console.log(thunkAPI);
        const tokenContract = await initializeTokenContract(thunkAPI);
        const tokenURI = await tokenContract.methods
            .tokenURI(tokenId)
            .call();
        const response = await axios.get(tokenURI);
        const tokenMetadata = response.data;
        tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        return {
            ...response.data,
            tokenId: tokenId
        };
    }
);

export const tokenSlice = createSlice({
    name: name,
    initialState: initialState,
    reducers: {
        setWeb3: (
            state,
            action
        ) => {
            state.web3 = action.payload
        },
        setTokenContract: (
            state,
            action
        ) => {
            state.tokenContract = action.payload.tokenContract
            state.contractName = action.payload.contractName
            state.tokenSymbol = action.payload.tokenSymbol
        }
    },
    extraReducers: {
        [fetchToken.fulfilled.type]: (state, action) => {
            state.tokens = {
                ...state.tokens,
                [action.payload.tokenId]: {
                    name: action.payload.name,
                    description: action.payload.description,
                    collection: action.payload.properties.collection || 'pepe',
                    price: action.payload.properties.price,
                    image: action.payload.image
                }
            }
        },
        [setTotalSupply.fulfilled.type]: (state, action) => {
            state.totalSupply = action.payload;
        }
    }
});

export const tokenActions = {...tokenSlice.actions, fetchToken, setTotalSupply};
