import React, {ChangeEvent, useRef, useState} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {} from "../../index";
import {DialogPropsType, MessageProps} from "../../redux/state";


type DialogsDataPropsType = {
    dialogsData: DialogPropsType[]
    messagesData: MessageProps[]
}

export const Dialogs = ({dialogsData, messagesData}: DialogsDataPropsType) => {
    // const newTextElement = useRef<HTMLTextAreaElement>(null)
    const [newTextElement, setNewTextElement] = useState('')

    let dialogElement = dialogsData.map(dialog => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
        )
    })

    let messagesElement = messagesData.map((messages) => {
        return (
            <Messages key={messages.id} id={messages.id} message={messages.message}/>
        )
    })


    const newTextValue = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewTextElement(e.currentTarget.value)
    }

    const newText = () => {
        if (newTextElement) {
            alert( newTextElement)
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
                    <textarea value={ newTextElement} onChange={newTextValue} placeholder={'Введите сообщение...'}></textarea>
                    <button onClick={newText}>Добавить!</button>
                </div>
            </div>

        </div>
    );
};
