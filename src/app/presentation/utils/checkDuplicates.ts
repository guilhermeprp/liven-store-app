export const checkDuplicatedItems = (
  array: any[],
  key: string,
  compare: string | number
) => {
  return array.some((item) => item[key] === compare);
};
