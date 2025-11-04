import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { API, API_ROUTES } from "@/config/api";

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
        console.log(user);
        // await API.post(API_ROUTES.auth.google, { email: user.email, name: user.name, image: user.image });

        return true;
      } catch (e) {
        console.error("Google login failed:", e);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
