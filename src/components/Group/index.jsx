import React from "react";
import Card from "../Card";
import "./Group.css";
import { ReactComponent as Add } from "../../icons/add.svg";
import { ReactComponent as Menu } from "../../icons/three_dot_menu.svg";
import { priorityIcons, progressIcons } from "../Icons";
import Profile from "../Profile";

const Group = ({ tasks, name, width, users, grouping, ordering }) => {
  const userIds = tasks.map((task) => parseInt(task.userId.split("-")[1] - 1));
  const initial = name ? name.split(" ").map((n) => n[0].toUpperCase()).join("") : "U";
  if (ordering === 0) tasks.sort((a, b) => b.priority - a.priority);
  if (ordering === 1) tasks.sort((a, b) => a.title.localeCompare(b.title));

  const user = users.find((user) => user.name === name) || {
    id: "usr-1",
    available: false,
  };

  const userId = parseInt(user.id.split("-")[1]) - 1;

  return (
    <div
      className="Group"
      style={{ width: `${width}%`, minWidth: "290px", flexGrow: 1 }}
    >
      <header className="Group_header">
        {grouping === 0 && progressIcons(name)}
        {grouping === 1 && (<Profile initial={initial} id={userId} available={user.available} />)}
        {grouping === 2 && priorityIcons(name)}
        <span style={{ fontWeight: "regular", fontSize: "15px" , marginRight: "6px"}}> {name}</span>
        <span style={{ color: "#666", flexGrow: 1 }}> {tasks.length}</span>
        <Add style={{ color: "#666", fontSize: "medium" }} />
        <Menu style={{ color: "#666", fontSize: "medium" }} />
      </header>
      {tasks.map((task, id) => {
        return (
          <Card
            grouping={grouping}
            key={id}
            user={users[userIds[id]]}
            data={task}
          />
        );
      })}
    </div>
  );
};

export default Group;
