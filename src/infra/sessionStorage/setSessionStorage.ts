export const setSessionStorage = (session: string, data: any) => {
  sessionStorage.setItem(session, JSON.stringify(data));
};
