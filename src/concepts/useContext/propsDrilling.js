import React, { useState } from "react";
const ParentClass = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "srilekha",
    lastName: "Nagulakonda",
    email: "srilekha@gmail.com",
  });
  return (
    <div>
      <h1>parent class</h1>
      <h3>{userDetails.firstName}</h3>
      <ChildClass userDetails={userDetails} />
    </div>
  );
};

const ChildClass = (props) => {
  console.log(props.userDetails);
  return (
    <div>
      <h2>child class</h2>
      <SubChildClass userDetails={props.userDetails} />
    </div>
  );
};
const SubChildClass = ({ userDetails }) => {
  // console.log(props.userDetails);
  return (
    <div>
      <h2>sub child class</h2>
      <p>{userDetails.email}</p>
    </div>
  );
};
export default ParentClass;
