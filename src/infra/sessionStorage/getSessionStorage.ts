export const getSessionStorage = (session: string) => {
  const db = sessionStorage.getItem(session);

  if (db) {
    return JSON.parse(db);
  }
  return [];
};
