import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {ActionType, DialogsPageType} from "../../redux/state";
import { newText, newTextValue} from "../../redux/dialogs-reducer";



type DialogsDataPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = ({ dialogsPage, dispatch }: DialogsDataPropsType) => {

    const dialogElement =  dialogsPage.dialogsData.map(dialog => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
        )
    })

    const messagesElement = dialogsPage.messagesData.map((messages) => {
        return (
            <Messages key={messages.id} id={messages.id} message={messages.message}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                    {messagesElement}
                <div className={s.textmessages}>
                    <textarea value={dialogsPage.messages} onChange={(e) => newTextValue(e, dispatch)} placeholder={'Введите сообщение...'}></textarea>
                    <button onClick={() => newText( dialogsPage.messages, dispatch  )}>Добавить!</button>
                </div>
            </div>

        </div>
    );
};
