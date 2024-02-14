import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = '/login'

const submitObj = (param) => ({
  email: (param.email.toLowerCase()).trim(),
  password: param.password
});

export const logIn = async (obj) => {
  const format = submitObj(obj)

  try {
    const { data } = await api.post(URL, format);

    if (!data.token) return { token: false };

    return { token: data.token, type: data.type }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const update = async (value, id, token) => {
  try {
    await api.put(
      `${URL}/${id}`, 
      {
        password: value
      },
      {
        headers: { 'Authorization': token }
      }
    );
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const deleteAccount = async (id, token) => {
  try {
    // const { data } = await api.delete(`${URL}/${id}`, {
    //   headers: { 'Authorization': token }
    // });

    await api.delete(
      `${URL}/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );

    // if (!data.token) return { token: false };

    // return { token: data.token, type: data.type }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;

  }
};
