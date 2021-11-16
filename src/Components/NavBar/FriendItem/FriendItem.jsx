import React from "react";
import m from "./FriendItem.module.css"


const FriendItem = (props) => {
    return (
        <div className={m.friendItem}>
            <img className={m.friendAvatar} src={props.state.avatarUrl} alt=""/>
            <div className={m.friendCaption}>{props.state.name}</div>
        </div>
    )
}

export default FriendItem