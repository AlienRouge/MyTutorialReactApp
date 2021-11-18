import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebarData: SidebarReducer,
    usersPage: UsersReducer,
})

let store = createStore(reducers);
window.store = store;
export default store;