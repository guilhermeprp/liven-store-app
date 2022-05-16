export const setProductsData = (data: Array<Product>) => {
  return {
    type: "SET_PRODUCTS_DATA",
    value: data,
  };
};
