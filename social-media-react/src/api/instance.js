import axios from "axios";

export const instance = axios.create({
  baseURL: "https://backend-curs.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 sec
});
