import React, { useEffect } from "react";

const UseEffectTest = () => {
  useEffect(() => {
    console.log("inside useEffect");
  });
  console.log("outside useEffect");
  return (
    <div>
      {/* <h2>render method</h2> */}
      {console.log("render method")}
    </div>
  );
};

export default UseEffectTest;
