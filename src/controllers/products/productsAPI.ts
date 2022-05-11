import { api } from "../../data/API";

const PRODUCTS_URL = "/products";

export const getAllProducts = async (): Promise<any> => {
  return await api.get(PRODUCTS_URL);
};
