import { ENDPOINTS } from "../consts";
import { instance } from "../instance";

export const auth = () => ({
  login: async (email, password) => {
    try {
      const { data, status, statusText } = await instance.post(
        ENDPOINTS.LOGIN,
        {
          email,
          password,
        }
      );

      return { data, status, statusText };
    } catch (err) {
      return {
        data: undefined,
        status: 0,
        statusText: "Could not fetch data.",
      };
    }
  },
  register: async (email, password) => {
    const { data, status, statusText } = await instance.post(
      ENDPOINTS.REGISTER,
      {
        email,
        password,
      }
    );

    return { data, status, statusText };
  },
});
