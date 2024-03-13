import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Post from "@/components/Post";
import Spinner from "@/components/Spinner";
import Post from "../Post";

// interface Post {
//   _id: string;
//   userImage: string;
//   userName: string;
//   description: string;
//   image: string;
//   like: number;
// }

export default function PostTab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = "65e334e132680ad8a1d92c8c";
  useEffect(() => {
    setLoading(true);
    const post = async () => {
      const res = await fetch(`/api/v1/post/getOnePost/${id}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    post();
  }, []);
  return (
    <div className="overflow-y-auto h-[40rem] xl:h-[45rem] md:h-[33rem] mt-12 xl:ml-44 md:ml-20 ">
      <div className="xl:pr-72 md:pr-64 pr-8">
        <Post
          likes={12}
          key={12}
          id={"12"}
          profilePic={"/images/reusableComponents/profilpic.jpg"}
          name={"ruchith nusara"}
          caption={"Hello everyone"}
          post={"/images/reusableComponents/PictureOfPost.jpg"}
        />
      </div>
    </div>
  );
}
