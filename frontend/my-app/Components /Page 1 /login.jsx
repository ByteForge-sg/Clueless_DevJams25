import React from "react";
import "./login.css";

export default function Button({ onClick, children = "Login" }) {
  return (
    <button
      className="login-button"
      type="button"
      aria-label="Login button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
