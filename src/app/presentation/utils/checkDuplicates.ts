export const checkDuplicatedItems = (
  array: Product[],
  key: string,
  compare: string | number
) => array.some((item) => item[key] === compare);
