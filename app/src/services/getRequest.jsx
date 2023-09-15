import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const getRescuedAnimals = async () => {
  try {
    const { data } = await api.get('/rescue');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await api.get('/products');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await api.get('/user');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};