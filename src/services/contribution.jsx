import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = '/contributions'

export const contributionRegionCalc = async (token) => {
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