import React from "react";
import "./Age.css";

export default function Age({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <div className="Agetext">Enter Age</div>
      <div className="Agebox">
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder="Enter your age"
        />
      </div>
    </div>
  );
}
