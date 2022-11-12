import { BUY_BURGER } from "./burgerTypes";

export const buyBurger = (number = 1) => {
  return {
    type: BUY_BURGER,
    payload: number,
  };
};
