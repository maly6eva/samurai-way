import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem, DialogPropsType} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";


export const Dialogs = ({name, id}: DialogPropsType) => {


    let dialogsData = [
        {id: 1, name: 'Ksenia'},
        {id: 2, name: 'Valery'},
        {id: 3, name: 'Dimasik'},
        {id: 4, name: 'Diana'},
        {id: 5, name: 'Timur'},
        {id: 6, name: 'Darina'}
    ]

    let dialogElement = dialogsData.map(dialog => {
            return (
                <DialogItem id={dialog.id} name={dialog.name}/>
            )
        })

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'OK'},
    ]

    let messagesElement = messagesData.map((messages) => {
            return (
                <Messages message={messages.message}/>
            )
        })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    );
};
