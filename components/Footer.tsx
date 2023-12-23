import React from "react";
import Image from "next/image";
interface footer {
  image1: String;
  image2: String;
  image3: String;
  image4: String;
  image5: String;
  imagelogo: String;
}
export default function Footer({
  image1,
  image2,
  image3,
  image4,
  image5,
  imagelogo,
}: footer) {
  return (
    <div className="flex sm:flex-row flex-col w-full bg-custom-brown pr-4 pl-4">
      <div className="flex flex-col  justify-evenly sm:w-7/12 w-full pt-6 pr-20 pl-4 mb-6 ">
        <div className="text-custom-orange flex justify-center font-bold text-5xl mb-8 sm:mb-2">
          Want to talk ?
        </div>
        <div className="relative sm:text-base text-black font-normal lg:ml-12 md:ml-4 sm:ml-0 sm:mb-2 mb-2 lg:pl-20 md:pl-8 sm:pl-0 lg:pr-20 md:pr-8 sm:pr-0">
          Fill out your information and an EventNow representative will reach
          out to you.
          <div className="flex sm:justify-center md:justify-start lg:justify-center justify-start">
            Have a simple question?
          </div>
        </div>

        <div className="flex sm:flex-row sm:justify-evenly justify-between text-center mt-2">
          <Image
            src={`/ReUsableComponentData/${image1}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-1 sm:mb-0 sm:mr-2 "
          />
          <Image
            src={`/ReUsableComponentData/${image2}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-2 sm:mb-0"
          />
          <Image
            src={`/ReUsableComponentData/${image3}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-2 sm:mb-0"
          />
          <Image
            src={`/ReUsableComponentData/${image4}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-2 sm:mb-0"
          />
          <Image
            src={`/ReUsableComponentData/${image5}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-2 sm:mb-0"
          />
        </div>
        <div className="flex justify-center  mt-2  sm:justify-center">
          <Image
            src={`/ReUsableComponentData/${imagelogo}`}
            alt="Picture of the button"
            width={60}
            height={60}
          />
        </div>

        <div className="text-black justify-center lg:text-sm text-xs flex flex-row sm:ml-4 md:ml-0 lg:ml-0 mt-2">
          <div className="mr-6">About</div>
          <div className="mr-6">Team</div>
          <div className="mr-6">Privacy policy</div>
          <div className="">Terms of use</div>
        </div>
      </div>
      <div className="sm:w-5/12 w-full p-2 justify-evenly ">
        <form>
          <div className="flex flex-wrap justify-between sm:mt-14 sm:flex-col md:flex-col lg:flex-row">
            <div className="w-1/2 mb-4 ">
              <div className="mb-2">First Name</div>
              <input
                type="text"
                className="rounded-lg p-1 bg-custom-lightorange border-solid border-2 border-gray-600 mr-2"
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Last Name</div>
              <input
                type="text"
                className="rounded-lg p-1 bg-custom-lightorange border-solid border-2 border-gray-600 outline-none "
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Email</div>
              <input
                type="text"
                className="rounded-lg p-1 bg-custom-lightorange border-solid border-2 border-gray-600 outline-none "
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Phone number</div>
              <input
                type="text"
                className="rounded-lg p-1 bg-custom-lightorange border-solid border-2 border-gray-600 outline-none "
              />
            </div>
            <div className=" mb-4">
              <div className="mb-2">What would you like to discuss</div>
              <textarea
                name="description"
                rows={5}
                cols={40}
                className="rounded-lg bg-custom-lightorange border-solid border-2 border-gray-600 outline-none w-full"
              />
            </div>
            <div className="flex sm:flex-row mb-4">
              <input type="checkbox" />
              <div className="text-black text-xs ml-2">
                By checking and clicking "Submit", you are agreeing to
                EventNow’s Privacy
              </div>
            </div>
            <button className="flex flex-start sm:w-1/2 w-full mb-4 ">
              <input
                type="submit"
                value="Submit"
                className="bg-custom-orange text-white sm:text-base text-xs sm:w-24  w-12 sm:p-2 p-1 rounded-2xl "
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
