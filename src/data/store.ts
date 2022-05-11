import { configureStore } from "@reduxjs/toolkit";
import { loadingState } from "../controllers/loading/loading.reducer";
import { countCartItemsReducer } from "../controllers/cart/cart.reducer";
import { manageProductsData } from "../controllers/products/products.reducer";

export const store = configureStore({
  reducer: {
    countCartItemsReducer: countCartItemsReducer,
    loadingState: loadingState,
    manageProductsData: manageProductsData,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
