import React from "react"; // Import React to build the component
import Janta_People from "./Janta_People"; // Import the Janta_People component

// Define the Block component as a functional component
const Block = () => {
  return (
    <div>
      {/* Display the text "Block" */}
      Block

      {/* Render the Janta_People component */}
      <Janta_People />
    </div>
  );
};

// Export the Block component to use it in other files
export default Block;
