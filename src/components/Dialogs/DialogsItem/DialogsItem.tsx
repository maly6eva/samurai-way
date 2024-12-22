import React from 'react';
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../index";




export const DialogItem = ({name, id}:  DialogPropsType ) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
        </div>

    )
}


