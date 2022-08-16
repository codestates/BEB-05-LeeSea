import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import {
    NFT_CONTRACT_ADDR,
    MARKET_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    MARKET_CONTRACT_ABI
} from '../global_variables';
import Web3 from 'web3';


const name = "TOKEN";
const initialState = {
    web3: null,
    tokenContract: null,
    marketContract: null,
    tokens: {},
    itemsOnSale: {},
    totalSupply: 0,
    contractName: null,
    tokenSymbol: null,
    myTokenIds: [],
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
            NFT_CONTRACT_ABI,
            NFT_CONTRACT_ADDR
        );
        const contractName = await tokenContract.methods.name().call();
        const tokenSymbol = await tokenContract.methods.symbol().call();
        await thunkAPI.dispatch(tokenActions.setTokenContract({tokenContract, contractName, tokenSymbol}));
        return tokenContract;
    }
    return thunkAPI.getState().tokenContract
};

const initializeMarketContract = async (thunkAPI) => {
    if (!thunkAPI.getState().marketContract) {
        const web3 = await initializeWeb3(thunkAPI);
        const marketContract = await new web3.eth.Contract(
            MARKET_CONTRACT_ABI,
            MARKET_CONTRACT_ADDR
        );
        await thunkAPI.dispatch(tokenActions.setMarketContract(marketContract));
        return marketContract;
    }
    return thunkAPI.getState().marketContract
};

const fetchTokenWithContractAndTokenId = async (tokenContract, tokenId) => {
    const tokenURI = await tokenContract.methods
        .tokenURI(tokenId)
        .call();
    const response = await axios.get(tokenURI);
    const tokenMetadata = response.data;
    tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
    return {
        ...tokenMetadata,
        tokenId: tokenId,
        owner: tokenOwner.toLowerCase()
    };
}

const addItemOnSaleThunk = createAsyncThunk(
    `${name}/ADD_ITEM_ON_SALE`,
    async ({tokenId, myAddress, price}, thunkAPI) => {
        const marketContract = await initializeMarketContract(thunkAPI);
        await marketContract.methods
            .sell(
                NFT_CONTRACT_ADDR,
                tokenId,
                Web3.utils.toWei(price),
            )
            .send({
                from: myAddress,
                value: Web3.utils.toWei('0.02', 'ether')
            })
            .on("receipt", (receipt) => {
                if (receipt) {
                    const returnValues = receipt.events.ItemCreated.returnValues;
                    const itemId = returnValues.itemId;
                    const price = returnValues.price;
                    const seller = returnValues.seller;
                    const tokenId = returnValues.tokenId;
                    const payload = {
                        itemId: itemId,
                        price: Web3.utils.fromWei(price),
                        seller: seller.toLowerCase(),
                        tokenId: tokenId
                    };
                    console.log(payload);
                    thunkAPI.dispatch(tokenActions.addItemOnSale(payload));
                    return true;
                }
                return false;
            });
    }
)

const removeItemOnSaleThunk = createAsyncThunk(
    `${name}/REMOVE_ITEM_ON_SALE`,
    async ({myAddress, itemId}, thunkAPI) => {
        const marketContract = await initializeMarketContract(thunkAPI);
        await marketContract.methods
            .saleCancel(
                NFT_CONTRACT_ADDR,
                itemId
            )
            .send({from: myAddress})
            .on("receipt", (receipt) => {
                if (receipt) {
                    const returnValues = receipt.events.SaleCanceled.returnValues;
                    const tokenId = returnValues.tokenId;
                    const itemId = returnValues.itemId;
                    const seller = returnValues.seller;
                    const payload = {
                        itemId: itemId,
                        seller: seller.toLowerCase(),
                        tokenId: tokenId
                    };
                    console.log(payload);
                    thunkAPI.dispatch(tokenActions.removeItemOnSale(payload));
                    return true;
                }
                return false;
            });
    }
)

const buyItemOnSale = createAsyncThunk(
    `${name}/BUY_ITEM_ON_SALE`,
    async ({itemId, myAddress, price}, thunkAPI) => {
        const marketContract = await initializeMarketContract(thunkAPI);
        await marketContract.methods
            .buy(
                NFT_CONTRACT_ADDR,
                itemId
            )
            .send({
                from: myAddress,
                value: Web3.utils.toWei(String(price), 'ether')
            })
            .on("receipt", (receipt) => {
                if (receipt) {
                    const returnValues = receipt.events.ItemSold.returnValues;
                    const tokenId = returnValues.tokenId;
                    const itemId = returnValues.itemId;
                    const seller = returnValues.seller;
                    const buyer = returnValues.buyer;
                    const price = returnValues.price;
                    const payload = {
                        itemId: itemId,
                        seller: seller.toLowerCase(),
                        buyer: buyer.toLowerCase(),
                        tokenId: tokenId,
                        price: Web3.utils.fromWei(price),
                    };
                    console.log(payload);
                    thunkAPI.dispatch(tokenActions.removeItemOnSale(payload));
                    return true;
                }
                return false;
            });
    }
)

const setTotalSupply = createAsyncThunk(
    `${name}/SET_TOTAL_SUPPLY`,
    async (_, thunkAPI) => {
        const tokenContract = await initializeTokenContract(thunkAPI);
        const totalSupply = await tokenContract.methods.totalSupply().call();
        return parseInt(totalSupply);
    }
);

const setTokenContract = createAsyncThunk(
    `${name}/SET_TOKEN_CONTRACT`,
    async (_, thunkAPI) => {
        if (!thunkAPI.getState().tokenContract) {
            const web3 = await initializeWeb3(thunkAPI);
            const tokenContract = await new web3.eth.Contract(
                NFT_CONTRACT_ABI,
                NFT_CONTRACT_ADDR
            );
            return tokenContract;
        }
        return thunkAPI.getState().tokenContract
    }
);

const setMarketContract = createAsyncThunk(
    `${name}/SET_MARKET_CONTRACT`,
    async (_, thunkAPI) => {
        if (!thunkAPI.getState().marketContract) {
            const web3 = await initializeWeb3(thunkAPI);
            const marketContract = await new web3.eth.Contract(
                MARKET_CONTRACT_ABI,
                MARKET_CONTRACT_ADDR
            );
            return marketContract;
        }
        return thunkAPI.getState().marketContract
    }
);

// const fetchMyTokenIds = async (myAddress, tokenContract, tokenId) => {
//     const myTokenIds = [];
//     const tokenContract = await initializeTokenContract(thunkAPI);
//     const totalSupply = await tokenContract.methods.totalSupply().call();
//     for (let tokenId = 1; tokenId<=totalSupply; tokenId++){
//         const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
//         if (String(tokenOwner).toLowerCase()===myAddress) {
//             myTokenIds.push(tokenId);
//         }
//     }
// }

const setMyTokenIds = createAsyncThunk(
    `${name}/SET_MY_TOKEN_IDS`,
    async (myAddress, thunkAPI) => {
        const myTokenIds = [];
        const tokenContract = await initializeTokenContract(thunkAPI);
        const totalSupply = await tokenContract.methods.totalSupply().call();
        for (let tokenId = 1; tokenId<=totalSupply; tokenId++){
            const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
            if (String(tokenOwner).toLowerCase()===myAddress) {
                myTokenIds.push(tokenId);
            }
        }
        return myTokenIds;
    }
);

const fetchToken = createAsyncThunk(
    `${name}/FETCH`,
    async (tokenId, thunkAPI) => {
        const tokenContract = await initializeTokenContract(thunkAPI);
        return await fetchTokenWithContractAndTokenId(tokenContract, tokenId);
    }
);

const fetchItemsOnSale = createAsyncThunk(
    `${name}/FETCH_ITEMS_ON_SALE`,
    async (_, thunkAPI) => {
        const marketContract = await initializeMarketContract(thunkAPI);
        const result = await marketContract.methods.fetchItemsOnSale().call();
        const tokenIdToItem = {};
        for (const item of result) {
            tokenIdToItem[item.token.tokenId] = {
                itemId: item.itemId,
                price: Web3.utils.fromWei(item.price),
                seller: item.seller.toLowerCase()
            }
        }
        return tokenIdToItem;
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
        },
        setMarketContract: (
            state,
            action
        ) => {
            state.marketContract = action.payload
        },
        addItemOnSale: (
            state,
            action
        ) => {
            state.itemsOnSale = {
                ...state.itemsOnSale,
                [action.payload.tokenId]: {
                    itemId: action.payload.itemId,
                    price: action.payload.price,
                    seller: action.payload.seller
                }
            }
            state.myTokenIds = state.myTokenIds.filter(id => id != action.payload.tokenId)
        },
        removeItemOnSale: (
            state,
            action
        ) => {
            state.itemsOnSale = Object.fromEntries(Object.entries(state.itemsOnSale).filter(([key]) => key != action.payload.tokenId));
            state.myTokenIds = [...state.myTokenIds, parseInt(action.payload.tokenId)]
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
                    image: action.payload.image,
                    owner: action.payload.owner
                }
            }
        },
        [setTotalSupply.fulfilled.type]: (state, action) => {
            state.totalSupply = action.payload;
        },
        [setTokenContract.fulfilled.type]: (state, action) => {
            state.tokenContract = state.tokenContract || action.payload;
        },
        [setMarketContract.fulfilled.type]: (state, action) => {
            state.marketContract = state.marketContract || action.payload;
        },
        [setMyTokenIds.fulfilled.type]: (state, action) => {
            state.myTokenIds = action.payload;
        },
        [fetchItemsOnSale.fulfilled.type]: (state, action) => {
            state.itemsOnSale = action.payload;
        }
    }
});

export const tokenActions = {
    ...tokenSlice.actions,
    fetchToken,
    setTotalSupply,
    setTokenContract,
    setMarketContract,
    setMyTokenIds,
    addItemOnSaleThunk,
    fetchItemsOnSale,
    removeItemOnSaleThunk,
    buyItemOnSale
};
