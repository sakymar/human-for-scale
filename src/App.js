import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,128,13,1) 100%)"
        }}
      >
        <h1 style={{ fontSize: "80px", color: "white" }}>
          POUET INCOMING (if thou gaze long into an abyss, the abyss will also gaze into thee )
        </h1>
      </div>
    </div>
  );
}

export default App;
