import React from "react";
import Image from "next/image";
import PostTab from "./PostTab";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { error, success } from "@/util/Toastify";
import { getSession } from "next-auth/react";
interface SmallView {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
}
interface customUser {
  email: string;
  name: string;
  image: string;
  _id: string;
}

export default function SmallView({
  EventName,
  Location,
  Time,
  Date,
}: SmallView) {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [registeredUserList, setRegisteredUserList] = useState<string[] | null>(
    null
  );

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const [isAddWishList, setIsAddWishList] = useState<boolean>(false);
  const id = useParams<{ id: string }>().id;

  async function userRegistrationForEventHandler() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/registerUserForEvent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, eventId: id }),
      }
    );
    if (!res.ok) {
      error("Error registration for event");
      return;
    }

    success("registered for event successfully");
    setIsRegistered(true);
  }

  async function removeUserFromRegisteredEvent() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/removeRegisteredUserFromEvent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, eventId: id }),
      }
    );
    if (!res.ok) {
      error("Error registration for event");
      return;
    }

    success("remove user from event successfully");
    setIsRegistered(false);
  }

  useEffect(() => {
    const getUser = async () => {
      const session = await getSession();
      const user = session?.user as customUser;
      setUserId(user._id);
      setEmail(user.email);
    };
    getUser();
  }, [id]);

  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getEvent`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(id),
        }
      );
      const data = await res.json();
      setRegisteredUserList(data.registerUser);

      const register = data.registerUser?.includes(userId || "");
      setIsRegistered(register);
    };
    getEvent();
  }, [id, userId]);

  //get user data
  useEffect(() => {
    const getUser = async () => {
      if (userId) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getWishlistByIdForHost`,
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userId),
          }
        );
        const data = await res.json();

        const wishlistStatus = data?.includes(id || "");
        setIsAddWishList(wishlistStatus);
      }
    };
    getUser();
  }, [id, userId, isAddWishList]);

  // add to wishlist

  async function addTowishlistHandler() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/addToWishList`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, eventId: id }),
      }
    );
    if (!res.ok) {
      error("Error adding to wishlist");
      return;
    }

    success("Event added to the wishlist ");
    setIsAddWishList(true);
  }

  //remove from wishlist

  async function removeFromWishlistHandler() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/removeFromWishList`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, eventId: id }),
      }
    );
    if (!res.ok) {
      error("Error removing from wishlist");
      return;
    }

    success("Event removed from the wishlist ");
    setIsAddWishList(false);
  }

  return (
    <div>
      <div className=' text-center text-[#454545cc] text-4xl font-normal pt-8 font-["Roboto"]'>
        {EventName}
      </div>

      <div className="text-left mx-12 text-[#455273] text-2xl font-bold mt-8 ">
        QUICK FACTS
      </div>

      <div className="grid grid-rows-3 gap-6  text-left mt-8 mx-16">
        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Pin_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl  align-top -mt-8 font-['Roboto'] ml-12">
            {Location}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Date_org.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl font-['Roboto'] align-top -mt-8 ml-12">
            {Date}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Clock_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl  font-['Roboto'] align-top -mt-8 ml-12">
            {Time}
          </div>
        </div>

        <div className="flex xl:pt-12 md:pt-14 items-center ">
          {isRegistered ? (
            <button
              onClick={removeUserFromRegisteredEvent}
              className="flex xl:w-36 w-32 xl:h-16 h-12 bg-custom-orange rounded-l-2xl items-center xl:px-4"
            >
              <div className=" w-10 h-10 mt-2 md:ml-4 xl:ml-0">
                <Image
                  src="/images/Event/HostPage/Paper_fill.svg"
                  alt="print"
                  width={28}
                  height={28}
                />
              </div>
              <div className="font-medium xl:text-lg text-md text-white text-left leading-tight xl:ml-4 md:ml-2">
                Remove Registration
              </div>
            </button>
          ) : (
            <button
              onClick={userRegistrationForEventHandler}
              className="flex xl:w-36 w-32 xl:h-16 h-12  bg-custom-orange rounded-l-2xl items-center xl:px-4"
            >
              <div className=" w-10 h-10 mt-2 md:ml-4 xl:ml-0">
                <Image
                  src="/images/event/HostPage/Paper_fill.svg"
                  alt="print"
                  width={28}
                  height={28}
                />
              </div>
              <div className="font-medium xl:text-lg text-md text-white text-left leading-tight xl:ml-4 md:ml-2 ">
                Register event
              </div>
            </button>
          )}

          {isAddWishList ? (
            <button
              onClick={removeFromWishlistHandler}
              className="flex xl:w-36 w-32 xl:h-16 h-12 bg-[#455273] rounded-r-2xl items-center xl:px-4"
            >
              <div className=" w-10 h-10 mt-2 md:ml-4 xl:ml-0">
                <Image
                  src="/images/event/HostPage/Paper_fill.svg"
                  alt="print"
                  width={28}
                  height={28}
                />
              </div>
              <div className="font-medium xl:text-lg text-md text-white text-left leading-tight xl:ml-4 md:ml-2">
                Remove Wish List
              </div>
            </button>
          ) : (
            <button
              onClick={addTowishlistHandler}
              className="flex xl:w-36 w-32 xl:h-16 h-12 bg-[#455273] rounded-r-2xl items-center xl:px-4"
            >
              <div className=" w-10 h-10 mt-2 md:ml-4 xl:ml-0">
                <Image
                  src="/images/event/HostPage/Paper_fill.svg"
                  alt="print"
                  width={28}
                  height={28}
                />
              </div>
              <div className="font-medium xl:text-lg text-md text-white text-left leading-tight xl:ml-4 md:ml-2">
                Add to Wish List
              </div>
            </button>
          )}
        </div>

        <button className="flex xl:w-72 w-64 xl:h-16 h-12  bg-[#D47151] rounded-2xl items-center xl:px-4  ">
          <div className=" w-10 h-8 mt-2 ml-2 xl:ml-0">
            <Image
              src="/images/event/HostPage/Check_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="font-medium xl:text-lg text-md text-white text-left leading-tight ml-4">
            Buy tickets
          </div>
        </button>
      </div>

      <div className="text-center text-[#455273] text-2xl font-bold mt-12 ">
        COMMUNITY
      </div>

      <div className="flex items-center justify-center">
        <PostTab />
      </div>
    </div>
  );
}
