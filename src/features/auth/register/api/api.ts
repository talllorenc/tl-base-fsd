import { API, API_ROUTES } from "@/config/api";
import { IRegisterResponse } from "../types";

class RegisterService {
  async register(body: FormData) {
    const { data } = await API.post<IRegisterResponse>(
      API_ROUTES.auth.register,
      body
    );

    return data;
  }
}

const registerService = new RegisterService();

export default registerService;
