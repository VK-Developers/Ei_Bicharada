import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const getRescuedAnimals = async () => {
  try {
    const { data } = await api.get('/rescues');
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
    const { data } = await api.get('/users');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};

export const getAdoptions = async () => {
  try {
    const { data } = await api.get('/adoptions');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};

export const getMissing = async () => {
  try {
    const { data } = await api.get('/missing-animals');
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};