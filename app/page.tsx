"use client";

import Footer from "@/components/Footer";

import EventCardNew from "@/components/EventCardNew";

import EventCardEventDash from "@/components/EventCardEventDash";
import Upcoming_Events from "@/components/UpcomingEvents";
import EventCardNewOrg from "@/components/EventCardNewOrg";
import EventCardDisabled from "@/components/EventCardDisabled";
import EventCard from "@/components/EventCard";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import Post from "@/components/Post";
import Build from "@/components/PageBuilder/Build";

interface Post {
  _id: string;
  userImage: string;
  userName: string;
  description: string;
  image: string;
  like: number;
}

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const post = async () => {
      const res = await fetch("/api/v1/post/getPost");
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    post();
  }, []);
  return (
    <>
      <Build />
    </>
  );
}
