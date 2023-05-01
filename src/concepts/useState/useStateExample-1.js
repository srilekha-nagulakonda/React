import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
const Index = () => {
  const [showData, setShowData] = useState(false);
  let visibleData = () => {
    setShowData(!showData);
  };
  // let hideData = () => {
  //   setShowData(false);
  // };
  return (
    <div>
      <button onClick={visibleData}>{showData ? "Hide" : "Show"}</button>
      {/* <button onClick={hideData}>Hide</button> */}
      {showData ? (
        <p>
          lorem50survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      ) : (
        <h2>Data is Hidden</h2>
      )}
    </div>
  );
};
export default Index;
