import React from "react";
import m from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendsAreaContainer from "./FriendsArea/FriendsAreaContainer";


const NavBar = () => {
    return (
        <nav className={m.navBar}>
            <div className={m.navItem}>
                <NavLink to='/profile' className={({isActive}) => (isActive ? m.active : "")}>Profile</NavLink>
            </div>

            <div className={m.navItem}>
                <NavLink to='/dialogs' className={({isActive}) => (isActive ? m.active : "")}>Messages</NavLink>
            </div>

            <div className={m.navItem}>
                <NavLink to='/news' className={({isActive}) => (isActive ? m.active : "")}>News</NavLink>
            </div>

            <div className={m.navItem}>
                <NavLink to='/music' className={({isActive}) => (isActive ? m.active : "")}>Music</NavLink>
            </div>

            <div className={m.navItem}>
                <NavLink to='/settings' className={({isActive}) => (isActive ? m.active : "")}>Settings</NavLink>
            </div>

            <div className={m.navItem}>
                <NavLink to='/users' className={({isActive}) => (isActive ? m.active : "")}>Users</NavLink>
            </div>

            <FriendsAreaContainer/>
        </nav>
    );
}

export default NavBar