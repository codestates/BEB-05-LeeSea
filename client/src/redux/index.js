// redux의 rootReducer를 정의하는 파일
// 현재는 rootReducer를 redux-persist로 사용하고 있음

import { combineReducers } from 'redux';
import { accountReducer, tokenMetadataReducer } from './reducers';
import { persistReducer } from 'redux-persist';	// redux-persist
import storage from 'redux-persist/lib/storage';	// redux-persist

const persistConfig = {
  key: 'root',
  storage,
}	// redux-persist

const rootReducer = combineReducers({
  accountReducer,
  tokenMetadataReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);	// redux-persist

export default persistedReducer;  // redux-persist