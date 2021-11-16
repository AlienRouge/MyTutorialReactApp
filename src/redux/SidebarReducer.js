const initialState = {
    friendsList: [
        {id: 1, name: "Andrew", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk5827.png"},
        {id: 4, name: "Alex", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk4894.png"},
        {id: 3, name: "Billy", avatarUrl: "https://www.larvalabs.com/public/images/cryptopunks/punk8620.png"},
    ]
}

const SidebarReducer = (state = initialState, action) => {
    return state;
}

export default SidebarReducer