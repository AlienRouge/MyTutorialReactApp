import React from "react";
import style from "./Users.module.css"
import UserItem from "./UserItem/UsersItem";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            this.props.SetUsers(response.data.items);
        });
    }

    render() {
        return <div className={style.UsersPage}>
            <div className={style.UsersHeader}>List of users</div>
            {this.props.users.map((user) => (<UserItem
                key={user.id}
                id = {user.id}
                name={user.name}
                photos={user.photos}
                status={user.status}
                followed={user.followed}

                FollowUser={this.props.Follow}
                UnfollowUser={this.props.Unfollow}
            />))}
        </div>
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