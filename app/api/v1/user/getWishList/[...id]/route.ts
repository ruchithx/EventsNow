export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;

  try {
    connectMongoDB();
    const eventDetails = await User.findOne({ _id: id }).populate("wishListId");

    const data = eventDetails.wishListId.map((user: any) => user);

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
