"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
    companyName: z.string().min(1, { message: "Enter your company name" }),
    address: z.string().min(1, { message: "Enter your address" }),
    phoneNumber: z.string().min(1, { message: "Enter your phone number " }),
    email: z.string().email({ message: "Invalid email" }),
  });

  async function sendOrganizationData() {
    const data = {
      fullName,
      numberType,
      number,
      companyName,
      address,
      phoneNumber,
      email,
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
      const id = await res.json();
      success("registration data sent succesfully");

      setFullName("");
      setNumberType("");
      setNumber("");
      setCompanyName("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      router.push(`/organization/dashboard/${id.id}`, { scroll: false });
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
      } else if (formattedError.address) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.phoneNumber) {
        error(String(formattedError.phoneNumber?._errors));
      } else if (formattedError.email) {
        error(String(formattedError.email._errors));
      } else error("an unknown error occur in validation process");
    }
  }

  return (
    <div className="  2xl:px-40 px-4 sm:px-20 justify-center">
      <div className="w-full px-10 lg:mx-0 lg:px-0 mt-8 mb-16 leading-none	 text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold mx-2">
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
                : "Select the identify card type that you have"
            }
          ></input>
        </div>
        <input
          required
          type="text"
          name="companyName"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          placeholder="Company Name  "
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

        <button
          type="submit"
          className="flex button text-center mt-10 mb-10 xl:mb-20 py-2 px-4 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono "
        >
          SEND TO APPROVAL
        </button>
      </form>
    </div>
  );
}
