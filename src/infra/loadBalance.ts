import { getAllProducts } from "../controllers/products/productsAPI";
import { getSessionStorage } from "./sessionStorage/getSessionStorage";
import { loadingDone } from "../controllers/loading/loading.action";
import { store } from "../data/store";
import { setProductsData } from "../controllers/products/products.action";
import { setSessionStorage } from "./sessionStorage/setSessionStorage";

export const loadProducts = async () => {
  const sessionProducts = getSessionStorage("products");

  if (!sessionProducts.length) {
    try {
      const products = await getAllProducts();

      setSessionStorage("products", products.data);
      store.dispatch(setProductsData(products.data));

      setTimeout(() => {
        store.dispatch(loadingDone());
      }, 1000);
    } catch (error) {
      store.dispatch(loadingDone());
      console.error(error);
    }
    return;
  }

  store.dispatch(setProductsData(sessionProducts));
  store.dispatch(loadingDone());
};
