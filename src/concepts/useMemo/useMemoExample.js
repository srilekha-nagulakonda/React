import React, { useState, useMemo } from "react";
const Index = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeChange = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <div>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <br />
      <div>
        <button onClick={() => setDark(!dark)}>Change theme</button>
      </div>
      <h2 style={themeChange}>the number : {doubleNumber}</h2>
    </>
  );
};
const slowFunction = (number) => {
  for (let index = 0; index < 100000000; index++) {}
  console.log("slow fun running..");
  return number * 2;
};
export default Index;
