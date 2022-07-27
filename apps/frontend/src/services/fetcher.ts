import axios, { AxiosRequestConfig } from "axios";

const URL = process.env.BACKEND_URL || "http://localhost:5000"

axios.defaults.baseURL = `${URL}/api`;
//axios.defaults.withCredentials = true;


const httpRequest = <T>(req: AxiosRequestConfig): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await axios(req);

            resolve(request.data)
        } catch (e) {
            reject(e || {});
        }
    });
}

export default httpRequest;