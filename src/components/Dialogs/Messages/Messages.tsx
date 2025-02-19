import React from 'react';
import s from './Messages.module.css'
import {MessageProps} from "../../../redux/store";


export const Messages = ({message}: MessageProps) => {
    return (
        <>
            <div className={s.messages}>{message}</div>
        </>
    )
};

