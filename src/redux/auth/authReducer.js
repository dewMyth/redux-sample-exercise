import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./authTypes";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case LOGIN_ERROR:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
