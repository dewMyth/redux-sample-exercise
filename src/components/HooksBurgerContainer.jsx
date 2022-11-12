import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

const HooksBurgerContainer = () => {
  const numOfBurgers = useSelector((state) => state.burger.numOfBurgers);
  const dispatch = useDispatch();
  return (
    <>
      <>
        <h1> Using Hooks</h1>
        <h2>No. of Burgers - {numOfBurgers}</h2>
        <button onClick={() => dispatch(buyBurger())}>Buy Burgers</button>
      </>
    </>
  );
};

export default HooksBurgerContainer;
