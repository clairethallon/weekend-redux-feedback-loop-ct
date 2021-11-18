import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// feeling holder
const feeling = (state = '', action) => {
    console.log('hello from feeling reducer');
    if (action.type === 'FEELINGS_CHOICE') {
        return action.payload;
    }
    return state;
}

const understanding = (state = '', action) => {
    console.log('hello from understanding reducer');
    if (action.type === 'UNDERSTANDING_CHOICE') {
        return action.payload;
    }
    return state;
}
// a store
const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding
        }
    ),
    applyMiddleware(
        logger
    )
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,

    document.getElementById('root'));
registerServiceWorker();
