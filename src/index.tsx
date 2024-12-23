import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {state} from './redux/state'






ReactDOM.render(
    <App post={state.post}  dialogsData={state.dialogsData} messagesData={state.messagesData} />,
  document.getElementById('root')
);