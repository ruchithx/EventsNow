import React from "react";
import ProfileDetails from "./ProfileDetails";
import WishListCard from "./WishListCard";
export default function MyProfile() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 justify-start items-start gap-12">
      <div className="w-full ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[75px]">
          Wish List
        </div>
        <WishListCard
          EventName={"nadagama"}
          Location={"Colombo"}
          Time={"10.00"}
          Date={"02/04/2024"}
          Ratings={"4.5"}
          image={"././profile.jpg"}
          buttonDesc={"Remove from wishlist"}

        />
      </div>
    </div>
  );
}
