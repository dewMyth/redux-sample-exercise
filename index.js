// The 3rd party middleware - The logger who logs the process
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; // The combineReducer is use to combine multiple reducers into one -> rootReducer
const applyMiddleware = redux.applyMiddleware; // applyMiddleware is used to apply the 3rd party middleware to the store

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

// The Action Creator - The Customer who buys a icecream
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Customer comes to buy an icecream",
  };
}

// Defining Initial State - The rack of cakes before the customer comes
const initialCakeState = {
  numOfCakes: 10,
};

// Defining Initial State - The freezer of iceCream before the customer comes
const initialIceCreamsState = {
  numOfIceCreams: 20,
};

// Defining Reducer - The ShopKeeper who reduce the number of items from the rack
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    // The Action in action - Customer buying the cake
    case BUY_CAKE:
      return {
        ...state, // Make a copy of initial state - since we are not mutating the original state, instead we are copying it and mutate that copy
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamsState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Combining the reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Creating Store - The shop
const store = createStore(rootReducer, applyMiddleware(logger));

// The rack/freezer of cakes before the customer comes
console.log("Initial State --> ", store.getState());

// Store is subscribing the rack of cakes
const unsubscribe = store.subscribe(() => {});
//   console.log("Updated State --> ", store.getState())

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
