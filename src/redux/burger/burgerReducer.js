import { BUY_BURGER } from "./burgerTypes";

const initialState = {
  numOfBurgers: 25,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numOfBurgers: state.numOfBurgers - action.payload,
      };
    default:
      return state;
  }
};

export default burgerReducer;
