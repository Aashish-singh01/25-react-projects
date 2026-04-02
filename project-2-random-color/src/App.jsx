import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtlity(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtlity(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtlity(256);
    const g = randomColorUtlity(256);
    const b = randomColorUtlity(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <div className="button-group">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>
          Create RGB Color
        </button>{" "}
      </div>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div>
        <div className="content">
          <h3 className="title">
            {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
          </h3>

          <h1 className="color-code">{color}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
