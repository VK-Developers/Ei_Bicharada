import api from "./api";
import handleRequestError from "../hooks/handleRequestError";
import FormatName from "../hooks/upLoadName"

const URL = '/missing-animals'

const userParams = {
  accepted: true
}

const submitObj = (param) => ({
    animal: param.animal.trim(),
    name: param.nome.trim(),
    description: param.descricao.trim(),
    neutered: param.castrado,
    sex: param.sexo,
  });

export const acceptedMissing = async (token) => {
    const queryString = Object.keys(userParams)
        .map(key => `${key}=${userParams[key]}`)
        .join('&');

    try {
        const { data } = await api.get(
        `${URL}?${queryString}`,
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

export const createMissing = async (obj, token) => {
  const upLoadName = FormatName(obj, 'lost')
  const data = submitObj(obj)

  const formData = new FormData();
  
  formData.append('data', JSON.stringify(data));
  formData.append('file', {
    uri: obj.picture[0],
    type: 'image/jpeg',
    name: upLoadName, 
  });

  try {
    const request = await api.post(URL, formData, {
      headers: {
        'Authorization': token,
        'Content-Type': 'multipart/form-data',
      }
    });

    return request;
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};