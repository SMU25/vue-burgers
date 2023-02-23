import axios from "axios";
import { API_URL } from "@/constants/urls";

export const instance = axios.create({
  baseURL: API_URL,
});
