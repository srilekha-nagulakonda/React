import React, { useEffect, useState } from "react";
const Index = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [pageWidth, setpagewidth] = useState(window.innerWidth);

  // useEffect(() => {

  //   console.log("Hello i am from useEffect");
  // }, [count]);
  useEffect(() => {
    const resizeHandler = () => {
      setpagewidth(window.innerWidth); //go to inspect-elements-event listeners-resize
    };
    window.addEventListener("resize", resizeHandler);
    console.log("Hello i am from useEffect");
    return () => {
      console.log("removing");
      window.removeEventListener("resize", resizeHandler);
    };
  });
  const changeEvent = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <h2>pageWidth:{pageWidth}</h2>
      <h2 onClick={() => setToggle(!toggle)}>{toggle ? "Open" : "close"}</h2>
      <h2>{count}</h2>
      <button onClick={changeEvent}>+</button>
    </div>
  );
};
export default Index;
