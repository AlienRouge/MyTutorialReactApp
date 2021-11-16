import React from "react";
import m from './Post.module.css'

const Post = (props) => {
    return (
        <div className={m.postItem}>
            <img className={m.postAvatar} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
            {props.message}
            <div>
                <span>Like!</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;