import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/reducer/rootReducer";
import './index.css';
import App from './App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
