import axios from "axios";

const SERVER_DOMAIN: string =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://api.tl-base.kz";
const API_PATH: string = "api";
const API_URL = `${SERVER_DOMAIN}/${API_PATH}`;

/*
  Axios instance
*/
export const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

/*
  Api routes
*/
export const API_ROUTES = {
  news: `${API_URL}/news`,
  users: `${API_URL}/users`,
};
