import React, { useState } from "react";
import ChildClass from "./child-file";
const ParentClass = () => {
  return (
    <div>
      <h1>parent class</h1>

      <ChildClass />
    </div>
  );
};

export default ParentClass;
