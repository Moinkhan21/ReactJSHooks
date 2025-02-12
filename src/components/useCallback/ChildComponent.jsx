import React, { useEffect } from 'react'; // Importing React and the useEffect hook

// Define the ChildComponent as a functional component
const ChildComponent = ({ handleClick }) => {
    // The useEffect hook to handle side effects
    useEffect(() => {
        // This console log will run when the component mounts 
        // or when the handleClick prop changes
        console.log("Child Component UseEffect is Running..!");
    }, [handleClick]); // Dependency array ensures this effect runs only when handleClick changes

    // The component returns a simple div with some text
    return <div>ChildComponent</div>;
};

// Exporting the component to use it in other files
export default ChildComponent;
