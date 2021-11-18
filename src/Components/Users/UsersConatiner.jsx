import {connect} from "react-redux";
import Users from "./Users";
import {
    Follow,
    SetCurrentPage,
    SetFetchingStatus,
    SetTotalUsersCount,
    SetUsers,
    Unfollow
} from "../../Redux/UsersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        Follow,
        Unfollow,
        SetUsers,
        SetCurrentPage,
        SetTotalUsersCount,
        SetFetchingStatus
    })(Users)

export default UsersContainer;