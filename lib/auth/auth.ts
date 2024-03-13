import { compare } from "bcrypt";

import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { JWT } from "next-auth/jwt";

type User = {
  _id: string;
  email: string;
  firstName: string;
  role: string;
 image: string;
};


export async function comparePassword(password: string, hashPassword: string) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}

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
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),

    FacebookProvider({
      clientId: "683671997269456",
      clientSecret: "9220a35f2ce17bc3a56a99d34c7e1d00",
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: any;
      account: any;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        const email = user?.email;
        const name = user?.name;
        const image = user?.image;
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/signInRegister`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, name, image }),
          }
        ).then((res) => res.json());

        user.role = data.user.role;
        user.firstName = data.user.firstName;
        user.lastName = data.user.lastName;
        user._id = data.user._id;
        user.image = data.user.image;
        user.wishListId = data.user.wishListId;
        user.registeredUser = data.user.registeredUser;

        return data;
      }
      // if (account?.provider === "google") {
      //   console.log("google");
      //   const userdata = await User.findOne({ email: user.email });
      //   console.log(userdata);
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
    async session(params: { session: any; token: JWT; user: any }) {
      // if (params.session.user) {
      //   params.session.user.email = params.token.email;
      //   params.session.user.firstName = params.token.firstName;
      //   params.session.user.userRole = params.token.userRole;
      // }

      params.session.user.email = params.token.email;
      params.session.user.firstName = params.token.firstName;
      params.session.user.role = params.token.role;
      params.session.user._id = params.token.id;
      return params.session;
    },
    async jwt(params: {
      token: any;
      user: any;
      session?: any;
      // account?: any | null | undefined;
      // profile?: any | undefined;
      // isNewUser?: boolean | undefined;
    }) {
      if (params.user) {
        params.token.id = params.user._id;
        params.token.firstName = params.user.firstName;
        params.token.role = params.user.role;

        // Handle user-related logic here
      } else {
        // Handle the case when the user is undefined
      }
      return params.token;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt",
  },
};
