import React, { useState } from "react";

// Components
import Logo from "./components/Logo/Logo";
import BackCard from "./components/BackCard/BackCard";
import NextCard from "./components/NextCard/NextCard";
import Age from "./components/Age/Age";
import Name from "./components/Name/Name";
import Username from "./components/Username/Username";
import Button from "./components/Button/Button";
import DecorativeItems from "./components/DecorativeItems/DecorativeItems";

// Global CSS
import "./index.css";

export default function App() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

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
        background: "#f7f7f7",
      }}
    >
      {/* Logo */}
      <Logo />

      {/* Back Card */}
      <BackCard text="Go Back" />

      {/* Input fields */}
      <Age value={age} onChange={(e) => setAge(e.target.value)} />
      <Name value={name} onChange={(e) => setName(e.target.value)} />
      <Username value={username} onChange={(e) => setUsername(e.target.value)} />

      {/* Next Card */}
      <NextCard text="Next Step" />

      {/* Decorative Images */}
      <DecorativeItems />

      {/* Login Button */}
      <Button onClick={handleLogin} />
    </div>
  );
}
