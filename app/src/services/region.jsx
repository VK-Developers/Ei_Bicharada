import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const regionList = async () => {
    try {
        const { data } = await api.get('/regions',);
        return data
    } catch (error) {
        const errorResponse = handleRequestError(error)
        console.error(...errorResponse);
    }
};