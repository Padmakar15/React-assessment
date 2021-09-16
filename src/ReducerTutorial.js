import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
  }
  return state;
};
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default ReducerTutorial;
