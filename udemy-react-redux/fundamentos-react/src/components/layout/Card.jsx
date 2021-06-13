import React from "react";
import "./Card.css";

export const Card = (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#e60",
    borderColor: props.color || "#e60",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="titulo">{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
