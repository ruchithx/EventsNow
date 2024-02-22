import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { NextAuthOptions } from "next-auth";
import User from "./../../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";

import FacebookProvider from "next-auth/providers/facebook";
import { authOptions } from "../../../../lib/auth/auth";
// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "your@email.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       authorize: async (credentials: any) => {
//         if (!credentials) {
//           return null;
//         }

//         const user = await User.findOne({ email: credentials.email });

//         if (!user) {
//           return null;
//         }

//         return user;
//       },
//     }),

//     GoogleProvider({
//       clientId:
//         "585040141563-5qq76qfjfl60d267mblh6voih0gj7uhh.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),

//     FacebookProvider({
//       clientId: "683671997269456",
//       clientSecret: "9220a35f2ce17bc3a56a99d34c7e1d00",
//     }),
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET,
//     // }),
//   ],
//   callbacks: {
//     async signIn({ user, account }): Promise<boolean> {
//       if (account?.provider === "google") {
//         const email = user?.email;
//         const name = user?.name;
//         const image = user?.image;

//         const data = await fetch(
//           "http://localhost:3000/api/v1/user/signInRegister",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, name, image }),
//           }
//         ).then((res) => res.json());
//       }

//       // if (account?.provider === "google") {
//       //   console.log("google");
//       //   const userdata = await User.findOne({ email: user.email });
//       //   console.log(userdata);
//       //   if (userdata) {
//       //     return true;
//       //   } else {
//       //     try {
//       //       const data = {
//       //         email: user.email,
//       //         firstName: user.name?.split(" ")[0],
//       //         lastName: user.name?.split(" ")[1],
//       //       };
//       //       const newUser = await User.create(data);
//       //       if (!newUser) return false;
//       //       return true;
//       //     } catch (e) {
//       //       console.log(e);
//       //     }
//       //   }
//       // }

//       return true;
//     },
//     // async jwt(params: {
//     //   token: any;
//     //   user: any;
//     //   session?: any;
//     //   // account?: any | null | undefined;
//     //   // profile?: any | undefined;
//     //   // isNewUser?: boolean | undefined;
//     // }) {
//     //   console.log("jwt params 🦊🦒🐯🦁");
//     //   console.log(params.token, params.user, params.session);

//     //   if (params.user) {
//     //     console.log("User:", params.user);
//     //     // Handle user-related logic here
//     //   } else {
//     //     console.log("User is undefined");
//     //     // Handle the case when the user is undefined
//     //   }

//     //   return params.token;
//     // },
//   },

//   pages: {
//     signIn: "/auth/login",
//     signOut: "/auth/signout",
//   },
//   session: {
//     strategy: "jwt",
//   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
