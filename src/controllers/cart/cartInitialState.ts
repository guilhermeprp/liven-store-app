import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";

const cartStorage = getLocalStorage("cart");

export const initialCartState = cartStorage;

export const initialCountState = cartStorage.length;
