import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { API, API_ROUTES } from "@/config/api";
import { cookies } from "next/headers";
import { parse } from "cookie";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const response = await API.post(
          API_ROUTES.auth.google,
          {
            email: user.email,
            name: user.name,
            avatar: user.image,
          },
          {
            withCredentials: true,
          }
        );

        const apiCookies = response.headers["set-cookie"];
        if (apiCookies && apiCookies.length > 0) {
          const parsedCookie = parse(apiCookies[0]);
          const [cookieName, cookieValue] = Object.entries(parsedCookie)[0];

          if (cookieName && cookieValue) {
            const httpOnly = apiCookies[0].toLowerCase().includes("httponly");
            const maxAge = parsedCookie["Max-Age"]
              ? parseInt(parsedCookie["Max-Age"])
              : 604800000;
            const path = parsedCookie.Path ? parsedCookie.Path : "/";
            const sameSite = parsedCookie.SameSite
              ? (parsedCookie.SameSite.toLowerCase() as
                  | "lax"
                  | "strict"
                  | "none")
              : "none";
            const expires = parsedCookie.Expires
              ? new Date(parsedCookie.Expires)
              : undefined;

            const cookieStore = await cookies();
            cookieStore.set({
              name: cookieName,
              value: cookieValue,
              httpOnly,
              maxAge,
              path,
              sameSite,
              expires,
              secure: true,
            });
          }
        }

        return true;
      } catch (e) {
        console.error("Google login failed:", e);
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
    error: "/login?error",
  },
});

export { handler as GET, handler as POST };
