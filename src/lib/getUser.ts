import { API, API_ROUTES } from "@/config/api";
import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("tl-auth-session");
  const cookieHeader = cookie ? `tl-auth-session=${cookie.value}` : "";

  if (!cookieHeader) {
    return null;
  }

  try {
    const { data } = await API.get(`${API_ROUTES.users.profile}`, {
      headers: { Cookie: cookieHeader },
    });

    return data;
  } catch {
    return null;
  }
};
