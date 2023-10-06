import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const postLogin = async (obj) => {
    try {
      const { data } = await api.post('/login', obj);

      if (data.status !== 400) return { token: false };

      return { token: data.token }
    } catch (error) {
      const errorResponse = handleRequestError(error);
      return errorResponse;
    }
  };