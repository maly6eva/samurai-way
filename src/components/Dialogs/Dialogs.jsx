import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}> Ksenia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}> Valery</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Dimasik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}> Diana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.active}> Darina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' activeClassName={s.active}> Timur</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>OK</div>
            </div>
        </div>

    );
};
