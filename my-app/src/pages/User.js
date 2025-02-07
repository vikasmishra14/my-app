
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div className="user-container">
      <h1>User Page</h1>
      <p>Viewing user with ID: {id}</p>
    </div>
  );
};

export default User;