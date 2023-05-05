import React, { useState, useEffect, useRef } from "react";
const Final = () => {
  const [firstName, setFirstName] = useState("");
  // const [rendering, setRendering] = useState(1); goes to infinite loop
  const inputDOM = useRef(1);
  useEffect(() => {
    // setRendering((prev) => prev + 1);
    console.log(inputDOM);
  });
  const focus = () => {
    inputDOM.current.focus();
  };
  return (
    <>
      <input
        ref={inputDOM}
        type="text"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h3>Typing:{firstName}</h3>
      <button onClick={focus}>focus</button>
    </>
  );
};
export default Final;
