import React from "react";
import ColorBox from "./components/ColorBox/ColorBox";

function App() {
  return (
    <div className="App">
      <h1
        className="title"
        style={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        Click to change color of color-box
      </h1>
      <ColorBox />
    </div>
  );
}

export default App;
