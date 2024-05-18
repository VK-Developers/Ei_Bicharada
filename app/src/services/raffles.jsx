import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = "/raffles"

export const rafflesList = async(token) => {
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
    return [];
  }
};

export const takingNumber = async(obj, token) => {
  try {
    await api.post(
      `${URL}-number`,
      obj,
      {
        headers: { 'Authorization': token }
      }
    );
    return {canBuy: true}
  } catch (error) {
    return {canBuy: false};
  }
};

export const raffleInfo = async(id, token) => {
  try {
    const {data} = await api.get(
      `${URL}/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
};

