import {
  removeProduct,
  changeProductQuantity,
} from "../../app/presentation/utils/cartManagement";
import { store } from "../../data/store";
import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";
import { setLocalStorage } from "../../infra/localStorage/setLocalStorage";
import {
  IremoveProductFromCart,
  IchangeProductQuantity,
} from "../../model/cartActions.model";

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

export const updateCart = (
  action: string,
  options: IremoveProductFromCart | IchangeProductQuantity
) => {
  switch (action) {
    case "RemoveProduct": {
      const newProductsList = removeProduct(options as IremoveProductFromCart);
      setLocalStorage("cart", newProductsList);
      store.dispatch(setCartProducts(newProductsList));
      store.dispatch(refreshCartCount());
      break;
    }
    case "ChangeProductQuantity": {
      const newProductsList = changeProductQuantity(
        options as IchangeProductQuantity
      );
      setLocalStorage("cart", newProductsList);
      store.dispatch(setCartProducts(newProductsList));
      break;
    }
    default:
      break;
  }
};
