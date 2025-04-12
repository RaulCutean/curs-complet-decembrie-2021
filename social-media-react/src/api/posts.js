import { instance } from "./instance";

export const posts = () => ({
  getAll: async () => {
    const { data, status } = await instance({
      method: "GET",
      url: "/posts",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return { data, status };
  },
});
