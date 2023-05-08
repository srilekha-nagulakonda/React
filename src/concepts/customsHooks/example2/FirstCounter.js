import React, { useState } from "react";
import useCounter from "./useCounter";
const FirstCounter = () => {
  const [count, increment, decrement, reset] = useCounter(10);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default FirstCounter;
