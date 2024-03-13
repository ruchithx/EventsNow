import { NextResponse } from "next/server";

import Event from "@/models/eventModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request) => {
  try {
    connectMongoDB();

    const futureEvents = await Event.find({
      isPublished: true,
    });

    return new NextResponse(JSON.stringify(futureEvents), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data" + error, { status: 500 });
  }
};
