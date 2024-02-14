import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = "/infos"

export const allInfos = async () => {
  try {
    const { data } = await api.get(URL);
    return data
  } catch (error) {
    const errorResponse = handleRequestError(error)
    console.error(...errorResponse);
  }
};
