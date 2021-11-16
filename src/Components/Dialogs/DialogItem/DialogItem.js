import React from "react";
import m from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={m.dialog}>
            <img className={m.dialogAvatar} src={props.state.avatarUrl} alt=""/>
            <NavLink className={m.dialogName} to={`/dialogs/${props.state.id}`}>{props.state.name}</NavLink>
        </div>
    )
}

export default DialogItem;