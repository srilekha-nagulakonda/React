import React, { useState } from "react";

const Final = () => {
  // console.log(useState(10));//

  const [count, setCount] = useState(0);
  // console.log(setCount);
  const incrementCount = () => {
    setCount((prv) => {
      return prv + 1;
    });
    setCount((prv) => {
      return prv + 1;
    });
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="buttons">
      <button onClick={decrementCount}>-</button>
      <span>Count: {count} </span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
export default Final;
