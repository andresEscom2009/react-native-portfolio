import axios from "axios";
import { UserListResponse } from "../interfaces/reqres.response";

export const loadUserAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: {
          page: page,
        },
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
