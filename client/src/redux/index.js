import { logger } from 'redux-logger';
import { accountSlice } from './accountSlice';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    version: 0,
    storage,
};

const rootReducer = combineReducers({
    account: accountSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    devTools: true,
});

export const persistor = persistStore(store);
export default store;
