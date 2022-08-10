import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistedReducer from '.';   // redux-persist


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;