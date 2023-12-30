import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import User from "./../../../../models/userModel";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials: any) => {
        if (!credentials) {
          return null;
        }

        console.log(credentials.email);

        const user = await User.findOne({ email: credentials.email });
        console.log(user);
        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
