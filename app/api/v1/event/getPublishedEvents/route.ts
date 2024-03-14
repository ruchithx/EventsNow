export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import Event from "@/models/eventModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request) => {
  try {
    await connectMongoDB();

    const futureEvents = await Event.find({
      isPublished: true,
    });

    if (futureEvents.length === 0) {
      return new NextResponse(JSON.stringify([]), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(futureEvents), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data" + error, { status: 500 });
  }
};
