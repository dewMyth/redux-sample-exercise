const redux = require("redux");
const createStore = redux.createStore;

const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

// Populate a nested object - Ex :- Address object in User object can be visualized as a nested object
const util = require("util");

// Initial state of the state variables
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action Types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// Action creators -> loading data, success, error
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Async action in action -> this is the business logic -> nothing realted to redux, but redux thunk middleware will help us to dispatch the actions to the redux store
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user);
        store.dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        store.dispatch(fetchUsersError(error.message));
      });
  };
};

// Store subscribes to the actions
store.subscribe(() => {
  console.log(
    // util.inspect() is used to print the nested object in a readable format
    util.inspect(store.getState(), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
});

// Dispatching the action to the store
store.dispatch(fetchUsers());
