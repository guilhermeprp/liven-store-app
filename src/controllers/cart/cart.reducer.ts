import { initialCartState, initialCountState } from "./cartInitialState";

export function countCartItemsReducer(state = initialCountState, action: any) {
  switch (action.type) {
    case "REFRESH_COUNT":
      return action.value;
    default:
      return state;
  }
}

export function cartItemsReducer(state = initialCartState, action: any) {
  switch (action.type) {
    case "GET_CART_PRODUCTS":
      return action.value;
    case "SET_CART_PRODUCTS":
      return action.value;
    case "DECREMENT_PRODUCT_COUNT":
      return action.value;
    case "INCREMENT_PRODUCT_COUNT":
      return action.value;
    default:
      return state;
  }
}
