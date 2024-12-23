import React from 'react';
import s from './Post.module.css'
import avatar from "../../../../images/multiashnaia.webp";




type PastTypeProps= {
    message: string,
    like: number,
    name: string,
}

export const Post = ({message, like, name}:  PastTypeProps) => {


    return (
        <div className={s.item}>

            <img src={avatar} alt="Tyra Bunks"/>
            {message}

            <div>
                <h3>{name}</h3>
                <span>
                    like
                </span> {like}</div>
        </div>
    );
};

