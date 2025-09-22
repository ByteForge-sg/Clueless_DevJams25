import React from "react";
import "./Accessories.css";

export default function Accessories({ text = "Accessories" }) {
  return (
    <div className="accessoriesbox">
      <div className="accessories">{text}</div>
    </div>
  );
}
