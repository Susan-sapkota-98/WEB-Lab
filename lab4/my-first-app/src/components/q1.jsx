import React from "react";
import bulbOn from "../assets/bulb-on.png";
import bulbOff from "../assets/bulb-off.png";

const ToggleBulb = () => {
  const [isOn, setIsOn] = React.useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h1>Q1: Toggle Bulb</h1>
      <img src={isOn ? bulbOn : bulbOff} alt="Bulb" />
      <button onClick={toggleBulb}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  );
};

export default ToggleBulb;