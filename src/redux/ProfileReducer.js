import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: generateUniqueID(), message: "Hello world!", likesCount: 13},
        {id: generateUniqueID(), message: "Hello my Gachi club!", likesCount: 23},
        {id: generateUniqueID(), message: "This videos so long...", likesCount: 3},
    ],
    newPostText: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: generateUniqueID(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default ProfileReducer;
