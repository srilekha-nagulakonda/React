import React, { useState } from "react";
import useCounter from "./useCounter";

const SecondCounter = () => {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default SecondCounter;
