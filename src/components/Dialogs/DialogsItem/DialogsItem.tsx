import React from 'react';
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    name: string,
    id: string,
}


export const DialogItem = ({name, id}:  DialogPropsType ) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
        </div>

    )
}


