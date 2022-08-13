import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const name = "ACCOUNT";
const initialState = {
    address: "",
    loading: false,
}

const fetchAccount = createAsyncThunk(
    `${name}/FETCH`,
    async (thunkAPI) => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            return accounts[0];
        } catch (e) {
            return thunkAPI.rejectWithValue(await e);
        }
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
