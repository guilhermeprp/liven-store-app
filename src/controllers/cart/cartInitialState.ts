import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";

export const initialState = { value: getLocalStorage("cart").length };
