import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getApi = async (endpoint: string): Promise<any> =>
  await api.get(endpoint);
