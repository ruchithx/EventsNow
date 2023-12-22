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
    <div className="flex sm:flex-row flex-col w-full bg-custom-lightorange pr-4 pl-4">
      <div className="flex flex-col  justify-between sm:w-7/12 w-full pt-6 pr-20 pl-4 mb-6 ">
        <div className="text-custom-orange flex justify-center font-bold sm:text-5xl mb-8 sm:mb-2">
          Want to talk ?
        </div>
        <div className="relative sm:text-base text-black font-normal sm:ml-12 sm:mb-6 mb-4">
          Fill out your information and an EventNow representative will reach
          out to you. Have a simple question?
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-between text-center">
          <Image
            src={`/ReUsableComponentData/${image1}`}
            alt="Picture of the button"
            width={30}
            height={30}
            className="mb-2 sm:mb-0 sm:mr-2 "
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
        <div className="flex justify-center sm:mt-6 sm:mb-6 sm:justify-center">
          <Image
            src={`/ReUsableComponentData/${imagelogo}`}
            alt="Picture of the button"
            width={60}
            height={60}
          />
        </div>

        <div className="text-black sm:justify-evenly font-sm flex flex-col sm:flex-row justify-center">
          <div>About</div>
          <div>Team</div>
          <div>Privacy policy</div>
          <div>Terms of use</div>
        </div>
      </div>
      <div className="sm:w-5/12 w-full p-2 justify-evenly">
        <form>
          <div className="flex flex-wrap justify-between sm:mt-14 sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full mb-4 ">
              <div className="mb-2">First Name</div>
              <input
                type="text"
                placeholder="name"
                className="rounded-lg p-1 border-white outline-none  mr-2"
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Last Name</div>
              <input
                type="text"
                placeholder="name"
                className="rounded-lg p-1 border-white outline-none "
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Email</div>
              <input
                type="text"
                placeholder="name"
                className="rounded-lg p-1 border-white outline-none "
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">Phone number</div>
              <input
                type="text"
                placeholder="name"
                className="rounded-lg p-1 border-white outline-none "
              />
            </div>
            <div className="sm:w-1/2 w-full mb-4">
              <div className="mb-2">What would you like to discuss</div>
              <textarea
                name="description"
                rows={5}
                cols={40}
                className="rounded-lg border-white outline-none w-full"
              />
              <div className="sm:w-1/2 w-full mb-4">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-custom-orange text-white sm:text-base text-xs sm:w-24  w-12 sm:p-2 p-1 rounded-2xl sm:mt-1"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
