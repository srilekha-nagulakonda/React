import React, { Children, useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./count";
const Index = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <>
      <Title />
      <Count text={"age"} number={age} />
      <Button clickHandler={incrementAge}>incrementAge</Button>
      <Count text={"salary"} number={salary} />
      <Button clickHandler={incrementSalary}>incrementSalary</Button>
    </>
  );
};
export default Index;
