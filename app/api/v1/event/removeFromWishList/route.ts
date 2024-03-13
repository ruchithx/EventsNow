import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const data = await request.json();
        await connectMongoDB();
        const getUserById = await User.findOne({ _id: data.userId });
    if (!getUserById) {
      console.log("User not found");
      return NextResponse.json({ message: "User not found" });
    }

    const newWishListArray = [...getUserById.wishListId, data.eventId];
    console.log(newWishListArray, "newWishListArray");
    const updatedUser = await User.findByIdAndUpdate(data.userId, {
      $set: {
        wishListId: newWishListArray,
      },
    });

    if (!updatedUser) {
        return NextResponse.json({ message: "failed to add event to wishList " });
      }
    } catch (e) {
        return NextResponse.json("error of the server", { status: 500 });
      }}