import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.json();

    await connectMongoDB();

    const getUserById = await User.findOne({ _id: data });
    if (!getUserById) {
      console.log("User not found");
      return NextResponse.json({ message: "User not found" });
    }
    return NextResponse.json(getUserById.wishListId, { status: 200 });
  } catch (e) {
    return NextResponse.json("error of the server", { status: 500 });
  }
}
