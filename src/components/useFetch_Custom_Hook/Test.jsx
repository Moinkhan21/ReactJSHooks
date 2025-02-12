import React from "react";
import { useFetch } from "./UseFetch"; // Import the custom useFetch hook

// Define the Test component
const Test = () => {
  // Debugging: Logs the output of the useFetch hook
  console.log(useFetch("https://jsonplaceholder.typicode.com/todos"));

  // Destructure the values returned by the useFetch hook
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      {/* Display "Loading.." when data is being fetched */}
      <h1>{loading && "Loading.."}</h1>

      {/* Display "Error.." if an error occurs */}
      {error && "Error.."}

      {/* Map over the fetched data and display each title */}
      {data.map((d) => {
        return (
          <>
            <p
              style={{
                backgroundColor: "blue", // Set background color to blue
                color: "white", // Set text color to white
                margin: "1rem", // Add margin around each paragraph
                textAlign: "center", // Center-align the text
              }}
            >
              {d.title} {/* Display the title of the todo item */}
            </p>
          </>
        );
      })}
    </div>
  );
};

// Export the Test component
export default Test;
