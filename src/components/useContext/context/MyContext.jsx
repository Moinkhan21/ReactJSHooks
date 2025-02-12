import { createContext } from "react"; // Importing createContext function from React

// Create a Context object
const MyContext = createContext();

/* 
The MyContext object provides:
1. MyContext.Provider - Used to wrap components and provide context values to them.
2. MyContext.Consumer - (Optional in modern React) Used to consume context values in class components or without the useContext hook.
*/

// Export the Context to be used in other files
export default MyContext;
