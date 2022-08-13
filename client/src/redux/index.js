import { logger } from 'redux-logger';
import { accountSlice } from './accountSlice';
import { tokenSlice } from './tokenSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    version: 0,
    whitelist: ['account'],
    storage,
};

const rootReducer = combineReducers({
    account: accountSlice.reducer,
    token: tokenSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    devTools: true,
});

export const persistor = persistStore(store);
export default store;
