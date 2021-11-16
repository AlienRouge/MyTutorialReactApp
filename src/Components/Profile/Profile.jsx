import React from "react";
import PostsList from "./PostsList/PostsList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import m from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsList state={props.state} dispatch={props.dispatch}/>
        </div>
    );

}

export default Profile;