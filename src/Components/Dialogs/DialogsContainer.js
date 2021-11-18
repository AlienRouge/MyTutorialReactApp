import {connect} from "react-redux";
import {AddNewMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewMessage: () => dispatch(AddNewMessageActionCreator()),
        UpdateNewMessageText: (body) => dispatch(UpdateNewMessageTextActionCreator(body))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;