export const loadingDone = () => {
  return {
    type: "DONE",
    value: false,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
    value: true,
  };
};
