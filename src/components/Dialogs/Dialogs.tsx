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

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'OK'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsData.map(dialog => {
                    return (
                        <DialogItem id={dialog.id} name={dialog.name}/>
                        )
                })}

                 {/*<DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>*/}
                 {/*<DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>*/}
                 {/*<DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>*/}
                 {/*<DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>*/}
                 {/*<DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>*/}
            </div>
            <div className={s.messages}>
                {messagesData.map((messages) => {
                    return (
                        <Messages message={messages.message}/>
                    )
                })}

                {/*<Messages message={messagesData[1].message}/>*/}
                {/*<Messages message={messagesData[2].message}/>*/}
            </div>
        </div>

    );
};
