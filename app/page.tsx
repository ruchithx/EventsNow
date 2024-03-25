"use client";

import Footer from "@/components/Footer";

// ... other imports for Event Cards etc. (same as before)

import { useEffect, useState } from "react";
import Post from "@/components/Post";

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

  // Option 1: Using a callback function to receive rendered HTML

  return <>{/* <RenderedContent content={null} />{" "} */}</>;
}
