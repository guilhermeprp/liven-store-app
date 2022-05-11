const initialState = { value: [] };

export function manageProductsData(state = initialState, action: any) {
  switch (action.type) {
    case "SET_PRODUCTS_DATA":
      return { value: action.value };
    default:
      return state;
  }
}
