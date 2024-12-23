import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {} from "../../index";
import {DialogPropsType, MessageProps, state} from "../../redux/state";



type DialogsDataPropsType = {
    dialogsData: DialogPropsType[]
    messagesData: MessageProps[]
}

    export const Dialogs = ({dialogsData, messagesData}: DialogsDataPropsType) => {
    let dialogElement = dialogsData.map(dialog => {
            return (
                <DialogItem id={dialog.id} name={dialog.name}/>
            )
        })


    let messagesElement = messagesData.map((messages) => {
            return (
                <Messages  id={messages.id} message={messages.message}/>
            )
        })
        debugger
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
