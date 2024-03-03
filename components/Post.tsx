"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Post.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { IoIosSend } from "react-icons/io";
import { BsSend } from "react-icons/bs";
import CreatePost from "@/app/event/dashboard/[id]/components/post/CreatePost";
import CommentBox from "./CommentBox";
import CommentBtn from "./CommentBtn";

interface Post {
  profilePic: string;
  name: string;
  caption: string;
  post: string;
}

export type User = {
  user: {
    image: string;
    email: string;
    name: string;
  };
  expires: string;
};

export default function Post({ profilePic, name, caption, post }: Post) {
  const [like, setLike] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comment, setComment] = useState(["sad", "sda"]);
  const [isComment, setIsComment] = useState(false);
  const [hasComment, setHasComment] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [user, setUser] = useState<User | Session>({
    user: { image: "", email: "", name: "" },
    expires: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await getSession();

      if (user) {
        setUser(user);
      }
    };
    getUser();
  }, []);

  function handleCommentBtn() {
    comment.length > 0 ? setHasComment((comment) => !comment) : "";
  }

  function handleClickLikeButton() {
    setLike((i) => i + 1);
  }
  function handleClickCommentButton() {
    isShare ? setIsShare(false) : "";
    isComment ? setIsComment(false) : setIsComment(true);
  }
  function handleClickShareButton() {
    isComment ? setIsComment(false) : "";
    isShare ? setIsShare(false) : setIsShare(true);
  }

  function handleComment(e: any) {
    setComment(e.target.value);
  }

  function handleSendBtn() {
    setComment("");
    setCommentCount((i) => i + 1);
  }

  return (
    <>
      <div className="w-571 bg-initial text-white m-8 rounded-xl pb-2">
        <div className="p-5">
          <div className="flex gap-7">
            <Image
              src={`${profilePic}`}
              alt="profile picture"
              width={60}
              height={10}
              className="rounded-full"
            />
            <div>
              <div className="text-black text-24 font-bold font-Inter">
                {name}
              </div>
              <div className="text-black text-13">3d</div>
            </div>
          </div>
          <div className="text-black mt-3 font-Inter">{caption}</div>
        </div>
        <button>
          <Image
            src={`${post}`}
            alt="post"
            width={661}
            height={363}
            className="fit"
          />
        </button>
        <div className="px-5 my-2 mb-2">
          <div className="flex gap-4">
            <button onClick={() => handleClickLikeButton()}>
              <Image
                src={"/images/reusableComponents/React.svg"}
                alt="like"
                width={40}
                height={34}
                className={styles.zoom}
              />
            </button>
            <button onClick={() => handleClickCommentButton()}>
              <Image
                src={"/images/reusableComponents/Comment.svg"}
                alt="comment"
                width={40}
                height={34}
                className={styles.zoom}
              />
            </button>
            <button onClick={() => handleClickShareButton()}>
              <Image
                src={"/images/reusableComponents/Share.svg"}
                alt="share"
                width={40}
                height={34}
                className={styles.zoom}
              />
            </button>
          </div>
          {isComment && (
            <div className="mt-2 mb-2 items-center flex gap-4 ">
              <Image
                src={user?.user?.image ?? ""}
                alt="user-photo"
                width={35}
                height={35}
                className="rounded-full mt-1"
              />
              <div className="border-[1px] gap-3 border-slate-500 rounded-3xl p-1 pl-2 pr-2 flex items-center">
                <input
                  type="text"
                  className="outline-none text-gray-700 p-1 bg-initial "
                  placeholder="Write a comment"
                />
                <button className="bg-slate-400 rounded-md w-8 inline-flex justify-center items-center h-6">
                  <BsSend />
                </button>
              </div>
            </div>
          )}
          {isShare && (
            <div className="flex gap-3 mb-3 mt-3 mx-6">
              <Image
                src={"./../public/images/"}
                alt="facebook"
                width={40}
                height={34}
                className={styles.zoom}
              />
              <Image
                src={"/images/reusableComponents/TwitterIconPost.svg"}
                alt="facebook"
                width={40}
                height={34}
                className={styles.zoom}
              />
              <Image
                src={"/images/reusableComponents/InstagramIconPost.svg"}
                alt="facebook"
                width={40}
                height={34}
                className={styles.zoom}
              />
              <Image
                src={"/images/reusableComponents/threads-app-icon.svg"}
                alt="facebook"
                width={31}
                height={28}
                className={styles.zoom}
              />
            </div>
          )}

          <div className="text-black font-Inter">
            {`Liked by ${like} peoples`}
          </div>
          <button onClick={handleCommentBtn}>
            <div className="text-black font-Inter">
              {` ${commentCount} comments`}
            </div>
          </button>

          {hasComment ? (
            <div>
              <div className=" mt-2 border-[1px] p-2 border-black rounded-lg h-20 overflow-auto mb-2 flex flex-col gap-2 ">
                <CommentBtn user={user} />
                <CommentBtn user={user} />
                <CommentBtn user={user} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

{
  /* function commentBtn({user}: {user: User | Session}) {
  return (
    <>
      <Image
        src={user?.user?.image ?? ""}
        alt="user-photo"
        width={35}
        height={35}
        className="rounded-full mt-1"
      />
      <div className=" text-black p-1 pl-2 pr-2 flex items-center">
        it is a great event
      </div>
    </>
  );
} */
}
