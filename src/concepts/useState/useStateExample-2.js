import React, { useState } from "react";
const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let changeFirstName = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // let changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // let changePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleChange = (e, name) => {
    console.log(e.target.value, name);
    if (name === "name") {
      setName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstName: name,
      email: email,
      password: password,
    };
    console.log(userObj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter first Name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        <br />
        <input
          type="email"
          id="email"
          placeholder="enter your Email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => handleChange(e, "password")}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Index;
