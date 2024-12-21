import React from 'react';
import s from './Messages.module.css'


type MessageProps = {
    message: string;
}

export const Messages = ({message}: MessageProps) => {
    return (
        <div className={s.messages}>{message}</div>
    );
};

