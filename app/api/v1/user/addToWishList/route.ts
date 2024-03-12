import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    connectMongoDB();
    const { id, wishListId } = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { wishListId: wishListId } },
      { new: true }
    );

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error updating wish list:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
