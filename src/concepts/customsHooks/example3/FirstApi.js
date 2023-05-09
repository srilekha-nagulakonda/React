import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
const URL = "https://jsonplaceholder.typicode.com/users";
const FirstApi = () => {
  const [userData, Loading, isError] = useFetch(URL);
  if (isError) {
    return <h2>something went wrong...</h2>;
  }
  if (Loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userData.map((eachUser) => {
          const { id, username } = eachUser;
          return <li key={id}>{username}</li>;
        })}
      </ul>
    </div>
  );
};
export default FirstApi;
