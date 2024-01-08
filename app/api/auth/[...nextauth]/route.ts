import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import User from "./../../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

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
      // if (account?.provider === "google") {
      //   const userdata = await User.findOne({ email: user.email });
      //   if (userdata) {
      //     return true;
      //   } else {
      //     try {
      //       const data = {
      //         email: user.email,
      //         firstName: user.name?.split(" ")[0],
      //         lastName: user.name?.split(" ")[1],
      //       };
      //       const newUser = await User.create(data);
      //       if (!newUser) return false;
      //       return true;
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   }
      // }

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
