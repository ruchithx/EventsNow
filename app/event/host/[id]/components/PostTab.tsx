import React, { useState, useEffect } from "react";
import Image from "next/image";
import Post from "@/components/Post";
import Spinner from "@/components/Spinner";
import { getSession } from "next-auth/react";

export interface Post {
  _id: string;
  userImage: string;
  userName: string;
  description: string;
  image: string;
  like: number;
}

export default function PostTab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<any>("");
  const id = "65e334e132680ad8a1d92c8c";
  useEffect(() => {
    setLoading(true);
    const post = async () => {
      const session = await getSession();
      setUserEmail(session?.user?.email);
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
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          data.map((post: Post) => (
            <Post
              likes={post.like}
              key={post._id}
              id={post._id}
              profilePic={post.userImage}
              name={post.userName}
              caption={post.description}
              post={post.image}
            />
          ))
        )}

        {/* <Post 
            profilePic="profilpic"
            name="Oshadhi Yasundara"
            caption="Hello everyone"
            post="PictureOfPost"
        />
       
        <Post 
            profilePic="profilpic"
            name="Chamodi vimodya"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Ashan DIlsara"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Ruchith Samarawicrama"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Arkham"
            caption="Hello everyone"
            post="PictureOfPost"
        /> */}
      </div>
    </div>
  );
}
