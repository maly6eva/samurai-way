import React from 'react';
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../redux/store";
import avatar from "../../../images/multiashnaia.webp";


export const DialogItem = ({name, id}:  DialogPropsType ) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog}>
            <img src={avatar} alt="Tyra Bunks"/>
            <NavLink to={path} activeClassName={s.active}></NavLink>
            <p>{name}</p>
        </div>
    )
}


