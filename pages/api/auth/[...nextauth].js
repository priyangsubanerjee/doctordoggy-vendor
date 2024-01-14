import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/prisma/prisma";
import { AuthenticatePartner, FindPartnerByEmail } from "@/prisma/partner";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password, browserAgent } = credentials;
        console.log("Credentials", email, password, browserAgent);
        let { success, data } = await AuthenticatePartner(
          email,
          password,
          browserAgent
        );

        if (success) {
          return {
            name: data.name,
            email: data.email,
            needPassReset: data.needPassReset,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (!session) return;

      let { success, data } = await FindPartnerByEmail(session.user.email);

      if (success) {
        return {
          ...session,
          user: {
            ...session.user,
            email: data.email,
            needPassReset: data.needPassReset,
          },
        };
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      let { success, data } = await FindPartnerByEmail(token.email);
      return {
        ...token,
        needPassReset: data.needPassReset,
      };
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_SALT,
};

export default NextAuth(authOptions);
