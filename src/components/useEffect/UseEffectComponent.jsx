import React, { useEffect, useState } from "react"; // Import React and necessary hooks

// Define the UseEffectComponent functional component
const UseEffectComponent = () => {
  // State to manage the count value, initialized to 0
  const [count, setCount] = useState(0);

  // useEffect to perform side effects (e.g., fetching data)
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      // Make a GET request to the API
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");

      // Parse the response as JSON
      const result = await api.json();

      // Log the fetched data as a table in the console
      console.table(result);
    };

    // Call the fetchData function
    fetchData();

    // Empty dependency array ensures this runs only once when the component mounts
  }, []);

  return (
    <div>
      {/* Component title */}
      UseEffectComponent

      {/* Display the current count */}
      <h1>{count}</h1>

      {/* Button to increase the count */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

// Export the component for use in other files
export default UseEffectComponent;
