import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";

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

    
const newWishListArray = getUserById.wishListId.filter((i: any) => i._id.toString() !== data.eventId.toString());


    console.log(newWishListArray, "newWishListArray");
    const updatedUser = await User.findByIdAndUpdate(data.userId, {
      $set: {
        wishListId: newWishListArray,
      },
    });

    if (!updatedUser) {
        return NextResponse.json({ message: "failed to add event to wishList " });
      }
      return NextResponse.json({ message: "event removed from wishList" }); 
    } catch (e) {
        return NextResponse.json("error of the server", { status: 500 });
      }}