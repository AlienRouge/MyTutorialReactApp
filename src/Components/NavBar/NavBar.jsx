import React from "react";
import m from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";


const NavBar = (props) => {
    return (

        <nav className={m.navBar}>
            <div className={m.navItem}>
                <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            </div>
            <div className={m.navItem}>
                <NavLink to='/dialogs' activeClassName={m.active}>Messages</NavLink>
            </div>
            <div className={m.navItem}>
                <NavLink to='/news' activeClassName={m.active}>News</NavLink>
            </div>
            <div className={m.navItem}>
                <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            </div>
            <div className={m.navItem}>
                <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            </div>
            <div className={m.friendsBlock}>
                <div className={m.head}>Best Friends</div>
                {props.state.friendsList.map(friend => (<FriendItem state={friend}/>))}
            </div>
        </nav>
    );
}

export default NavBar