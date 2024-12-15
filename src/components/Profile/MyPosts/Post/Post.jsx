import React from 'react';
import s from './Post.module.css'
import avatar from "../../../../images/tyra.png";
import * as props from "antd";




export const Post= (props) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="Tyra Bunks"/>
            {props.message}
            <div>
                <span>
                    {props.like}
                </span>
            </div>
        </div>
    );
};

