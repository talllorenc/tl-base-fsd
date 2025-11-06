import { API, API_ROUTES } from "@/config/api";

class LogoutService {
  async logout() {
    const { data } = await API.post<{ message: string }>(
      API_ROUTES.auth.logout
    );
    return data;
  }
}

const logoutService = new LogoutService();

export default logoutService;
