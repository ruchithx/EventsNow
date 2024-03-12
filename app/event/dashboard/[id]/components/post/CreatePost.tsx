import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { error, success } from "@/util/Toastify";
import { useParams } from "next/navigation";

interface Props {
  user: any;
  setCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
}

export default memo(function CreatePost({ setCreatePost, user }: Props) {
  const params = useParams();
  const [profileImage, setProfileImage] = useState("");

  const [title, setTitle] = useState("");
  const [isDissableBtn, setIsDissableBtn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEdit(value: string) {
    setTitle(value);
    if (value.length > 0) {
      setIsDissableBtn(false);
    } else {
      setIsDissableBtn(true);
    }
  }

  const handlePostButton = async () => {
    setIsSubmitting(true);
    const data = {
      userName: user.user.name,
      userImage: user.user.image,
      eventId: params.id,
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
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9CC",
        }}
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden p-4 fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="border-[1px] divide-x-2 mb-10  rounded-xl bg-white w-4/5 2xl:w-1/5 lg:w-2/5 md:w-3/5  relative md:top-[25%] md:left-[25%]  top-[5%] left-[5%] 2xl:left-[35%]">
          <div className="mr-4 grid grid-cols-12 p-3 w-full border-b-[1px]  border-slate-300">
            <div className="text-xl text-center col-span-11	font-bold		">
              Create Post
            </div>
            <button
              onClick={() => setCreatePost(false)}
              className="bg-slate-300 hover:bg-slate-400  w-8 col-span-1 rounded-full p-2 flex justify-center items-center"
            >
              <IoClose />
            </button>
          </div>

          <div className="p-5">
            <div className="flex gap-3 justify-start items-start">
              <Image
                src={`${user.user.image}`}
                alt="profile picture"
                width={40}
                height={40}
                className="rounded-full mt-1"
              />
              <div>
                <div className="text-black text-lg font-medium	 font-Inter">
                  {user.user.name}
                </div>
              </div>
            </div>
            <div className=" mt-5 font-Inter ">
              <input
                type="text "
                className=" outline-none text-2xl	w-full text-gray-600"
                placeholder="What's on your mind?"
                value={title}
                onChange={(e) => handleEdit(e.target.value)}
              />
            </div>
          </div>
          {/* <button className="w-full">
            <div className="border-[2px] items-center full m-2 rounded-2xl font-medium p-3 flex justify-between ">
              Add to your post
              <Image
                src={`/images/event/post/add-post-btn.png`}
                alt="profile picture"
                width={20}
                height={20}
              />
            </div>
          </button> */}

          {profileImage.length > 0 && (
            <div>
              <div className="relative border-[1px] rounded-xl m-2 border-slate-300 ">
                <button
                  onClick={() => setProfileImage("")}
                  className="bg-white absolute  right-5 top-5 w-8 col-span-1 rounded-full p-2 flex justify-center items-center"
                >
                  <IoClose />
                </button>
                <Image
                  className=" p-4"
                  src={profileImage}
                  width={500}
                  height={500}
                  alt="organization cover image"
                />
              </div>
            </div>
          )}
          <CldUploadWidget
            uploadPreset="createpost"
            onOpen={() => {
              console.log("isPhotographer");
            }}
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const uploadedResult = results.info as CloudinaryUploadWidgetInfo;
              const profileImageURL = {
                image: uploadedResult.secure_url,
              };
              setProfileImage(profileImageURL.image);
              setIsDissableBtn(false);
            }}
            options={{
              tags: ["event post"],
              // publicId: `${organizationName}/${Date.now()}`,
              // publicId: "b2c",

              sources: ["local"],
              googleApiKey: "<image_search_google_api_key>",
              showAdvancedOptions: false,
              // cropping: true,
              multiple: false,
              showSkipCropButton: false,
              // croppingAspectRatio: 0.75,
              // croppingDefaultSelectionRatio: 0.75,
              // croppingShowDimensions: true,
              // croppingCoordinatesMode: "custom",
              // maxImageHeight: 100,
              // croppingValidateDimensions: true,
              defaultSource: "local",
              resourceType: "image",
              folder: "post",

              styles: {
                palette: {
                  window: "#ffffff",
                  sourceBg: "#f4f4f5",
                  windowBorder: "#90a0b3",
                  tabIcon: "#000000",
                  inactiveTabIcon: "#555a5f",
                  menuIcons: "#555a5f",
                  link: "#000000",
                  action: "#000000",
                  inProgress: "#464646",
                  complete: "#000000",
                  error: "#cc0000",
                  textDark: "#000000",
                  textLight: "#fcfffd",
                  theme: "white",
                },
              },
            }}
          >
            {({ open }: any) => {
              return (
                <button
                  onClick={() => {
                    open();
                  }}
                  className="w-full"
                >
                  <div className="border-[2px] items-center  m-2 rounded-2xl font-medium p-3 flex justify-between ">
                    Add to your post
                    <Image
                      src={`/images/event/post/add-post-btn.png`}
                      alt="profile picture"
                      width={20}
                      height={20}
                    />
                  </div>
                </button>
              );
            }}
          </CldUploadWidget>
          <div className="w-full flex justify-center items-center">
            {isSubmitting ? (
              <button
                onClick={handlePostButton}
                disabled={isDissableBtn ? true : false}
                className={`w-full m-2  button rounded-2xl flex justify-center items-center p-1  text-bold text-lg bg-custom-orange text-white `}
              >
                <div className="flex gap-2 justify-center items-center">
                  <div> Creating</div>
                  <Image
                    src="/images/createEvent/LoadingBtnIcon.svg"
                    alt="loading btn"
                    width={40}
                    height={40}
                  />
                </div>
              </button>
            ) : (
              <button
                onClick={handlePostButton}
                disabled={isDissableBtn ? true : false}
                className={`w-full m-2  button rounded-2xl flex justify-center items-center p-1  text-bold text-lg ${
                  isDissableBtn
                    ? "cursor-not-allowed bg-gray-200 text-gray-400"
                    : "bg-custom-orange text-white"
                } `}
              >
                Post
              </button>
            )}
            {/*  */}
          </div>
          {/* <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-5 flex flex-col"></div> */}
        </div>
      </div>
    </>
  );
});
