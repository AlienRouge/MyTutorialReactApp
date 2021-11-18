import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetUsersAC, UnfollowAC} from "../../Redux/UsersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => (dispatch(FollowAC(userId))),
        Unfollow: (userId) => (dispatch(UnfollowAC(userId))),
        SetUsers: (users) => (dispatch(SetUsersAC(users)))
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;