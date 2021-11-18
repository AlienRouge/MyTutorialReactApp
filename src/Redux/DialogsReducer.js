import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        {id: generateUniqueID(), name: "Andrew", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5827.png"},
        {id: generateUniqueID(), name: "Howard", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5234.png"},
        {id: generateUniqueID(), name: "Billy", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk8620.png"},
        {id: generateUniqueID(), name: "Alex", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4894.png"},
        {id: generateUniqueID(), name: "Jason", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4324.png"},
        {id: generateUniqueID(), name: "Miley", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5929.png"},
    ],
    messages: [
        {id: generateUniqueID(), text: "Hi"},
        {id: generateUniqueID(), text: "Whats up?"},
        {id: generateUniqueID(), text: "How a u"},
        {id: generateUniqueID(), text: "Boy"},
    ],
    newMessageText: "",
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: generateUniqueID(),
                text: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            };

        default:
            return state;
    }
}

export const AddNewMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const UpdateNewMessageTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
}

export default DialogsReducer;