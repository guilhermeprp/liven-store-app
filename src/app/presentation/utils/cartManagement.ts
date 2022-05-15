import {
  IremoveProductFromCart,
  IchangeProductQuantity,
} from "../../../model/cartActions.model";

export const removeProduct = ({ cart }: IremoveProductFromCart): Product[] => {
  const { products, id } = cart;
  const newArray = [...products];

  return newArray.filter((prod: Product) => prod.id !== id);
};

export const changeProductQuantity = ({
  operation,
  cart,
}: IchangeProductQuantity): Product[] => {
  const { products, id } = cart;
  const newArray = [...products];

  return newArray.map((prod: Product) =>
    prod.id === id ? { ...prod, quantity: prod.quantity + operation } : prod
  );
};
