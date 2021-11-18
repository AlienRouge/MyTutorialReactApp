import m from "../NavBar.module.css";
import FriendItem from "./FriendItem/FriendItem";
import React from "react";


const FriendsArea = (props) => {
    return (
        <div className={m.friendsBlock}>
            <div className={m.head}>Best Friends</div>
            {props.friendsList.map(friend => (<FriendItem key={friend.id} state={friend}/>))}
        </div>
    )
}

export default FriendsArea;