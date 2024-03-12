import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

import { error, success } from "@/util/Toastify";
import styles from "./Post.module.css";
import { BsSend } from "react-icons/bs";
interface Props {
  user: any;
  setCreatePost: React.Dispatch<React.SetStateAction<boolean>>;

  profilePic: string;
  name: string;
  caption: string;
  post: string;
}

export default memo(function CreatePost({
  setCreatePost,
  user,
  profilePic,
  name,
  caption,
  post,
}: Props) {
  const [profileImage, setProfileImage] = useState("");
  const [title, setTitle] = useState("");
  const [isDissableBtn, setIsDissableBtn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [like, setLike] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [isShare, setIsShare] = useState(false);

  function handleEdit(value: string) {
    setTitle(value);
    if (value.length > 0) {
      setIsDissableBtn(false);
    } else {
      setIsDissableBtn(true);
    }
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

  const handlePostButton = async () => {
    setIsSubmitting(true);
    const data = {
      userName: user.user.name,
      userImage: user.user.image,
      eventId: "123",
      description: title,
      image: profileImage,
    };
    const res = await fetch("/api/v1/post/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setIsSubmitting(false);
      error("There was an error creating the post");
      return;
    }

    success("Post created successfully");
    setIsSubmitting(false);
    setCreatePost(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9CC",
      }}
      id="static-modal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className="  p-4 fixed  z-50 justify-center items-center w-full md:inset-0  "
    >
      <div className="border-[1px] divide-x-2 mb-10  rounded-xl bg-white w-4/5 2xl:w-1/5 lg:w-1/2 md:w-3/5  relative md:top-[5%] md:left-[25%]  top-[5%] left-[5%] 2xl:left-[35%]">
        <div className="w-11/12 md:h-96 overflow-auto bg-initial text-white m-8 rounded-xl pb-2">
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
                    {/* <IoIosSend size={20} /> */}

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
            <button onClick={() => setCreatePost(true)}>
              <div className="text-black font-Inter">
                {` ${commentCount} comments`}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
