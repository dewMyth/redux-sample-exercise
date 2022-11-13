import React from "react";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return <div>My name is {user.firstName}</div>;
};

export default Dashboard;
