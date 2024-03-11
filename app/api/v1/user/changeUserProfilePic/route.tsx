import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

export async function PUT(request: NextRequest) {
  try {
    const { id, image } = await request.json();

    await connectMongoDB();

    const data = await User.findByIdAndUpdate(id, {
      $set: { image: image },
    });

    if (!data) {
      return NextResponse.json("No user found");
    }



    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Error updating user image");
  }
}
