import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {state} from './redux/state'


ReactDOM.render(
    <App post={state.profilePage.post}
         dialogsData={state.dialogsPage.dialogsData}
         messagesData={state.dialogsPage.messagesData} />,
  document.getElementById('root')
);