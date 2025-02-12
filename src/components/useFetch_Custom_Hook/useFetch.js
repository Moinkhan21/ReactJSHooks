import React, { useEffect, useState } from "react";

// Define a custom hook named useFetch
export const useFetch = (url) => {
  // State to store fetched data
  const [data, setData] = useState([]); // Initially an empty array

  // State to track loading status
  const [loading, setLoading] = useState(true); // Initially true because the fetch hasn't started yet

  // State to capture errors
  const [error, setError] = useState(""); // Initially an empty string since no errors are present

  // Effect to fetch data from the provided URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const apiCall = await fetch(url);

        // Parse the response as JSON
        const result = await apiCall.json();

        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        // Update the state with the error if something goes wrong
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        // Ensure loading is set to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [url]); // The effect will run whenever the URL changes

  // Return the state variables
  return { data, loading, error }; // Makes these available to components using the hook
};
