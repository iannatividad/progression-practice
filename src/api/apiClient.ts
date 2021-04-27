import axios from "axios";

import config from "../config/index";

export const baseURL = `${config.API_URL}/`;

const ApiClient = axios.create({ baseURL });

export default ApiClient;
