import React from "react";
import { signOut } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Post from "@/components/Post";
import Footer from "@/components/Footer";
import NavBarMain from "@/components/NavBarMain";

export default function page() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}
