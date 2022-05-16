import { error404 } from "../controllers/error/error404.action";
import { getApi } from "../data/API";
import { getSessionStorage } from "./sessionStorage/getSessionStorage";
import { loadingDone } from "../controllers/loading/loading.action";
import { setProductsData } from "../controllers/products/products.action";
import { setSessionStorage } from "./sessionStorage/setSessionStorage";
import { store } from "../data/store";

//Balanceador de carga de requisições ao servidor
export const loadProducts = async (_endpoint: string) => {
  const sessionProducts = getSessionStorage(_endpoint);

  if (!sessionProducts.length) {
    try {
      const products = await getApi(_endpoint);

      setSessionStorage(_endpoint, products.data);
      store.dispatch(setProductsData(products.data));

      setTimeout(() => {
        store.dispatch(loadingDone());
      }, 1000);
    } catch (error: any) {
      store.dispatch(loadingDone());
      store.dispatch(error404());
      throw new Error(error);
    }
    return;
  }

  store.dispatch(setProductsData(sessionProducts));
  store.dispatch(loadingDone());
};
