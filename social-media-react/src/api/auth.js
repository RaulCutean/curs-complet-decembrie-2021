import { instance } from "./instance";

export const auth = () => ({
  login: async ({ email, password }) => {
    const { data, status } = await instance({
      method: "POST",
      data: { email, password },
      url: "/users/login",
    });

    return { data, status };
  },
  register: async ({ first_name, last_name, email, password }) => {
    const { data, status } = await instance({
      method: "POST",
      data: { first_name, last_name, email, password },
      url: "/users/register",
    });

    return { data, status };
  },
  changePassword: async ({ oldPassword, newPassword, token }) => {
    const { data, status } = await instance({
      method: "POST",
      data: { oldPassword, newPassword },
      url: "/users/changepassword",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { data, status };
  },
});
