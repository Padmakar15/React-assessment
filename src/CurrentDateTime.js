import React, { useState } from "react";

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const myfunction = () => {
    const date = new Date();
    setCurrentTime(date.toLocaleTimeString());
  };
  setInterval(myfunction, 1000);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default CurrentDateTime;
