

import React, {ChangeEvent, useRef, useState} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {} from "../../index";
import {DialogPropsType, DialogsPageType, MessageProps} from "../../redux/state";


type DialogsDataPropsType = {
    dialogsPage: DialogsPageType
    messagesPost: (postMassage: string) => void
    messages: string
    updateNewMessagesText: (newMessages: string) => void
}

export const Dialogs = ({ dialogsPage, messagesPost, messages,   updateNewMessagesText}: DialogsDataPropsType) => {
    // const newTextElement = useRef<HTMLTextAreaElement>(null)
    const [newTextElement, setNewTextElement] = useState('')

    let dialogElement =  dialogsPage.dialogsData.map(dialog => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
        )
    })

    let messagesElement = dialogsPage.messagesData.map((messages) => {
        return (
            <Messages key={messages.id} id={messages.id} message={messages.message}/>
        )
    })

     let messElement =  dialogsPage.messagesData.map((message) => {
         return (
             <div>
                 <p>{message.message}</p>
             </div>
         )
     })


    const newTextValue = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessagesText(e.currentTarget.value)
    }

    const newText = () => {
        if (messages.trim()) {
            messagesPost(messages)
            updateNewMessagesText('')
        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                    {messagesElement}
                <div className={s.textmessages}>
                    <textarea value={messages} onChange={newTextValue} placeholder={'Введите сообщение...'}></textarea>
                    <button onClick={newText}>Добавить!</button>
                </div>
            </div>

        </div>
    );
};
