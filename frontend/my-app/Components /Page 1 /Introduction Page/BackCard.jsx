import React from "react";
import "./BackCard.css";

export default function BackCard({ text = "Back" }) {
  return (
    <div className="backbox">
      <div className="backtext">{text}</div>
    </div>
  );
}
