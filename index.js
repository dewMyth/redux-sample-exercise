const redux = require("redux");
const createStore = redux.createStore;

// Defining Actions types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// The Action Creator - The Customer who buys a cake
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Customer comes to buy a cake",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Customer comes to buy an icecream",
  };
}

// Defining Initial State - The rack of cakes before the customer comes
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

// Defining Reducer - The ShopKeeper who reduce the number of items from the rack
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // The Action in action - Customer buying the cake
    case BUY_CAKE:
      return {
        ...state, // Make a copy of initial state - since we are not mutating the original state, instead we are copying it and mutate that copy
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Creating Store - The shop
const store = createStore(reducer);

// The rack of cakes before the customer comes
console.log("Initial State --> ", store.getState());

// Store is subscribing the rack of cakes
const unsubscribe = store.subscribe(() =>
  console.log("Updated State --> ", store.getState())
);

// Customer buys 1 cake
store.dispatch(buyCake());

// Customer buys 1 cake
store.dispatch(buyCake());

// Customer buys 1 cake
store.dispatch(buyCake());

// Customer buys 1 icecream
store.dispatch(buyIceCream());

// Customer buys 1 icecream
store.dispatch(buyIceCream());

// Store is unsubscribing the rack of cakes
unsubscribe();
