export const getLocalStorage = (local: string) => {
  const db = localStorage.getItem(local);

  if (db) {
    return JSON.parse(db);
  }
  return [];
};
