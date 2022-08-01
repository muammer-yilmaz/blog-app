import axios, { Axios, AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const URL = process.env.BACKEND_URL || "http://localhost:5000"

axios.defaults.baseURL = `${URL}/api`;
//axios.defaults.withCredentials = true;


const httpRequest = <T>(req: AxiosRequestConfig): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await axios(req);

            resolve(request.data)
        } catch (e: any) {
            if (axios.isAxiosError(e)) {
                const data: any = e.response?.data;
                console.log('data :>> ', data);
                toast.error(data.message)
                reject({
                    message: e.response?.data
                })
            }
            else {
                reject(e || {});
            }
        }
    });
}

export default httpRequest;