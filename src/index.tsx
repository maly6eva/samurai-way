import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";



export type PostProps = {
    message: string,
    like: number,
    id: number,
}
let post: PostProps[] = [
    {id: 1, message: 'Go', like: 373},
    {id: 2, message: 'Gi', like: 233},
    {id: 3, message: 'Good post', like: 133},
]


export type DialogPropsType = {
    name: string,
    id: number,
}

let dialogsData : DialogPropsType[] = [
    {id: 1, name: 'Ksenia'},
    {id: 2, name: 'Valery'},
    {id: 3, name: 'Dimasik'},
    {id: 4, name: 'Diana'},
    {id: 5, name: 'Timur'},
    {id: 6, name: 'Darina'}
]


export type MessageProps = {
    id: number,
    message: string;
}

let messagesData:  MessageProps[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'OK'},
]



ReactDOM.render(
    <App  post={post}  dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);