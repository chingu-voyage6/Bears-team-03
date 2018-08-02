import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Async from './middleware/async';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers/rootReducer';
import {LOGGED_IN} from './actions/actionTypes'

const storeMiddleware = applyMiddleware(Async, reduxThunk)(createStore)
const store = storeMiddleware(rootReducer);

const token = localStorage.getItem('token');
if(token){
  store.dispatch({
    type: LOGGED_IN
  })
}
ReactDOM.render( 
    <Provider store={store}>
    <App />
    </Provider>
  ,
document.getElementById('root'));
registerServiceWorker();