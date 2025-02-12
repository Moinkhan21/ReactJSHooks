import React, { useCallback, useState } from "react"; // Importing React, useState, and useCallback hooks
import ChildComponent from "./ChildComponent"; // Importing the ChildComponent

// Define the UseCallbackComponent as a functional component
const UseCallbackComponent = () => {
  // State for counter1, initialized to 0
  const [counter1, setCounter1] = useState(0);

  // State for counter2, initialized to 0
  const [counter2, setCounter2] = useState(0);

  // Define the handleClick function using useCallback to memoize it
  // This ensures that the function reference does not change unless counter1 changes
  const handleClick = useCallback(() => setCounter1(counter1 + 1), [counter1]);

  return (
    <div>
      {/* Title of the component */}
      UseCallbackComponent

      {/* Display the value of counter2 */}
      <h1>Counter2 = {counter2}</h1>

      {/* Pass the memoized handleClick function as a prop to ChildComponent */}
      <ChildComponent handleClick={handleClick} />

      {/* Button to increment counter2 when clicked */}
      <button onClick={() => setCounter2(counter2 + 1)}>
        Counter_2_Increase
      </button>
    </div>
  );
};

// Export the component to use it in other files
export default UseCallbackComponent;
