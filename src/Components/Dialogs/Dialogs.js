import React from "react";
import m from './Dialogs.module.css';
import MessageItem from "./MessageItem/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {props.dialogs.map(dialog => (<DialogItem state={dialog}/>))}
            </div>

            <div className={m.messagesItems}>
                {props.messages.map(message => (<MessageItem state={message} />))}
            </div>
        </div>
    )
}

export default Dialogs;