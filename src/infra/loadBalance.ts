import { getAllProducts } from "../controllers/products/productsAPI";
import { getSessionStorage } from "./sessionStorage/getSessionStorage";
import { loadingDone } from "../controllers/loading/loading.action";
import { store } from "../data/store";
import { setProductsData } from "../controllers/products/products.action";
import { setSessionStorage } from "./sessionStorage/setSessionStorage";

export const loadProducts = async () => {
  const productsData = store.getState().manageProductsData;
  const sessionProducts = getSessionStorage("products");

  if (sessionProducts.length === 0) {
    try {
      const products = await getAllProducts();

      store.dispatch(setProductsData(products.data));
      setSessionStorage("products", productsData.value);

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
