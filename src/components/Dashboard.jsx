import React from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  let navigate = useNavigate();

  return (
    <>
      <div>My name is {user.firstName}</div>
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
          navigate("/");
        }}
      >
        Log Me Outta here
      </button>
    </>
  );
};

export default Dashboard;
