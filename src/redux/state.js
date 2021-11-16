import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

let store = {
    _state: {
        dialogsData: {
            dialogs: [
                {id: 1, name: "Andrew", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5827.png"},
                {id: 2, name: "Howard", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5234.png"},
                {id: 3, name: "Billy", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk8620.png"},
                {id: 4, name: "Alex", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4894.png"},
                {id: 5, name: "Jason", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4324.png"},
                {id: 6, name: "Miley", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5929.png"},
            ],
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Whats up?"},
                {id: 3, text: "How a u"},
                {id: 4, text: "Boy"},
            ],
        },
        profileData: {
            posts: [
                {id: 1, message: "Hello world!", likesCount: 13},
                {id: 2, message: "Hello my Gachi club!", likesCount: 23},
                {id: 3, message: "This videos so long...", likesCount: 3},
            ],
            newPost: "",
        },
        sideBarData: {
            friends: [
                {id: 1, name: "Andrew", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5827.png"},
                {id: 4, name: "Alex", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4894.png"},
                {id: 3, name: "Billy", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk8620.png"},
            ]
        }
    },
    _renderEntireTree() {},
    GetState() {
        return this._state
    },
    AddPost() {
        let newPost = {
            id: generateUniqueID(),
            message: this._state.profileData.newPost,
            likesCount: 0,
        };
        this._state.profileData.posts.push(newPost);
        this._state.profileData.newPost = "";
        this._renderEntireTree(this._state);
    },
    UpdatePost(text) {
        this._state.profileData.newPost = text;
        this._renderEntireTree(this._state);
    },
    Subscribe(observer) {
        this._renderEntireTree = observer;
    }
}
window.state = store;

export default store
