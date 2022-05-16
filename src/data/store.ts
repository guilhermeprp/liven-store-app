import { configureStore } from "@reduxjs/toolkit";
import { error404 } from "../controllers/error/error404.reducer";
import { loadingState } from "../controllers/loading/loading.reducer";
import { manageProductsData } from "../controllers/products/products.reducer";
import {
  cartItemsReducer,
  countCartItemsReducer,
} from "../controllers/cart/cart.reducer";

export const store = configureStore({
  reducer: {
    countCartItemsReducer: countCartItemsReducer,
    cartItemsReducer: cartItemsReducer,
    loadingState: loadingState,
    manageProductsData: manageProductsData,
    error404: error404,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
