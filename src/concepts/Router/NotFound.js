import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const navtoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>404 NotFound</h1>
      <button onClick={navtoHome}>back to Home</button>
    </div>
  );
}

export default NotFound;
