const initialState = { value: true };

export function loadingState(state = initialState, action) {
  switch (action.type) {
    case "DONE":
      return action.value;
    case "LOADING":
      return action.value;
    default:
      return state;
  }
}
