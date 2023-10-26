import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const getProducts = async (token) => {
  try {
    const { data } = await api.get(
      '/products',
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

export const getNewAndEvent = async (token) => {
  try {
    const { data } = await api.get(
      '/news-events',
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


export const getContributions = async (token) => {
  try {
    const { data } = await api.get(
      '/contributions',
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