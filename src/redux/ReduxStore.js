import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import DialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
    profileData: ProfileReducer,
    dialogsData: DialogsReducer,
    sidebarData: SidebarReducer,
})

let store = createStore(reducers);
window.store = store;
export default store;