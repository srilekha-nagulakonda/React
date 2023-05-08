import React, { useEffect, useState } from "react";
import usePageTitle from "./usePageTitle";
const Index = () => {
  const [count, setCount] = useState(0);
  usePageTitle(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count Increment</button>
      <h2>Count: {count}</h2>
    </>
  );
};
export default Index;
