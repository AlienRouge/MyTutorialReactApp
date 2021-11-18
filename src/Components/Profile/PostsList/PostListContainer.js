import PostsList from "./PostsList";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
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