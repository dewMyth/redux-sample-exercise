import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();

  return (
    <>
      <h1> Using Hooks</h1>
      <h2>No. of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};

export default HooksCakeContainer;
