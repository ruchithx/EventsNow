import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/eventModel";

export async function PUT(request: NextRequest) {
  try {
    const { eventId, userId } = await request.json();

    await connectMongoDB();

    const event = await Event.findOne({ _id: eventId });
    const user = [...event?.registerUser, userId];

    const data = await Event.findByIdAndUpdate(eventId, {
      $set: { registerUser: user },
    });

    if (!data) {
      return NextResponse.json("No event found");
    }

    return NextResponse.json({ message: "User added to event" });
  } catch (error) {
    return NextResponse.json("Error adding user to event");
  }
}
