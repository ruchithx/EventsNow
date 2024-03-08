"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { useState } from "react";

import { getSession } from "next-auth/react";
import { Session } from "next-auth";

import { error, success } from "@/util/Toastify";
import CommentBtn from "./CommentBtn";
import { EventContextType, UseEventContext } from "../EventDashContext";
import { IoMdSettings } from "react-icons/io";
import { IoSave } from "react-icons/io5";

interface Post {
  profilePic: string;
  name: string;
  caption: string;
  post: string;
  id: string;
  likes: number;
}

export type User = {
  user: {
    image: string;
    email: string;
    name: string;
  };
  expires: string;
};

export default function Post({
  profilePic,
  name,
  caption,
  post,
  id,
  likes,
}: Post) {
  const [like, setLike] = useState(likes);
  const [captionText, setCaptionText] = useState(caption);
  const [comment, setComment] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [hasComment, setHasComment] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const { allComment, setAllComment } = UseEventContext() as EventContextType;

  const [user, setUser] = useState<User | Session>({
    user: { image: "", email: "", name: "" },
    expires: "",
  });

  const [checkEditCaption, setcheckEditCaption] = useState(false);
  const [checkSaveCaption, setcheckSaveCaption] = useState(false);

  const commentRef = useRef<HTMLDivElement>(null);
  const allCommentRef = useRef<HTMLDivElement>(null);

  // handle comment button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commentRef.current &&
        !commentRef.current.contains(event.target as Node)
      ) {
        // Clicked outside of modal, so close it
        setIsComment(false);
      }
    };

    // Add event listener when the modal is open
    if (isComment) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isComment, setIsComment]);

  // handle all comment
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        allCommentRef.current &&
        !allCommentRef.current.contains(event.target as Node)
      ) {
        // Clicked outside of modal, so close it
        setHasComment(false);
      }
    };

    // Add event listener when the modal is open
    if (hasComment) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHasComment, hasComment]);

  useEffect(() => {
    const getUser = async () => {
      const user = await getSession();

      if (user) {
        setUser(user);
      }

      const res = await fetch("/api/v1/post/getCommentsByPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();

      setAllComment(data.data);
    };
    getUser();
  }, [id]);

  function handleCommentBtn() {
    allComment.length > 0 ? setHasComment((comment) => !comment) : "";
  }

  async function editCaption() {
    setcheckEditCaption(true);
  }

  async function saveCaption() {
    if (caption !== captionText) {
      const res = await fetch("/api/v1/post/updatePost", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          description: captionText,
        }),
      });

      if (!res.ok) {
        error("Error in updating caption");
      }
      success("Caption updated successfully");
    }

    setcheckEditCaption(false);
  }

  return (
    <>
      <div className="xl:w-571 sm:w-[24rem] w-[20rem]  bg-initial text-white m-8 rounded-xl pb-2">
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
              <div className="text-black sm:text-24 text-lg font-bold font-Inter">
                {name}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <input
              disabled={checkEditCaption ? false : true}
              onChange={(e) => setCaptionText(e.target.value)}
              value={captionText}
              type="text"
              className="bg-initial w-11/12 text-black mt-3 font-Inter outline-none"
            />

            {checkEditCaption ? (
              <button onClick={saveCaption} className="text-black button">
                <IoSave size={22} />
              </button>
            ) : (
              <button onClick={editCaption} className="text-black button">
                <IoMdSettings size={22} />
              </button>
            )}
          </div>
          {/* <div className="text-black mt-3 font-Inter">{caption}</div> */}
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
          <div className="flex gap-4 sm:w-32 w-24">
            {/* {isLike ? (
              <button onClick={handleClickOffLikeButton}>
                <div className="bg-red-900">
                  <IoMdHeart size={25} />
                </div>
              </button>
            ) : (
              <button onClick={handleClickLikeButton}>
                <Image
                  src={"/images/reusableComponents/React.svg"}
                  alt="like"
                  width={40}
                  height={34}
                  className={styles.zoom}
                />
              </button>
            )}

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
            </button> */}
          </div>
          {/* {isComment && (
            <div
              ref={commentRef}
              className="mt-2 mb-2 items-center flex gap-4 "
            >
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
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
                <button
                  onClick={sentComment}
                  disabled={comment.length > 0 ? false : true}
                  className={`${
                    comment.length > 0
                      ? "bg-slate-600"
                      : "bg-slate-400 cursor-not-allowed"
                  } rounded-md w-8 inline-flex justify-center items-center button h-6`}
                >
                  <BsSend />
                </button>
              </div>
            </div>
          )}
          {isShare && (
            <div className="flex gap-3 mb-3 mt-3 mx-6">
              <Image
                src={"/images/reusableComponents/FacebookIconPost.svg"}
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
          )} */}

          <div className="text-black font-Inter">
            {`Liked by ${like} peoples`}
          </div>
          <button onClick={handleCommentBtn}>
            <div className="text-black font-Inter">
              {` ${allComment.length} comments`}
            </div>
          </button>

          {hasComment ? (
            <div ref={allCommentRef}>
              <div className=" mt-2 border-[1px] p-2 border-black rounded-lg h-20 overflow-auto mb-2 flex flex-col gap-2 ">
                {allComment.map((comment) => (
                  <CommentBtn
                    id={comment._id}
                    key={comment._id}
                    userImage={comment.userImage}
                    description={comment.description}
                  />
                ))}
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
