import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const postLogin = async ({email, password}) => {
  const format = {
    email: (email.toLowerCase()).trim(),
    password
  }

  try {
    const { data } = await api.post('/login', format);

    if (!data.token) return { token: false };

    return { token: data.token }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const postNewAnimal = async (obj, where, token) => {
  const url = where === 'adoption' ? '/adoptions' : '/missing-animals';

  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const name = obj.nome.replace(/\s/g, "").replace(/,/g, "_").replace(/\./g, "");
  const nameToSave = `${formattedDate}_${name.toLowerCase()}.jpg`;

  const formData = new FormData();

  formData.append('file', {
    uri: obj.picture[0],
    type: 'image/jpeg',
    name: nameToSave, 
  });

  const send = {
    animal: obj.animal.trim(),
    name: obj.nome.trim(),
    description: obj.descricao.trim(),
    neutered: obj.castrado,
    sex: obj.sexo,
  }

  formData.append('data', JSON.stringify(send));

  try {
    const request = await api.post(url, formData, {
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


export const postRescueComplains = async (obj, where, token) => {
  const url = where === 'rescue' ? '/rescues' : '/complains';

  const date = new Date();
  const dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const name = obj.animal.replace(/\s/g, "").replace(/,/g, "_").replace(/:/g, "-").replace(/\./g, "");
  const time = obj.horario.replace(/:/g, "-")
  const nameToSave = `${dateFormat}_${time}_${name.toLowerCase()}.jpg`;

  const formData = new FormData();

  formData.append('file', {
    uri: obj.picture[0],
    type: 'image/jpeg',
    name: nameToSave, 
  });

  const send = {
    animal: obj.animal.trim(),
    walking: obj.andando,
    description: obj.ocorrido.trim(),
    hour: obj.horario,
    adress: obj.endereco.trim(),
    city: obj.cidade.trim(),
  }

  formData.append('data', JSON.stringify(send));

  try {
    const request = await api.post(url, formData, {
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

export const postHome = async (obj, token) => {
  const send = {
    name: obj.nome.trim(),
    phone: obj.telefone,
    city: obj.cidade,
    type: obj.animal,
    duration: obj.tempo,
  }

  try {
    const request = await api.post('/homes', send, {
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

export const postVictims = async (token) => {
  try {
    const request = await api.post(
      '/victims',
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