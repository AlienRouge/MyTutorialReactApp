import React from "react";
import m from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={m.message}>{props.state.text}</div>
    )
}

export default MessageItem;