import React from "react";
import { useReducer } from "react";

const UseReducerComponent = () => {
  // Reducer function to handle state transitions
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": // Action type to increase the count
        return { count: state.count + 1 }; // Return new state with updated count
      case "DECREMENT": // Action type to decrease the count
        return { count: state.count - 1 }; // Return new state with updated count
      default: // Handle unsupported actions
        return state; // Return the current state unchanged
    }
  };

  // useReducer Hook to manage state with countReducer and initial state
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      UseReducerComponent
      {/* Display the current count */}
      <h1>{state.count}</h1>
      {/* Dispatch INCREMENT action */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      {/* Dispatch DECREMENT action */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
};

export default UseReducerComponent;
