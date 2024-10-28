import React from "react";
import "./Card.css";
import Tag from "../Tag";
import Profile from "../Profile";
import { priorityIcons, progressIcons } from "../Icons";

const Card = ({ data, user, grouping }) => {
  const { title, tag, id } = data;
  const name = user.name;
  const userId = parseInt(user.id.split("-")[1]) - 1;
  const initial = name? name.split(" ").map((n) => n[0].toUpperCase()).join("") : "user";
  return (
    <div className="Card">
      <header className="Card_header" >
        <span style={{ fontSize: "medium", color: "#808080"  }}>{id}</span>
        {grouping !== 1 && (
          <Profile initial={initial} available={user.available} id={userId} />
        )}
      </header>
      <section
        style={{
          flexGrow: 1,
          display: "flex",
          gap: "0rem",
          alignItems: "center",
        }}>
        {grouping !== 0 && progressIcons(data.status)}
        <p style={{ fontSize: "15px", fontWeight: "bold"  }}>{title}</p>
      </section>
      <footer style={{ gap: "0rem", display: "flex", alignItems: "center" }}>
        {grouping !== 2 && <span>{priorityIcons(data.priority)}</span>}
        {tag.map((tag, id) => (
          <Tag key={id} text={tag} />
        ))}
      </footer>
    </div>
  );
};

export default Card;
