import { NextResponse } from "next/server";

import Event from "@/models/eventModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request) => {
  try {
    await connectMongoDB();

    const outdated = await Event.find({
      isPublished: false,
    });
    console.log("outdated", outdated);

    if (!outdated) {
      return new NextResponse(JSON.stringify("no outDated event"), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(outdated), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data" + error, { status: 500 });
  }
};
