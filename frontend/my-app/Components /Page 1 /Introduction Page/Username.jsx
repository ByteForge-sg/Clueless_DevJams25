import React from "react";
import "./Username.css";

export default function Username({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <div className="Usernametext">Enter Username</div>
      <div className="Usernamebox">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
}
