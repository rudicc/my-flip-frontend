import axios from "axios";
import { UrlServer } from "./services";

const BASE_URL = UrlServer

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate  = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});