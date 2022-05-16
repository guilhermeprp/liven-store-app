const initialState = { value: false };

export function error404(state = initialState, action) {
  switch (action.type) {
    case "ERROR404":
      return action.value;
    default:
      return state;
  }
}
