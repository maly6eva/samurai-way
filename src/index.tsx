
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(

            <Provider store={store}>
                <BrowserRouter>
                <App />
                </BrowserRouter>
            </Provider>,

        document.getElementById('root')
    );
};

// Первоначальный рендер
rerenderEntireTree();

// // Подписка на изменения в `store`
// store.subscribe(rerenderEntireTree);


