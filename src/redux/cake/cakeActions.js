import { BUY_CAKE } from "./cakeTypes";

// 1 is a default parameter value, if no value is passed in, 1 is used -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
