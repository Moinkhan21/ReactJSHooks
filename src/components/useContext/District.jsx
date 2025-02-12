import React from "react"; // Import React to define and use components
import Block from "./Block"; // Import the Block component

// Define the District component
const District = () => {
  return (
    <div>
      {/* Display the text "District" */}
      District

      {/* Render the Block component as a child */}
      <Block />
    </div>
  );
};

// Export the District component to use it in other parts of the app
export default District;
