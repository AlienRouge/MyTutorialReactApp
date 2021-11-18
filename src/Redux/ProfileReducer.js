import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
    profile: null,
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profileData,
            }

        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const SetUserProfile = (profile) => ({type: SET_USER_PROFILE, profileData: profile})

export default ProfileReducer;
