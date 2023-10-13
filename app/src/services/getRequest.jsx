import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const getAdoptions = async (token) => {
  const params = {
    accepted: true
  };

  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  try {
    const { data } = await api.get(
      `/adoptions?${queryString}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};

export const getMissing = async (token) => {
  const params = {
    accepted: true
  };

  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  try {
    const { data } = await api.get(
      `/missing-animals?${queryString}`,
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