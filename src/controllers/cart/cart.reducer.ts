import { initialState } from "./cartInitialState";

export function countCartItemsReducer(state = initialState, action: any) {
  switch (action.type) {
    case "REFRESH_COUNT":
      return { value: action.value };
    default:
      return state;
  }
}
