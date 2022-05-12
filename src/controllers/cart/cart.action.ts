import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";

export const refreshCartCount = () => {
  return {
    type: "REFRESH_COUNT",
    value: getLocalStorage("cart").length,
  };
};

export const getCartProducts = () => {
  return {
    type: "GET_CART_PRODUCTS",
    value: getLocalStorage("cart"),
  };
};

export const setCartProducts = (cart: Product[]) => {
  return {
    type: "SET_CART_PRODUCTS",
    value: cart,
  };
};

export const decrementProductCount = (id: string) => {
  return {
    type: "DECREMENT_PRODUCT_COUNT",
    value: id,
  };
};

export const incrementProductCount = (id: string) => {
  return {
    type: "INCREMENT_PRODUCT_COUNT",
    value: id,
  };
};
