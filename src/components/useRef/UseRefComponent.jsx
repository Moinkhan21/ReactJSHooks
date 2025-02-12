import React from "react";
import { useRef } from "react";

const UseRefComponent = () => {
  // Initialize a reference to store the input element
  const myRef = useRef(null);

  // Function to focus the input element programmatically
  const focusInput = () => {
    // Access the input element through the ref and call the focus method
    myRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={myRef} type="text" />
      {/* On button click, call the focusInput function */}
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefComponent;
