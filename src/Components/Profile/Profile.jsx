import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'
import PostListContainer from "./PostsList/PostListContainer";

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <PostListContainer/>
        </div>
    );

}

export default Profile;