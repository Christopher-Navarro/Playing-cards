import React from "react";
import "./Cards.css";

function Card({ name, image }) {
  return <img className="Card" alt={name} src={image} />;
}

export default Card;
