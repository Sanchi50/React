import React from "react";

// Complete this Component
const ListItem = ({ bgColor, icon, link, name }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px"
      }}
    >
      <img src={icon} alt={name} height="20" />
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default ListItem;
