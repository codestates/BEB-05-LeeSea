import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // react-router
import { Provider } from 'react-redux'; // redux
import store from './redux/store';  // redux
import { persistStore } from 'redux-persist';	// redux-persist
import { PersistGate } from 'redux-persist/integration/react';	// redux-persist

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store)	// redux-persist

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);