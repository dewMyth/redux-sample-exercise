import { BUY_BURGER } from "./burgerTypes";

const initialState = {
  numOfBurgers: 25,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numOfBurgers: state.numOfBurgers - 1,
      };
    default:
      return state;
  }
};

export default burgerReducer;
