import React from "react";
import profile_picture from "../images/profile_picture.jpg";

/**
 *
 * @param {object} props
 * @returns Component used for rendering profile picture
 */
function ProfilePicture(props) {
  //making the classname a prop in order to use the component in more that a place and change its css in every place
  return (
    <div className={props.classname}>
      <img
        className={props.classname}
        src={profile_picture}
        alt="Your Profile"
      />
    </div>
  );
}
export default ProfilePicture;
