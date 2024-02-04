"use client";
import React, { SetStateAction } from "react";
import { useState, useRef } from "react";
import Image from "next/image";

import { z } from "zod";
import { error, success } from "../../../util/Toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import firebase from "firebase/compat/app";
import { firebaseConfig} from "../../../services/FirebaseConfig";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);

export default function EventRegisterFormBasic() {
  const [eventName, setEventName] = useState("");
  const [selectedTab, setSelectedTab] = useState("Onsite");
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [eventTimeZone, setEventTimeZone] = useState("");
  const [description, setDescription] = useState("");
  const [postImage, setPostImage] = useState([File] as any);

  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateEvent = z.object({
    eventName: z.string().min(1, "Enter event name "),
    selectedTab: z.string().min(1, { message: "select the event type" }),
    eventStartDate: z.date(),
    startTime: z.string().min(1, { message: "Enter event start time " }),
    duration: z.string(),
    eventTimeZone: z.string().min(1, { message: "Enter event time zone" }),
    description: z.string(),
    postImage: z.any(),
    postImageLink: z.string().min(1, { message: "Enter event cover" }),
  });

  async function sendEventData() {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`eventCover-${eventName}`);
    const postImageLink = await fileRef
      .put(postImage)
      .then((snapshot) =>
        snapshot.ref.getDownloadURL().then((downloadURL) => downloadURL)
      );

   
    const data = {
      eventName,
      selectedTab,
      eventStartDate,
      startTime,
      duration,
      eventTimeZone,
      description,
      postImageLink,
    };

    const result = validateEvent.safeParse(data);
    if (result.success) {
      const res = await fetch("http://localhost:3000/api/v1/createEvent", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        error("There is an error for create event");
        return;
      }
      success("registration data sent succesfully");

      setEventStartDate(new Date());
      setStartTime("");
      setDuration("");
      setEventTimeZone("");
      setDescription("");
      setPreviewImage("");
      setEventName("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      error(result.error.errors[0].message);
    }
  }

  return (
    <div className=" lg:pb-10 2xl:px-40 - sm:px-20 justify-center">
      <div className=" mt-8 leading-none text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold mx-2">
        Create Event
      </div>
      <form
        action={sendEventData}
        onSubmit={() => sendEventData}
        className="px-8"
      >
        <label
          htmlFor="eventName"
          className=" mt-6 font-khand text-[#455273] flex text-basic font-normal m-0"
        >
          Event Name <div className="text-red-500 font-">*</div>
        </label>
        <input
          required
          type="text"
          name="eventName"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px] focus:outline-custom-orange "
        ></input>

        <div className=" mt-6 font-khand text-[#455273] flex text-basic font-normal m-0">
          Select the event type <div className="text-red-500 font-">*</div>
        </div>
        <div className="pb-4 pt-1 max-2xl:pr-32 2xl:w-96 ">
          <div className="border-l-2 border-b-2 border-r-2 border-solid rounded-xl pb-4">
            <div className="flex   rounded-[10px] place-content-center bg-[#F9EBE9] hover:bg-gray-200 mb-1">
              <button
                type="button"
                className={`w-full p-1 rounded-[10px] ${
                  selectedTab === "Onsite"
                    ? "bg-[#D47151] text-white"
                    : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
                }`}
                onClick={() => {
                  setSelectedTab("Onsite");
                }}
              >
                Onsite
              </button>
              <button
                type="button"
                className={`w-full p-1 rounded-[10px] ${
                  selectedTab === "Online"
                    ? "bg-[#D47151] text-white"
                    : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
                }`}
                onClick={() => {
                  setSelectedTab("Online");
                }}
              >
                Online
              </button>
            </div>
            <div className="pl-4 text-custom-orange font-khand">
              Select venue
            </div>
          </div>
        </div>
        <div className="mt-1 font-khand text-[#455273] flex text-basic font-normal m-0">
          Event date and time <div className="text-red-500 font-">*</div>
        </div>
        <div className="border-solid border-2 rounded-xl grid grid-cols-2 gap-2 px-2 pb-4">
          <div>
            <label
              htmlFor="eventDate"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Date <div className="text-red-500 font-">*</div>
            </label>

            <DatePicker
              className="my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl  xl:pr-20 lg:pr-10 md:pr-40 md:max-lg:mr-20 sm:max-md:mr-40 mr-24 lg:mr-0 focus:outline-custom-orange"
              selected={eventStartDate}
              onChange={(date: Date | null) =>
                setEventStartDate(date || new Date())
              }
            />
          </div>

          <div>
            <label
              htmlFor="eventTime"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Start time <div className="text-red-500 font-">*</div>
            </label>
            <input
              required
              type="text"
              name="eventTime"
              id="eventTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl focus:outline-custom-orange "
            ></input>
          </div>

          <div>
            <label
              htmlFor="duration"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Duration (h)
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl focus:outline-custom-orange "
            ></input>
          </div>

          <div>
            <label
              htmlFor="eventTimezone"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Timezone <div className="text-red-500 font-">*</div>
            </label>
            <input
              required
              type="text"
              name="eventTimezone"
              id="eventTimezone"
              value={eventTimeZone}
              onChange={(e) => setEventTimeZone(e.target.value)}
              className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl focus:outline-custom-orange "
            ></input>
          </div>
        </div>
        <label
          htmlFor="description"
          className="  font-khand text-[#455273] flex text-basic font-normal mt-5"
        >
          Description
        </label>

        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" mt-1 w-full h-24 bg-transparent  pl-1 text-gray-900focus:ring-0 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-xl "
          cols={30}
        ></textarea>
        <div className=" mt-4 pb-1 font-khand text-[#455273] flex text-basic font-normal m-0">
          Cover photo <div className="text-red-500 font-">*</div>
        </div>

        <div className=" border-2 w-auto border-solId rounded-xl  ">
          <input
            required
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={async (e) => {
              if (e.target.files && e.target.files.length > 0) {
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
                setPostImage(e.target.files[0]);
              }
            }}
            className="block  text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-custom-orange
      hover:file:bg-gray-200"
          />
          {previewImage.length > 0 && (
            <Image
              className=""
              src={previewImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          )}
        </div>

        <button
          type="submit"
          className="flex text-center mt-5 mb-10 p-2 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono "
        >
          CREATE EVENT
        </button>
      </form>
    </div>
  );
}
