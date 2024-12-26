import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, StateType} from './redux/state'

// addPost('Jgi!')

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}


