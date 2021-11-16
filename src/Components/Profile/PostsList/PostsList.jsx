import React from "react";
import Post from "./Post/Post";
import m from './PostsList.module.css';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/ProfileReducer";

const PostsList = (props) => {
    let newPostElement = React.createRef();

    const AddPost = () => {
        props.dispatch(AddPostActionCreator())
        newPostElement.current.value = "";
    }
    const ChangeNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreator(text))
    }

    return (
        <div>
            Add post
            <div className={""}>
                <textarea ref={newPostElement} value={props.state.newPost} onChange={ChangeNewPost}/>
                <button onClick={AddPost}>Add post</button>
            </div>
            <div>
                {props.state.posts.map(post => (
                    <Post id={post.id} message={post.message} likesCount={post.likesCount}/>))}
            </div>
        </div>

    )
}

export default PostsList;