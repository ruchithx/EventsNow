import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import User from "./../../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials: any) => {
        if (!credentials) {
          return null;
        }


        const user = await User.findOne({ email: credentials.email });
       
        if (!user) {
          return null;
        }

        return user;
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENET_ID,
    //   clientSecret: process.env.GOOGLE_CLIENET_SECRET,
    // }),
    GoogleProvider({
      clientId:
        "585040141563-5qq76qfjfl60d267mblh6voih0gj7uhh.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }): Promise<boolean> {
      console.log("user", user);
      console.log("account", account);
      return true;
    },
  },

  pages: {
    signIn: "/user/login",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
