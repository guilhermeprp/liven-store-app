import {
  refreshCartCount,
  setCartProducts,
} from "../../../controllers/cart/cart.action";
import { store } from "../../../data/store";
import { setLocalStorage } from "../../../infra/localStorage/setLocalStorage";

export const removeProductFromCart = (
  products: Product[],
  id: string
): void => {
  const newArray = [...products];

  const newProductsList = newArray.filter((prod: Product) => prod.id !== id);

  setLocalStorage("cart", newProductsList);
  store.dispatch(setCartProducts(newProductsList));
  store.dispatch(refreshCartCount());
};

export const changeProductQuantity = (
  operation: number,
  products: Product[],
  id: string
): void => {
  const newArray = [...products];

  const newProductsList = newArray.map((prod: Product) =>
    prod.id === id ? { ...prod, quantity: prod.quantity + operation } : prod
  );

  setLocalStorage("cart", newProductsList);
  store.dispatch(setCartProducts(newProductsList));
};
