import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// reducer holder
const reducer = (state = [], action) => {
    if (action.type === 'ADD_BOOK') {
        return [...state, action.payload];
    }
    return state;
}
// a store
const storeInstance = createStore(
    combineReducers(
        {
            reducer
        }
    ),
    applyMiddleware(
        logger
    )
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
