import React, { useContext } from "react";
import { UserContext } from "./context/useContext1";
const SubChildClass = () => {
  const data = useContext(UserContext);
  console.log(data);
  const { firstName, lastName, email } = data;
  // console.log(props.userDetails);
  return (
    <div>
      <h2>sub child class</h2>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
};
export default SubChildClass;
