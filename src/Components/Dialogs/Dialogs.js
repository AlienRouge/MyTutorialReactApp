import React from "react";
import m from './Dialogs.module.css';
import MessageItem from "./MessageItem/Message";
import DialogItem from "./DialogItem/DialogItem";
import {AddNewMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";

const Dialogs = (props) => {
    let messageTextarea = React.createRef();

    const AddNewMessage = () => {
        props.dispatch(AddNewMessageActionCreator())
        messageTextarea.current.value = "";
    }
    const OnChangeNewMessage = () => {
        let text = messageTextarea.current.value;
        props.dispatch(UpdateNewMessageTextActionCreator(text))
    }


    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {props.state.dialogs.map(dialog => (<DialogItem state={dialog}/>))}
            </div>

            <div className={m.messagesItems}>
                {props.state.messages.map(message => (<MessageItem state={message}/>))}
                <textarea className={m.messageTextarea} ref={messageTextarea} onChange={OnChangeNewMessage}
                          value={props.state.newMessageText}/>
                <button onClick={AddNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;