import React from "react";
import "./Name.css";

export default function Name({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <div className="Nametext">Enter Name</div>
      <div className="Namebox">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter your name"
        />
      </div>
    </div>
  );
}
