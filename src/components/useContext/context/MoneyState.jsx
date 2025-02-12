import { useState } from "react"; // Importing useState hook from React
import MyContext from "./MyContext"; // Importing the created Context

// Define the MoneyState component
const MoneyState = (props) => {
  // Define a hardcoded object with some predefined data
  const yojna = {
    money: 5000, // Total money available
    rashan: true, // Indicates if ration is available
    pension: 500, // Monthly pension amount
  };

  // Declare a state variable 'counter' initialized to 0
  // 'setCounter' is used to update the value of 'counter'
  const [counter, setCounter] = useState(0);

  return (
    // Wrapping children components with MyContext.Provider
    // This allows all children to access the provided context values
    <MyContext.Provider
      value={{
        yojna, // Providing the predefined data
        counter, // Providing the counter state
        setCounter, // Providing the counter update function
      }}
    >
      {/* Render the child components passed to MoneyState */}
      {props.children}
    </MyContext.Provider>
  );
};

// Export the MoneyState component to use it in other files
export default MoneyState;
