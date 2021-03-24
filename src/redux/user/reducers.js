import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  USER_CART,
  DELETE_CART_ITEM,
  ON_PLUS,
  ON_MINUS,
  DELETE_NOT_AVAILABLE,
} from './types';
import { userCart } from './actions';

const initialState = {
  type: null,
  user: {},
  authorization: null,
  userCart: {},
};

const registerUser = (state = initialState, action) => {
  let { type, payload } = action;
  console.warn({ action: action.payload });
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        type: payload.type,
        user: payload.user,
        authorization: payload.authorization,
      };
    case LOGOUT_USER:
      return {
        ...state,
        type: null,
        user: {},
        authorization: null,
      };
    case USER_CART:
      return {
        ...state,
        userCart: payload,
      };
    case DELETE_CART_ITEM:
      delete state.userCart[payload];
      return {
        ...state,
      };
    case ON_PLUS:
      let updatedQuantity = state.userCart;
      let obj = updatedQuantity[payload].quantity + 1;

      return {
        ...state,
      };
    case ON_MINUS:
      return {
        ...state,
      };
    case DELETE_NOT_AVAILABLE:
      let keys = Object.keys(payload).filter((key) => payload[key] === false);
      keys.forEach((item) => delete state.userCart[item]);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default registerUser;
