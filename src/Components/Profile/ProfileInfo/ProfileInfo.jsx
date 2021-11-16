import React from "react";
import m from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={m.HeaderContainer}>
                <img className={m.HeaderImage}
                     src="https://user-images.githubusercontent.com/513929/53929982-e5497700-404c-11e9-8393-dece0b196c98.png"
                     alt=""/>
            </div>
            <div className={m.DescriptionBlock} >
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;