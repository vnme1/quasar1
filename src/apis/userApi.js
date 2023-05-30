import { api, axios } from "boot/axios";

const userRouter = `/api/member`;

const token = {
  login: null,
  create: null,
  duplicateCheck: null,
};

const create = async (form) => {
  try {
    if (token.create != null) {
      token.create = token.create.cancel("create cancel");
    }
    token.create = axios.CancelToken.source(); // 중복이벤트시 취소할수 있는 함수
    const result = await api.post(`${userRouter}`, form, {
      cancelToken: token.create.token,
    });
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const duplicateCheck = async (url) => {
  try {
    if (token.duplicateCheck != null) {
      token.duplicateCheck.cancel("duplicateCheck cancel");
    }
    token.duplicateCheck = axios.CancelToken.source();
    const result = await api.get(`${userRouter}${url}`, {
      cancelToken: token.duplicateCheck.token,
    });
    return result.data;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const login = async (form) => {
  try {
    if (token.login != null) {
      token.login.cancel("login cancel");
    }
    token.login = axios.CancelToken.source();
    const result = await api.post(`${userRouter}/loginLocal`, form, {
      cancelToken: token.login.token,
    });
    console.log("axios result", result);
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

export default { create, duplicateCheck, login  };
