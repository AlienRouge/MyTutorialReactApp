import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        {id: 1, name: "Andrew", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5827.png"},
        {id: 2, name: "Howard", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5234.png"},
        {id: 3, name: "Billy", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk8620.png"},
        {id: 4, name: "Alex", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4894.png"},
        {id: 5, name: "Jason", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4324.png"},
        {id: 6, name: "Miley", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5929.png"},
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
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: generateUniqueID(),
                text: state.newMessageText,
            }
            state.newMessageText = "";
            state.messages.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const AddNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
}
export const UpdateNewMessageTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
}

export default DialogsReducer;