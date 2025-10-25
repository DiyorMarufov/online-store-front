import axios from "axios";
import config from "../../../shared/config";

export const api = axios.create({
  baseURL: config.BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
