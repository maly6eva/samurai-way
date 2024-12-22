import React from 'react';
// import s from './../Dialogs.module.css'
import s from './Messages.module.css'
import {MessageProps} from "../../../index";



export const Messages = ({message}: MessageProps) => {
    return (
        <div className={s.messages}>{message}</div>
    );
};

