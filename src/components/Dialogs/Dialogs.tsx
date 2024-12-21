import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem, DialogPropsType} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";


export const Dialogs = ({name, id}: DialogPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id='1' name={'Ksenia'}/>
                <DialogItem id='2' name={'Valery'}/>
                <DialogItem id='3' name={'Dimasik'}/>
                <DialogItem id='4' name={'Diana'}/>
                <DialogItem id='5' name={'Darina'}/>
                <DialogItem id='6' name={'Timur'}/>
            </div>
            <div className={s.messages}>
                <Messages message={'Hi'}/>
                <Messages message={'How are you?'}/>
                <Messages message={'OK'}/>
            </div>
        </div>

    );
};
