import React from "react";
import "./Tag.css";
import { ReactComponent as ToDo } from "../../icons/to_do.svg";

const Tag = ({ text }) => {
  return (
    <div className="Tag" style={ {border: ""} }>
      
      <ToDo style={{ color: "#aaa", fontSize: "smaller" }} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
