import { getLocalStorage } from "../../infra/localStorage/getLocalStorage";

export const refreshCount = () => {
  return {
    type: "REFRESH_COUNT",
    value: getLocalStorage("cart").length,
  };
};
