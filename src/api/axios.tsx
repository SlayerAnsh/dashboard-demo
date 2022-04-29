import axios from "axios";

export const publicAxios = axios.create();
publicAxios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';