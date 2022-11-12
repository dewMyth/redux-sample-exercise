import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

const HooksBurgerContainer = () => {
  const numOfBurgers = useSelector((state) => state.burger.numOfBurgers);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  return (
    <>
      <>
        <h1> Using Hooks</h1>
        <h2>No. of Burgers - {numOfBurgers}</h2>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={() => dispatch(buyBurger(number))}>
          Buy {number} Burgers
        </button>
      </>
    </>
  );
};

export default HooksBurgerContainer;
