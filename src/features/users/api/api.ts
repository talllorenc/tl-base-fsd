import { IGetUsersQueryParams, IUserItem, IUsersResponse } from "../types/types";
import { API, API_ROUTES } from "@/config/api";

class UsersService {
  async getUsers(params: IGetUsersQueryParams = {}) {
    const { data } = await API.get<IUsersResponse>(API_ROUTES.users, {
      params,
    });
    return data;
  }

  async getUserById(id: string) {
    const { data } = await API.get<IUserItem>(
      `${API_ROUTES.users}/${id}`
    );
    return data;
  }
}

const usersService = new UsersService();

export default usersService;