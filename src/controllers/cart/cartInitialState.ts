import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";

const cartStorage = getLocalStorage("cart");

export const initialCountState = cartStorage.length;

export const initialCartState = cartStorage;
