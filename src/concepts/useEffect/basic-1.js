import React, { useEffect, useState } from "react";
const Index = () => {
  useEffect(() => {
    console.log("Hello i am from useEffect");
  }, []);
  const [count, setCount] = useState(0);
  const changeEvent = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <h2>{count}</h2>
      <button onClick={changeEvent}>+</button>
    </div>
  );
};
export default Index;
