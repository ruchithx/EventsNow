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
  setGenaralUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default memo(function GenaralUpdate({ setGenaralUpdate }: Props) {
  const params = useParams();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isDissableBtn, setIsDissableBtn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostButton = async () => {
    setIsSubmitting(true);
    const res = await fetch(`/api/v1/event/sendGenaralUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: params.id,
        subject: subject,
        message: message,
      }),
    });
    if (!res.ok) {
      error("Error sending email");
      setIsSubmitting(false);
      return;
    }
    const returnMessage = await res.json();

    if (returnMessage.message === "No users registered for the event") {
      error("No users registered for the event");
      setIsSubmitting(false);
      return;
    }

    if (returnMessage.message === "Email sent successfully") {
      success("Email sent successfully");
      setIsSubmitting(false);
      setMessage("");
      setSubject("");
      setGenaralUpdate(false);
      return;
    }
  };

  function handleSubject(e: any) {
    setSubject(e.target.value);
    if (e.target.value.length > 0 && message.length > 0) {
      setIsDissableBtn(false);
    } else {
      setIsDissableBtn(true);
    }
  }

  function handleMessage(e: any) {
    setMessage(e.target.value);
    if (e.target.value.length > 0 && subject.length > 0) {
      setIsDissableBtn(false);
    } else {
      setIsDissableBtn(true);
    }
  }

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
              Send Email
            </div>
            <button
              onClick={() => setGenaralUpdate(false)}
              className="bg-slate-300 hover:bg-slate-400  w-8 col-span-1 rounded-full p-2 flex justify-center items-center"
            >
              <IoClose />
            </button>
          </div>

          <div className="p-5">
            <div className="font-semibold	text-lg">Subject</div>
            <input
              value={subject}
              onChange={(e) => handleSubject(e)}
              type="text"
              className="w-full border-2 rounded-xl mt-2 p-1 focus:border-slate-600 focus:outline-none"
            />
          </div>

          <div className="px-5">
            <div className="font-semibold	text-lg">Message</div>
            <textarea
              value={message}
              onChange={(e) => handleMessage(e)}
              className="w-full border-2 rounded-xl mt-2 p-1 focus:border-slate-600 focus:outline-none"
            />
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

          <div className="w-full flex justify-center items-center">
            {isSubmitting ? (
              <button
                onClick={handlePostButton}
                disabled={isDissableBtn ? true : false}
                className={`w-full m-2  button rounded-2xl flex justify-center items-center p-1  text-bold text-lg bg-custom-orange text-white `}
              >
                <div className="flex gap-2 justify-center items-center">
                  <div> Sending</div>
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
                Send
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
