import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfile} from "../../Redux/ProfileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.SetUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }

}

export default connect(mapStateToProps, {
    SetUserProfile,
})(ProfileContainer);