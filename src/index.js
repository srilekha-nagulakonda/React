import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { UserContextProvider } from "./concepts/useContext/context/useContext1";

// function PrintName() {
//   return <h1>Hello React</h1>;
// }
// ReactDOM.render(<PrintName />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
root.render(
  // <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </UserContextProvider>
);
// }, 1000);
