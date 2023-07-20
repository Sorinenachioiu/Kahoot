import React from "react";
import profileDefault from "../../resources/UserPage/my-profile-picture.png";
import classes from "./ProfileSection.module.css";

const ProfileSection = (props) => {
  const settingsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  );

  return (
    <div className={classes.mainContainer} style={{}}>
      <div className={classes.imageContainer}>
        <img src={profileDefault} alt="profile" />
      </div>
      <div className={classes.detailsContainer}>
        <h5>{props.username || "Username"}</h5>
      </div>
      <div className={classes.settingsContainer}>{settingsIcon}</div>
    </div>
  );
};

export default ProfileSection;