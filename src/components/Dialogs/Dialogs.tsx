import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {ActionType, DialogsPageType} from "../../redux/state";


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


    const newTextValue = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: 'updateNewMessagesText', newMessages: e.currentTarget.value})
    }

    const newText = () => {
        if (dialogsPage.messages.trim()) {
           dispatch({type: 'messagesPost'})
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
                    <textarea value={dialogsPage.messages} onChange={newTextValue} placeholder={'Введите сообщение...'}></textarea>
                    <button onClick={newText}>Добавить!</button>
                </div>
            </div>

        </div>
    );
};
