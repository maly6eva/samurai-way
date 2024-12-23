import s from './Friend.module.css'
import avatar from "../../../images/multiashnaia.webp";
import React from "react";
import {NavbarPropsType} from "../../../redux/state";


export const Friend = ({id, name}: NavbarPropsType ) => {
    return (
        <div className={s.navbarFriend}>
            <div className={s.friendImg} key={id}>
                <img src={avatar} alt="Tyra Bunks"/>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

