const initialState = { value: true };

export function loadingState(state = initialState, action: any) {
  switch (action.type) {
    case "DONE":
      return { value: false };
    case "LOADING":
      return { value: true };
    default:
      return state;
  }
}
