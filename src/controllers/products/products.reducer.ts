import { getSessionStorage } from "../../infra/sessionStorage/getSessionStorage";

const initialState = { value: getSessionStorage("products") };

export function manageProductsData(state = initialState, action: any) {
  switch (action.type) {
    case "SET_PRODUCTS_DATA":
      return action.value;
    default:
      return state;
  }
}
