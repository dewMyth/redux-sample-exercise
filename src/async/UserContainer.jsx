import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserRequest,
  fetchUserError,
  fetchUserSuccess,
} from "../redux/user/userActions";

import axios from "axios";

const UserContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    dispatch(fetchUserRequest());
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        error = error.message;
        dispatch(fetchUserError(error));
        setLoading(false);
        setError(error);
      });
  };

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {users?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserContainer;
