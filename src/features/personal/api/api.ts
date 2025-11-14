import { API, API_ROUTES } from "@/config/api";
import { IProfileResponse } from "../types";

class ProfileService {
  async getMe() {
    const { data } = await API.get<IProfileResponse>(API_ROUTES.users.profile);

    return data;
  }
}

const profileService = new ProfileService();

export default profileService;
