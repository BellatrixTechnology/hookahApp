import {
  DELETE_CART_ITEM,
  LOGOUT_USER,
  ON_MINUS,
  ON_PLUS,
  REGISTER_USER,
  USER_CART,
  DELETE_NOT_AVAILABLE,
} from './types';

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const userCart = (data) => {
  return {
    type: USER_CART,
    payload: data,
  };
};

export const deleteCartItem = (data) => {
  return {
    type: DELETE_CART_ITEM,
    payload: data,
  };
};

export const onPlus = (data) => {
  return {
    type: ON_PLUS,
    payload: data,
  };
};

export const onMinus = () => {
  return {
    type: ON_MINUS,
  };
};

export const deleteNotAvailable = (data) => {
  return {
    type: DELETE_NOT_AVAILABLE,
    payload: data,
  };
};
