import React, { useContext } from "react"; // Import React and useContext hook
import MyContext from "./context/MyContext"; // Import the context created in MyContext.js

// Define the Janta_People functional component
const Janta_People = () => {
  // Access context values using the useContext hook
  const data = useContext(MyContext);

  // Log the data received from the context for debugging purposes
  console.log("This data is coming from context:", data);

  return (
    <div>
      {/* Display the static text "Janta_People" */}
      Janta_People

      {/* Display context values dynamically */}
      <h1>{data.yojna.money}</h1> {/* Displays the money value from the yojna object */}
      <h1>{data.yojna.pension}</h1> {/* Displays the pension value from the yojna object */}
      <h1>
        {data.yojna.rashan ? "Rashan Milega" : "Nhi Milegaa"} {/* Conditional rendering based on rashan */}
      </h1>
      <h1>{data.counter}</h1> {/* Displays the current counter value */}

      {/* Button to increase the counter value */}
      <button onClick={() => data.setCounter(data.counter + 1)}>Increase</button>
    </div>
  );
};

// Export the Janta_People component for use in other files
export default Janta_People;
