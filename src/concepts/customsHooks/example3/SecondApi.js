import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
const URL = "https://jsonplaceholder.typicode.com/posts";
const SecondApi = () => {
  const [postData, Loading, isError] = useFetch(URL);
  if (isError) {
    return <h2>something went wrong...</h2>;
  }
  if (Loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postData.map((eachUser) => {
          const { id, title } = eachUser;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};
export default SecondApi;
