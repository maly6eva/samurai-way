import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friend} from "./ Friend/Friend";
import store, {RootState} from "../../redux/redux-store";



type NavbarPropsType = {
    store: {
        getState: () => RootState;
    };
};

export const Navbar = ({store}: NavbarPropsType) => {
    const state = store.getState(); // Получаем состояние через store.getState()
    const navbar = state.profilePage.navbar; // Получаем navbar из состояния

    const navbarFriend = navbar.map((friend) => {
        return <Friend key={friend.id} id={friend.id} name={friend.name}/>;
    });

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

            <div>
                <div className={s.navbar}>
                    <h3 className={s.friend}>Friends</h3>
                </div>
                <div className={s.navbarFriend}>
                    {navbarFriend}
                </div>
            </div>
        </nav>
    );
};
