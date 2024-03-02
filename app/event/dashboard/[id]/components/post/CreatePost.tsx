import Image from "next/image";
import React, { memo } from "react";

import { IoClose } from "react-icons/io5";
import { CldUploadWidget } from "next-cloudinary";

export default memo(function GivenPermission() {
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
        <div className="border-[1px] divide-x-2 mb-10  rounded-md bg-white  w-2/5 relative top-[25%] left-[25%]">
          <div className="mr-4 grid grid-cols-12 p-3 w-full border-b-[1px]  border-slate-200">
            <div className="text-xl text-center col-span-11	font-bold		">
              Create Post
            </div>
            <div className="bg-slate-300 w-8 col-span-1 rounded-full p-2 flex justify-center items-center">
              <IoClose />
            </div>
          </div>

          <div className="p-5">
            <div className="flex gap-3 justify-start items-start">
              <Image
                src={`/images/reusableComponents/profilpic.jpg`}
                alt="profile picture"
                width={40}
                height={40}
                className="rounded-full mt-1"
              />
              <div>
                <div className="text-black text-lg font-medium	 font-Inter">
                  kasun silva
                </div>
              </div>
            </div>
            <div className=" mt-5 font-Inter ">
              <input
                type="text "
                className=" outline-none text-2xl	w-full text-gray-600"
                placeholder="What's on your mind?"
              />
            </div>
          </div>
          <button className="w-full">
            <div className="border-[2px] items-center full m-2 rounded-2xl font-medium p-3 flex justify-between ">
              Add to your post
              <Image
                src={`/images/event/post/add-post-btn.png`}
                alt="profile picture"
                width={20}
                height={20}
              />
            </div>
          </button>
          <CldUploadWidget
            uploadPreset="organization"
            onOpen={() => {
              console.log("isPhotographer");
            }}
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const uploadedResult = results.info as CloudinaryUploadWidgetInfo;
              const profileImageURL = {
                image: uploadedResult.secure_url,
              };
              setProfileImage(profileImageURL.image);
            }}
            options={{
              tags: ["profile image"],
              // publicId: `${organizationName}/${Date.now()}`,
              // publicId: "b2c",

              sources: ["local"],
              googleApiKey: "<image_search_google_api_key>",
              showAdvancedOptions: false,
              cropping: true,
              multiple: false,
              showSkipCropButton: false,
              croppingAspectRatio: 0.75,
              croppingDefaultSelectionRatio: 0.75,
              croppingShowDimensions: true,
              croppingCoordinatesMode: "custom",
              // maxImageHeight: 100,
              // croppingValidateDimensions: true,
              defaultSource: "local",
              resourceType: "image",
              folder: "organization",

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
            {({ open }) => {
              return (
                // <Button
                //   variant="default"
                //   className="rounded-full mt-5 ml-3"
                //   onClick={() => {
                //     open();
                //   }}
                // >
                //   <Camera />
                // </Button>
                <button
                  onClick={() => {
                    open();
                  }}
                >
                  click it
                </button>
              );
            }}
          </CldUploadWidget>

          <button className="w-full rounded-2xl flex justify-center items-center p-1 bg-custom-orange text-white text-bold text-lg ">
            Post
          </button>
          {/* <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-5 flex flex-col"></div> */}
        </div>
      </div>
    </>
  );
});
