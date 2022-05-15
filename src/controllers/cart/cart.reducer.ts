import { initialCartState, initialCountState } from "./cartInitialState";

export function countCartItemsReducer(state = initialCountState, action) {
  switch (action.type) {
    case "REFRESH_COUNT":
      return action.value;
    default:
      return state;
  }
}

export function cartItemsReducer(state = initialCartState, action) {
  switch (action.type) {
    case "GET_CART_PRODUCTS":
      return action.value;
    case "SET_CART_PRODUCTS":
      return action.value;
    default:
      return state;
  }
}
