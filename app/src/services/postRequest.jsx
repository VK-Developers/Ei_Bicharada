import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const postLogin = async (obj) => {
  try {
    const { data } = await api.post('/login', obj);

    if (!data.token) return { token: false };

    return { token: data.token }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const postUser = async (obj) => {
  try {
    const { data } = await api.post('/users', obj);

    console.log(data)
    
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
}