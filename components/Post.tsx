"use client";

import Image from "next/image";
import React from "react";
import styles from "./Post.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

interface Post {
  profilePic: string;
  name: string;
  caption: string;
  post: string;
}

export default function Post({ profilePic, name, caption, post }: Post) {
  const [like, setLike] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [isShare, setIsShare] = useState(false);

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
          <div className="mt-2 mb-2 flex gap-4 items-end">
            <TextField
              id="comment"
              label="Write a comment"
              variant="standard"
              value={comment}
              onChange={(e) => handleComment(e)}
            />
            <Button
              className="bg-gray-400 w-15 h-7"
              endIcon={<SendIcon />}
              onClick={() => handleSendBtn()}
            >
              Send
            </Button>
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
        <div className="text-black font-Inter">
          {`View all ${commentCount} comments`}{" "}
        </div>
      </div>
    </div>
  );
}
