import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, updateNewPostText, StateType, messagesPost, updateNewMessagesText} from './redux/state'

// addPost('Jgi!')

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}  updateNewPostText={updateNewPostText} messagesPost={messagesPost} updateNewMessagesText={updateNewMessagesText}/>,
        document.getElementById('root')
    );
}


