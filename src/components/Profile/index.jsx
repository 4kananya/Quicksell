import React from "react";
import "./Profile.css";

const profileColors = ["green", "blue", "red", "orange", "purple"];
const availabilityColors = ["#ccc", "#2ecc71"];
const Profile = ({ initial, id, available = false }) => {
  const availabilityColor = available ? availabilityColors[1] : availabilityColors[0];

  return (
    <div className="Profile" style={{ backgroundColor: profileColors[id % 5], marginRight: "12px" }}>
      <span style={{ fontSize: "smaller" }}>{initial}</span>
      <div
        className="OnlineStatus"
        style={{ backgroundColor: availabilityColor }}
      ></div>
    </div>
  );
};

export default Profile;
