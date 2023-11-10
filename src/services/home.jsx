import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = '/homes';

const submitObj = (param) => ({
    name: param.nome.trim(),
    phone: param.telefone,
    city: param.cidade,
    type: param.animal,
    duration: param.tempo,
  });

export const createHome = async (obj, token) => {
    const data = submitObj(obj)
  
    try {
      const request = await api.post(URL, data, {
        headers: {
          'Authorization': token
        }
      });
  
      return request;
    } catch (error) {
      const errorResponse = handleRequestError(error);
      return errorResponse;
    }
};