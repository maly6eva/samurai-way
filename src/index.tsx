import {StateType, store} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";



 let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}  updateNewPostText={store.updateNewPostText.bind(store)} messagesPost={store.messagesPost.bind(store)} updateNewMessagesText={store.updateNewMessagesText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)
