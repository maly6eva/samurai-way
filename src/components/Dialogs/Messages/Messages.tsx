import React from 'react';
import s from './Messages.module.css'
import {MessageProps} from "../../../redux/state";


export const Messages = ({message}: MessageProps) => {
    return (
        <>
            <div className={s.messages}>{message}</div>
        </>
    )
};

