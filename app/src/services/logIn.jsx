import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const submitObj = (param) => ({
    email: (param.email.toLowerCase()).trim(),
    password: param.password
});


export const logIn = async (obj) => {
  const format = submitObj(obj)

  try {
    const { data } = await api.post('/login', format);

    if (!data.token) return { token: false };

    return { token: data.token }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export default {
    logIn
}