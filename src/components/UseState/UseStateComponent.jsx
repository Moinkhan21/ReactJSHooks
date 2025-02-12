import React, { useState } from "react";

const UseStateComponent = () => {
  // Declare a state variable 'counter' and its setter function
  // Initialize the counter with a value of 0
  const [counter, setCounter] = useState(0);

  // Function to increase the counter value
  const increase = () => {
    // Increment the counter by 1
    setCounter(counter + 1);

    // Log the current value (Note: Logs the old value as state updates are asynchronous)
    console.log("Increase Fun ", counter);
  };

  // Function to decrease the counter value
  const decrease = () => {
    // Decrement the counter by 1
    setCounter(counter - 1);

    // Log the current value (Note: Logs the old value as state updates are asynchronous)
    console.log("Decrease Fun ", counter);
  };

  return (
    <div>
      {/* Display the current counter value */}
      <h1>{counter}</h1>

      {/* Buttons to trigger the increase and decrease functions */}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default UseStateComponent;
