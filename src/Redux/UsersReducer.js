const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/9yReo2LvDZaSwnDHY8x03mVk6gOGasL7JO2dAfdZlIr-m5mSJoA7kOvkrK-nAKZ0sqCAWwHBw_kmk7aLmkIWBV8=w199",
        //     firstName: "Dmitriy",
        //     lastName: "Krener",
        //     location: {country: "Belarus", city: "Minsk"},
        //     statusText: "Hey!",
        //     followed: false
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/hgTf7HyfAPZ-7Y_fv7ZJ1dVeBu1vbLNZyo3Jb6ZEckQ35sNkHgk9ltBo6k32WdadyhMHSh2-V4OhmJRw72T7enIgfiFbkEvErvDW=w199",
        //     firstName: "Nikolai",
        //     lastName: "Bend",
        //     location: {country: "Ukraine", city: "Kiev"},
        //     statusText: "Jump!",
        //     followed: true
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/uKvhp11BMZ5RNCvkS_SmOI2l5zy271dITmHiU_fPEBqH_R0BHuFZNnjft_ldgsqcpc_KNfiByBoXcals8gC5Z3RmDFAqBOY2FYlD0w=w199",
        //     firstName: "Anatoliy",
        //     lastName: "Sharij",
        //     location: {country: "Ukraine", city: "Kiev"},
        //     statusText: "I wanna go back",
        //     followed: false
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/TJURATtNwsyGHeC85k0iQiJ5eBuq3F7Jf1Xa5VdqxzLuNbSB5ApeSQoyGxRniVVRVktyQvQ3TNnK6qAcB7gheDjOlmRa9lFCETvb=w199",
        //     firstName: "Vladislav",
        //     lastName: "Paper",
        //     location: {country: "Belarus", city: "Minsk"},
        //     statusText: "Please!",
        //     followed: false
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/I9EAm1CbmvQVd3zY3-aXFoFCH83mhxlMuJp4ulDXTsXX_BjMsrIBMjAr-enP14H3hMbZXPTTu0RiTfyfWzkDOwtfjI9AGUS3-iX5Ig=w199",
        //     firstName: "James",
        //     lastName: "Flair",
        //     location: {country: "USA", city: "New York"},
        //     statusText: "Vote for Trump!",
        //     followed: true
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/v6WogT7WRKdqGTMPJZc3h5Z7CVbYJWy6MvNPOiNQfV63IPq5NEZIOLTAY-6e7reSNBPxmeRasYN19QnIYbroM_6Lv7Lg8N_tkAFxbw=w199",
        //     firstName: "Biba",
        //     lastName: "Aboba",
        //     location: {country: "Kuwait", city: "Kuwait City"},
        //     statusText: "Come with me and you will be a queen",
        //     followed: false
        // },
        // {
        //     id: generateUniqueID(),
        //     imgUrl: "https://lh3.googleusercontent.com/eCt1AO1dKEGamf-lDlvt7YlpFN9zRy3zmoZ4fnnKWduEnQv-eRtUb4w8qSRdvO5XeqQzqjYsh1KoS8w-AWSAGCeMuJxKZeYKv-uwQg=w199",
        //     firstName: "Penh",
        //     lastName: "Phnom",
        //     location: {country: "Azerbaijan ", city: "Baku"},
        //     statusText: "I wanna go to Cambodia!",
        //     followed: false
        // },
    ]
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger;
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return {...user, followed: true};
                    else
                        return user;
                })
            };

        case UNFOLLOW:
            debugger;
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return {...user, followed: false};
                    else
                        return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

// Action creators
export const FollowAC = (id) => ({type: FOLLOW, userId: id})
export const UnfollowAC = (id) => ({type: UNFOLLOW, userId: id})
export const SetUsersAC = (users) => ({type: SET_USERS, users: users})


export default UsersReducer;