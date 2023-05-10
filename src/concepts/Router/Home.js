import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navToSuccessPage = () => {
    navigate("/Success");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={navToSuccessPage}>Submit</button>
    </div>
  );
}

export default Home;
