import React from "react";
import m from './Dialogs.module.css';
import MessageItem from "./MessageItem/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let messageTextarea = React.createRef();

    const OnMessageAdd = () => {
        props.AddNewMessage();
        messageTextarea.current.value = "";
    }
    const OnChangeNewMessageText = () => {
        let text = messageTextarea.current.value;
        props.UpdateNewMessageText(text);
    }
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {props.dialogsData.dialogs.map(dialog => (<DialogItem key={dialog.id} state={dialog}/>))}
            </div>

            <div className={m.messagesItems}>
                {props.dialogsData.messages.map(message => (<MessageItem key={message.id} state={message}/>))}
                <textarea className={m.messageTextarea} ref={messageTextarea} onChange={OnChangeNewMessageText}
                          value={props.dialogsData.newMessageText}/>
                <button onClick={OnMessageAdd}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;