import axios from "axios";
import { BASE_URL } from "./consts";

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(undefined, (error) => {
  // prinde orice eroare ce vine de la server
  console.log(error);
});
