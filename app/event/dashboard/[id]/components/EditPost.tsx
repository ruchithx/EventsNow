"use client";
import React, { useState } from "react";
import Container from "./Container";
import { MdArrowBack } from "react-icons/md";
import { UseEventContext } from "../EventDashContext";
import Post from "./Post";
// import { Post as PostType } from "@/app/event/host/[id]/components/PostTab";
import { EventContextType, PostType } from "@/app/Type";

export default function EditPost() {
  const { setStatus, eventPosts } = UseEventContext() as EventContextType;

  return (
    <Container>
      <button className="button mt-5" onClick={() => setStatus("campaign")}>
        <div className="text-white rounded-full bg-custom-orange p-1 w-8 flex justify-center">
          <MdArrowBack size={20} />
        </div>
      </button>
      <div className="lg:pl-10 mb-5 grid gap-2  md:mr-10 pb-8">
        <div className=" font-mono gap-3 flex text-custom-orange font-medium text-3xl ">
          Edit Post
        </div>
        <div className=" text-[#455273] font-mono mr-8">
          You can edit the post that you have created.
        </div>
      </div>
      <div className="h-[40rem] overflow-auto">
        {eventPosts.map((post: PostType) => (
          <Post
            likes={post.like}
            key={post._id}
            id={post._id}
            profilePic={post.userImage}
            name={post.userName}
            caption={post.description}
            post={post.image}
          />
        ))}
      </div>
    </Container>
  );
}
