import { API, API_ROUTES } from "@/config/api";
import { ILoginRequest, ILoginResponse } from "../types";

class AuthService {
  async login(body: ILoginRequest) {
    const { data } = await API.post<ILoginResponse>(
      API_ROUTES.auth.login,
      body
    );
    
    return data;
  }
}

const authService = new AuthService();

export default authService;
