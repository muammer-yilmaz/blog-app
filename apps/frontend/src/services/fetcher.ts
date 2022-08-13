import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";
//import toast from "react-hot-toast";

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
                if (e.response?.status === 401) {
                    toast.error("Authorization expired. Please login again!")
                    localStorage.removeItem("token")
                    setTimeout(() => {
                        window.location.reload();
                    }, 500)
                }
                reject(data.message)
            }
            else {
                reject(e || {});
            }
        }
    });
}

export default httpRequest;