import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;

  try {
    console.log("Testttt");
    console.log(id);
    connectMongoDB();
    const eventDetails = await User.findOne({ _id: id }).populate("wishListId");
    console.log(eventDetails);
    const data = eventDetails.wishListId.map((user: any) => user);
    console.log("weeeeee");
    console.log(data);

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
