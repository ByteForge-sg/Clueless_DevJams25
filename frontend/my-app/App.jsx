import React, { useState } from "react";

// Import your components
import Logo from "./components/Logo/Logo";
import BackCard from "./components/BackCard/BackCard";
import NextCard from "./components/NextCard/NextCard";
import Age from "./components/Age/Age";
import Name from "./components/Name/Name";
import Username from "./components/Username/Username";
import Button from "./components/Button/Button";

// Import global CSS
import "./index.css";

export default function App() {
  // States for input fields
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // Dummy login function
  const handleLogin = () => {
    alert(`Name: ${name}, Age: ${age}, Username: ${username}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        padding: "40px",
        background: "#f7f7f7", // page background
      }}
    >
      {/* Logo */}
      <Logo />

      {/* BackCard */}
      <BackCard text="Go Back" />

      {/* Input fields */}
      <Age value={age} onChange={(e) => setAge(e.target.value)} />
      <Name value={name} onChange={(e) => setName(e.target.value)} />
      <Username value={username} onChange={(e) => setUsername(e.target.value)} />

      {/* NextCard */}
      <NextCard text="Next Step" />

      {/* Login Button */}
      <Button onClick={handleLogin} />
    </div>
  );
}
