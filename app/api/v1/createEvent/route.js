import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongo/mongodb";
import Event from "../../../../models/eventModel";

export async function POST(req){
    const {
        eventName,
      selectedTab,
      eventStartDate,
      startTime,
      duration,
      eventTimeZone,
      description,
      postImage

    }=await req.json();

    connectMongoDB();
    await Event.create({
        eventName,
      selectedTab,
      eventStartDate,
      startTime,
      duration,
      eventTimeZone,
      description,
      postImage,
});
return NextResponse.json({message:"Event Created Successfully"},{status:201});
}
