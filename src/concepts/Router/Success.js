import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const navtoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Successfully Submited...</h2>
      <button onClick={navtoHome}>back to Home</button>
    </div>
  );
}

export default Success;
