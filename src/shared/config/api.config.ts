enum ProtocolENUM {
  HTTPS = "https",
  HTTP = "http",
}

const PROTOCOL: ProtocolENUM = ProtocolENUM.HTTP;
const SERVER_DOMAIN: string =
  process.env.NEXT_PUBLIC_SERVER_URL || "api.tl-base.kz";
const API_PATH: string = "api";

const API_URL = `${PROTOCOL}://${SERVER_DOMAIN}/${API_PATH}`;

export const API_ROUTES = {
  USERS: {
    root: `${API_URL}/users`,
    profile: `${API_URL}/users/profile`,
  },
};
