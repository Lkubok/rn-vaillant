import axios from "axios";
import { config } from "src/config/config";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const baseURL = config.API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

axiosInstance.interceptors.request.use(async (config) => config);
