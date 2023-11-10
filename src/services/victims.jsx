import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = "/victims"

export const registreVictime = async (token) => {
    try {
      const request = await api.post(
        URL,
        {},
        {
          headers: { 'Authorization': token }
        }
      );
  
      return request;
    } catch (error) {
        const errorResponse = handleRequestError(error);
        return errorResponse;
    }
};

export const victimsList = async (token) => {
    try {
      const { data } = await api.get(
        URL,
        {
          headers: { 'Authorization': token }
        }
      );
      return data
    } catch (error) {
      const errorResponse = handleRequestError(error)
      console.error(...errorResponse);
    }
};

export const removeVictim = async (id, token) => {
  try {
    const { data } = await api.delete(
      `${URL}/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};