import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { ca } from "date-fns/locale";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.json();

    await connectMongoDB();
    console.log(data, "data");

    const getUserById = await User.findOne({ _id: data.userId });
    if (!getUserById) {
      console.log("User not found");
      return NextResponse.json({ message: "User not found" });
    }
    console.log(getUserById, "getUserById");
    console.log(getUserById.wishListId, "getUserById.wishList");

    const newWishListArray = [...getUserById.wishListId, data.eventId];
    console.log(newWishListArray, "newWishListArray");
    const updatedUser = await User.findByIdAndUpdate(data.userId, {
      $set: {
        wishListId: newWishListArray,
      },
    });

    console.log(updatedUser.wishListId, "updatedUser");
    if (!updatedUser) {
      return NextResponse.json({ message: "failed to add event to wishList " });
    }
    return NextResponse.json("Event added to wishList successfully");
  } catch (e) {
    return NextResponse.json("error of the server", { status: 500 });
  }
}
