import React, { useState } from "react";
import "./ColorBox.css";

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  const getRandomColor = () => {
    const listColor = ["black", "yellow", "green", "deeppink", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    console.log(randomIndex);
    return listColor[randomIndex];
  };

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };

  return (
    <div
      className="colorBox"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default ColorBox;
