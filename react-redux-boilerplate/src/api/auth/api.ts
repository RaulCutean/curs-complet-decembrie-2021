import { Token, TokenResponse, RegisterResponse } from "./types";
import { sendPostRequest } from "api/network";

export default function () {
  return {
    login: async (email: string, password: string): Promise<Token> => {
      const { data }: TokenResponse = await sendPostRequest(
        process.env.REACT_APP_BASE_URL + "/users/login",
        {
          email,
          password,
        }
      );
      return data;
    },

    register: async (
      first_name: string,
      last_name: string,
      email: string,
      password: string
    ): Promise<any> => {
      const { data }: Partial<RegisterResponse> = await sendPostRequest(
        process.env.REACT_APP_BASE_URL + "/users/register",
        {
          first_name,
          last_name,
          email,
          password,
        }
      );
      return data;
    },
  };
}
