import React from "react";
import style from "./Users.module.css"
import UserItem from "./UserItem/UsersItem";
import axios from "axios";
import Preloader from "../../Assets/Components/Preloader";

class Users extends React.Component {
    componentDidMount() {
        this.props.SetFetchingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetFetchingStatus(false)
            this.props.SetUsers(response.data.items);
            this.props.SetTotalUsersCount(response.data.totalCount)
        });
    }

    OnSetCurrentPage = (page) => {
        this.props.SetCurrentPage(page)
        this.props.SetFetchingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.SetFetchingStatus(false)
            this.props.SetUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        let leftPageBorder = this.props.currentPage === 1 ? 1 : this.props.currentPage - 1;
        let rightPageBorder = (pagesCount - this.props.currentPage > 3) ? this.props.currentPage + 3 : pagesCount;
        for (let i = leftPageBorder; i <= rightPageBorder; i++) {
            pages.push(i)
        }
        return (
            <div className={style.UsersPage}>

                <div className={style.UsersHeader}>List of users</div>
                {this.props.isFetching ? <Preloader/> :
                    <div>
                        <div className={style.pagesContainer}>
                            {pages.map(pageItem => (
                                <span
                                    className={this.props.currentPage === pageItem && style.selectedPage}
                                    onClick={() => (this.OnSetCurrentPage(pageItem))}
                                >{pageItem}</span>))}
                        </div>

                        {this.props.users.map((user) => (<UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            photos={user.photos}
                            status={user.status}
                            followed={user.followed}

                            FollowUser={this.props.Follow}
                            UnfollowUser={this.props.Unfollow}
                        />))}
                        }
                    </div>
                }
            </div>
        )
    }
}


// const Users = (props) => {
//     return (
//         <div className={style.UsersPage}>
//             <div className={style.UsersHeader}>List of users</div>
//             {props.users.map((user) => (<UserItem
//                 userData={user}
//                 FollowUser={props.Follow}
//                 UnfollowUser={props.Unfollow}
//             />))}
//         </div>
//     )
// }

export default Users;