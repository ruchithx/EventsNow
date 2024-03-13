"use client";
import React, { SetStateAction, use } from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { z } from "zod";
// import { error, success } from "../../../util/Toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { firebaseConfig } from "../../../services/FirebaseConfig";

import { error, success } from "@/util/Toastify";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function EventRegisterFormBasic() {
  const [eventName, setEventName] = useState("");
  const [selectedTab, setSelectedTab] = useState("Onsite");
  const [eventLocation, setEventLocation] = useState("");
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState("");
  const [eventTimeZone, setEventTimeZone] = useState("");
  const [description, setDescription] = useState("");
  const [postImage, setPostImage] = useState([File] as any);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const router = useRouter();

  const [coverImage, setcoverImage] = useState("");
  const [dashboardImage, setdashboardImage] = useState("");

  const validateEvent = z.object({
    eventName: z.string().min(1, "Enter event name "),
    selectedTab: z.string().min(1, { message: "select the event type" }),
    eventLocation: z.string().min(1, { message: " Enter event location " }),
    eventStartDate: z.date(),
    eventEndDate: z.date(),
    startTime: z.string().min(1, { message: "Enter event start time " }),
    endTime: z.string().min(1, { message: "Enter event start time " }),
    description: z.string(),
    coverImage: z.string().min(1, { message: "Upload event cover photo " }),
    dashboardImage: z
      .string()
      .min(1, { message: "Upload event dashboard photo " }),
  });

  async function sendEventData(e: any) {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      eventName,
      selectedTab,
      eventLocation,
      eventStartDate,
      startTime,
      endTime,
      eventEndDate,
      description,
      coverImage,
      dashboardImage,
      organizationId: params.id,
    };

    const result = validateEvent.safeParse(data);

    if (result.success) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/event/createEvent`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        error("There is an error for create event");
        setIsSubmitting(false);
        return;
      }
      const { event } = await res.json();

      router.push(`/event/dashboard/${event._id}`);

      success("event created succesfully");

      setEventStartDate(new Date());
      setStartTime("");
      setDuration("");
      setEventTimeZone("");
      setDescription("");
      setPreviewImage("");
      setEventName("");
    } else {
      error(result.error.errors[0].message);
    }
    setIsSubmitting(false);
  }

  return (
    <div className=" lg:pb-10 2xl:px-40 - sm:px-20 justify-center">
      <div className=" mt-8 leading-none text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold mx-2">
        Create Event
      </div>
      <form method="POST" className="px-8">
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
            <div className="px-4 text-custom-orange font-khand">
              <div className="flex">
                {selectedTab == "Onsite"
                  ? "Enter event venue"
                  : "Enter event platform"}
                <div className="text-red-500 font-">*</div>
              </div>
              <input
                required
                type="text"
                name="eventLocation"
                id="eventLocation"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px] focus:outline-custom-orange "
              ></input>
            </div>
          </div>
        </div>
        <div className="mt-1 font-khand text-[#455273] flex text-basic font-normal m-0">
          Event date and time <div className="text-red-500 font-">*</div>
        </div>
        <div className="border-solid border-2 rounded-xl grid grid-cols-2 gap-2 px-2 py-2 pb-4">
          <div>
            <label
              htmlFor="eventDate"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Start Date <div className="text-red-500 font-">*</div>
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
              htmlFor="eventDate"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              End Date <div className="text-red-500 font-">*</div>
            </label>

            <DatePicker
              className="my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl  xl:pr-20 lg:pr-10 md:pr-40 md:max-lg:mr-20 sm:max-md:mr-40 mr-24 lg:mr-0 focus:outline-custom-orange"
              selected={eventEndDate}
              onChange={(date: Date | null) =>
                setEventEndDate(date || new Date())
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
              htmlFor="eventTime"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              End time <div className="text-red-500 font-">*</div>
            </label>
            <input
              required
              type="text"
              name="eventTime"
              id="eventTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
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
        <div className="mt-4 pb-1 font-khand text-[#455273] flex text-basic font-normal m-0">
          Event cover photo <div className="text-red-500 font-">*</div>
        </div>

        <div>
          <CldUploadWidget
            uploadPreset="events"
            onOpen={() => {
              console.log("isPhotographer");
            }}
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const uploadedResult = results.info as CloudinaryUploadWidgetInfo;
              const profileImageURL = {
                image: uploadedResult.secure_url,
              };
              setcoverImage(profileImageURL.image);
            }}
            options={{
              tags: ["events image"],
              // publicId: `${organizationName}/${Date.now()}`,
              // publicId: "b2c",

              sources: ["local"],
              googleApiKey: "<image_search_google_api_key>",
              showAdvancedOptions: false,
              cropping: true,
              multiple: false,
              showSkipCropButton: false,
              croppingAspectRatio: 1.61,
              croppingDefaultSelectionRatio: 1.61,
              croppingShowDimensions: true,
              croppingCoordinatesMode: "custom",
              // maxImageHeight: 100,
              // croppingValidateDimensions: true,
              defaultSource: "local",
              resourceType: "image",
              folder: "events",

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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  <div className="p-1 text-white font-semibold flex items-center justify-center gap-2 bg-slate-400 rounded-2xl">
                    <FaCloudUploadAlt />
                    upload event cover image
                  </div>
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        {coverImage.length > 0 && (
          <div className=" mt-5 border-2 w-auto border-solId rounded-xl   ">
            <Image
              className=" p-4"
              src={coverImage}
              width={500}
              height={500}
              alt="event cover image"
            />
          </div>
        )}

        <div className=" mt-4 pb-1 font-khand text-[#455273] flex text-basic font-normal m-0">
          Event dashboard photo <div className="text-red-500 font-">*</div>
        </div>

        <div>
          <CldUploadWidget
            uploadPreset="events"
            onOpen={() => {
              console.log("isPhotographer");
            }}
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const uploadedResult = results.info as CloudinaryUploadWidgetInfo;
              const profileImageURL = {
                image: uploadedResult.secure_url,
              };
              setdashboardImage(profileImageURL.image);
            }}
            options={{
              tags: ["events image"],
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
              folder: "events",

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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  <div className="p-1 text-white font-semibold flex items-center justify-center gap-2 bg-slate-400 rounded-2xl">
                    <FaCloudUploadAlt />
                    upload image
                  </div>
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        {dashboardImage.length > 0 && (
          <div className=" mt-5 border-2 w-auto border-solId rounded-xl   ">
            <Image
              className=" p-4"
              src={dashboardImage}
              width={500}
              height={500}
              alt="event cover image"
            />
          </div>
        )}

        {isSubmitting ? (
          <button className="button flex text-center mt-10 mb-10 xl:mb-20  px-2 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono ">
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
            onClick={sendEventData}
            className="button flex text-center mt-10 mb-10 xl:mb-20 py-2 px-4 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono "
          >
            CREATE EVENT
          </button>
        )}
      </form>
    </div>
  );
}
