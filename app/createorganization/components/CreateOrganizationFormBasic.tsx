"use client";
import React, { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import { z } from "zod";
import Image from "next/image";

import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../services/FirebaseConfig";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);

import { error, success } from "../../../util/Toastify";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function CreateOrganizationFormBasic() {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [numberType, setNumberType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const isActive = false;
  const [postImage, setPostImage] = useState([File] as any);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateOrganization = z.object({
    fullName: z
      .string()
      .min(1, "Enter your full name ")
      .regex(/^[a-zA-Z ]*$/, {
        message: "Cannot enter number or symbol for name",
      }),
    numberType: z.string().min(1, { message: "select ID number type" }),
    number: z
      .string()
      .min(1, { message: "Enter your indentification card number  " }),
    companyName: z.string(),
    organizationName: z
      .string()
      .min(1, { message: "Enter your organization name" }),
    address: z.string().min(1, { message: "Enter your address" }),
    phoneNumber: z.string().min(1, { message: "Enter your phone number " }),
    email: z.string().email({ message: "Invalid email" }),
    postImageLink: z.string().min(1, { message: "Upload a cover image" }),
  });

  async function sendOrganizationData() {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`eventCover-${organizationName}`);
    const postImageLink = await fileRef
      .put(postImage)
      .then((snapshot) =>
        snapshot.ref.getDownloadURL().then((downloadURL) => downloadURL)
      );
    const data = {
      fullName,
      numberType,
      number,
      companyName,
      organizationName,
      address,
      phoneNumber,
      email,
      postImageLink,
    };

    const result = validateOrganization.safeParse(data);

    if (result.success) {
      const res = await fetch(
        "http://localhost:3000/api/v1/organization/createOrganization",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        error("There is an error for registration");
        return;
      }
      success("registration data sent succesfully");

      setFullName("");
      setNumberType("");
      setNumber("");
      setCompanyName("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      setOrganizationName("");
      setPreviewImage("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      const formattedError = result.error.format();

      if (formattedError.fullName?._errors) {
        error(String(formattedError.fullName?._errors));
      } else if (formattedError.numberType) {
        error(String(formattedError.numberType?._errors));
      } else if (formattedError.number) {
        error(String(formattedError.number?._errors));
      } else if (formattedError.companyName) {
        error(String(formattedError.companyName?._errors));
      } else if (formattedError.organizationName) {
        error(String(formattedError.organizationName?._errors));
      } else if (formattedError.address) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.phoneNumber) {
        error(String(formattedError.phoneNumber?._errors));
      } else if (formattedError.email) {
        error(String(formattedError.email._errors));
      } else if (formattedError.postImageLink) {
        error(String(formattedError.postImageLink._errors));
      } else error("an unknown error occur in validation process");
    }
  }

  return (
    <div className="  2xl:px-40 px-4 sm:px-20 justify-center">
      <div className="w-full px-10 lg:mx-0 lg:px-0 mt-8 mb-16 leading-none	 text-center text-[#455273] font-khand text-[32px] sm:text-[64px] font-semibold mx-2">
        Create organization account
      </div>
      <form
        className=" flex-column "
        action={sendOrganizationData}
        onSubmit={() => sendOrganizationData}
      >
        <input
          required
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Enter your full name  "
        ></input>
        <div className="flex gap-2">
          <Dropdown>
            <DropdownTrigger>
              <button className="  h-8 text-center justify-center  bg-transparent   px-4 text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4 pr-2">
                {numberType.length > 0 ? (
                  <span>{numberType} :-</span>
                ) : (
                  <span className="flex">
                    Type
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M18 9L12 15L6 9" stroke="#222222" />
                    </svg>
                  </span>
                )}
              </button>
            </DropdownTrigger>
            <DropdownMenu
              className="sm:ml-16 pl-4 pr-2 rounded-[12px] bg-[#D7CFC7]/90 text-[#455273]"
              aria-label="select identity number type"
              onAction={(key) => setNumberType(String(key))}
            >
              <DropdownItem key="NIC ">NIC number </DropdownItem>
              <DropdownItem key="Driving licence">
                Driving licence number{" "}
              </DropdownItem>
              <DropdownItem key="Passport">Passport number</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <input
            required
            type="text"
            name="fullName"
            id="fullName"
            value={number}
            disabled={numberType.length == 0}
            onChange={(e) => setNumber(e.target.value)}
            className="  w-full  block flex-1  bg-transparenttext-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
            placeholder={
              numberType.length > 0
                ? ` Enter  ${numberType} number`
                : "Select the identify card type "
            }
          ></input>
        </div>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Company Name (Optional) "
        ></input>
        <input
          required
          type="text"
          name="organizationName"
          id="organizationName"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Organization Name "
        ></input>
        <input
          required
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Address  "
        ></input>
        <input
          required
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Phone number "
        ></input>

        <input
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Enter email address "
        ></input>
        <div className=" border-2 w-auto border-solId rounded-xl   ">
          <label
            htmlFor="fileReader"
            className="   py-1.5 text-gray-400  sm:text-sm sm:leading-6 pl-4"
          >
            Enter cover photo for organization{" "}
          </label>
          <input
            required
            type="file"
            id="fileReader"
            ref={fileInputRef}
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
                setPostImage(e.target.files[0]);
              }
            }}
            className="block  text-sm text-slate-500
      file:mr-4 file:py-1.5 file:px-4
      file:rounded-[12px] file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-custom-orange
      hover:file:bg-gray-200 rounded-[12px]"
          />
          {previewImage.length > 0 && (
            <Image
              className=" p-4"
              src={previewImage}
              width={500}
              height={500}
              alt="organization cover image"
            />
          )}
        </div>

        <button
          type="submit"
          className="button flex text-center mt-10 mb-10 xl:mb-20 py-2 px-4 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono "
        >
          SEND TO APPROVAL
        </button>
      </form>
    </div>
  );
}
