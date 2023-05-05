import React, { useState, useEffect, useRef } from "react";
const Final = () => {
  const [firstName, setFirstName] = useState("");
  // const [rendering, setRendering] = useState(1); goes to infinite loop
  const renderCount = useRef(1);
  useEffect(() => {
    // setRendering((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input
        type="text"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h3>Typing:{firstName}</h3>
      <p>rendered count: {renderCount.current}</p>
    </>
  );
};
export default Final;
