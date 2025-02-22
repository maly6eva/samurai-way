import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import { RootState} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";




type DialogsDataPropsType = {
    updateNewMessageBody: () => void,
    sensMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogsPage: DialogsPageType

}

export const Dialogs = ({ updateNewMessageBody, sensMessage,  dialogsPage  }: DialogsDataPropsType) => {
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
                    <textarea value={dialogsPage.messages} onChange={sensMessage} placeholder={'Введите сообщение...'}></textarea>
                    <button onClick={updateNewMessageBody}>Добавить!</button>
                </div>
            </div>
        </div>
    );
};
