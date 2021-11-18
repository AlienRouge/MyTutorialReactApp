import React from "react";
import style from "./UserItem.module.css"
import USER_DEFAULT_ICON from "./../../../Assets/Images/user-icon-mock.png"


const UserItem = (props) => {
    const OnFollow = () => {
        debugger;
        props.FollowUser(props.id)
    }

    const OnUnfollow = () => {
        props.UnfollowUser(props.id)
    }

    return (
        <div className={style.userItem}>
            <div>
                <img className={style.userAvatar}
                     src={props.photos.small == null ? USER_DEFAULT_ICON : props.photos.small} alt={""}/>
                <div>{props.followed ?
                    <button onClick={OnUnfollow} className={style.unfollowBtn}>Unfollow</button> :
                    <button onClick={OnFollow} className={style.followBtn}>Follow</button>}</div>

            </div>
            <div className={style.userInfoContainer}>
                <div className={style.userName}>{props.name}</div>
                <div className={style.statusText}>{props.status}</div>
                {/*<div*/}
                {/*    className={style.locationName}>{`${props.userData.location.city}, ${props.userData.location.country}`}</div>*/}
            </div>
        </div>
    )
}
export default UserItem;