import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink className={s.item} activeClassName={s.activeLink} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.activeLink} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.activeLink} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className={s.item} activeClassName={s.activeLink} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

