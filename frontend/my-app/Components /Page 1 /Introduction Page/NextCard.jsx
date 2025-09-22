import React from "react";
import "./NextCard.css";

export default function NextCard({ text = "Next" }) {
  return (
    <div className="nextbox">
      <div className="nexttext">{text}</div>
    </div>
  );
}
