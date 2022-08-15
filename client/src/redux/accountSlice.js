import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const name = "ACCOUNT";
const initialState = {
    address: "",
    loading: false,
}

const getAccounts = async() => {
    await window.ethereum.enable();
    return await window.ethereum.request({
        method: "eth_requestAccounts",
    });
}

const fetchAccount = createAsyncThunk(
    `${name}/FETCH`,
    async () => {
        const accounts = await getAccounts();
        return accounts[0];
    }
);

export const accountSlice = createSlice({
    name: name,
    initialState: initialState,
    reducers: {
        setAccount: (
            state,
            action
        ) => {
            state.address = action.payload
        }
    },
    extraReducers: {
        [fetchAccount.pending.type]: (state, action) => {
            state.loading = true;
        },
        [fetchAccount.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.address = action.payload;
        },
        [fetchAccount.rejected.type]: (state, action) => {
            state.loading = false;
        }
    }
});

export const accountActions = {...accountSlice.actions, fetchAccount};
