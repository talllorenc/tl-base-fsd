const SERVER_DOMAIN: string =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://api.tl-base.kz";
const API_PATH: string = "api";

const API_URL = `${SERVER_DOMAIN}/${API_PATH}`;

export const API_ROUTES = {
  NEWS: `${API_URL}/news`,
};
