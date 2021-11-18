import React from "react";
import Post from "./Post/Post";
import style from './PostsList.module.css';

const PostsList = (props) => {
    let newPostElement = React.createRef();
    const OnPostAdd = () => {
        props.AddPost();
        newPostElement.current.value = "";
    }

    const OnChangeNewPostText = () => {
        let text = newPostElement.current.value;
        props.UpdateNewPostText(text)
    }
    return (
        <div>
            Add new post
            <div className={""}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={OnChangeNewPostText}/>
                <button onClick={OnPostAdd}>Add post</button>
            </div>
            <div>
                {props.posts.map(post => (
                    <Post key={post.id} message={post.message} likesCount={post.likesCount}/>))}
            </div>
        </div>

    )
}

export default PostsList;