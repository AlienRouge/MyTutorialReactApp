import {connect} from "react-redux";
import FriendsArea from "./FriendsArea";


const MapStateToProps = (state) => {
    return {
        friendsList: state.sidebarData.friendsList,
    }
}

const FriendsAreaContainer = connect(MapStateToProps)(FriendsArea);

export default FriendsAreaContainer;