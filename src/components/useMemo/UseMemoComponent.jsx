import React, { useMemo, useState } from 'react';

const UseMemoComponent = () => {
  // State to store the input field's value
  const [inputValue, setInputValue] = useState(" "); // Initialize with an empty space

  // Function to calculate a result based on the input length
  const calculateResult = (input) => {
    console.log("Calculating Result..."); // Log whenever the function is called
    return input.length * 100; // Return the input length multiplied by 100
  };

  // Memoized computation to avoid unnecessary recalculations
  const memoizedResult = useMemo(() => calculateResult(inputValue), [inputValue]);

  return (
    <div>
      UseMemoComponent
      {/* Input field to accept user input */}
      <input
        value={inputValue} // Bind the input's value to the state
        onChange={(e) => setInputValue(e.target.value)} // Update state when the input changes
        type="text" // Input type is text
      />
      {/* Display the memoized result */}
      <h1>InputLength = {memoizedResult}</h1>
    </div>
  );
};

export default UseMemoComponent;
