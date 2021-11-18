import PostsList from "./PostsList";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    console.log(state)
    debugger;
    return {
        posts: state.profileData.posts,
        newPostText: state.profileData.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => dispatch(AddPostActionCreator()),
        UpdateNewPostText: (text) => dispatch(UpdateNewPostTextActionCreator(text))
    }

}
const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostListContainer;