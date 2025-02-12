import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseLayOutComponent = () => {
  // State to manage the background color of the webpage
  const [bgColor, setBgColor] = useState('yellow'); // Initial color is yellow

  // useEffect runs after the component renders
  useEffect(() => {
    console.log("UseEffect is Running ..."); // Logs a message after render
  }, []); // Empty dependency array ensures it runs only once after the initial render

  // useLayoutEffect runs synchronously before the DOM is painted
  useLayoutEffect(() => {
    console.log("UseLayoutEffect is Running.."); // Logs a message before the DOM update
    document.body.style.backgroundColor = bgColor; // Updates the background color of the webpage
  }, [bgColor]); // Runs whenever bgColor changes

  return (
    <div>
      UseLayOutComponent
      {/* Button to change the background color */}
      <button onClick={() => setBgColor('red')}>Changcolor</button>
    </div>
  );
};

export default UseLayOutComponent;
