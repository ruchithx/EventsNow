import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import Event from "../../../../../models/eventModel";

export async function POST(req) {
  const {
    eventName,
    selectedTab,
    eventLocation,
    eventStartDate,
    startTime,
    duration,
    eventTimeZone,
    description,
    postImageLink,
    organizationId,
  } = await req.json();

  connectMongoDB();
  await Event.create({
    eventName,
    selectedTab,
    eventLocation,
    eventStartDate,
    startTime,
    duration,
    eventTimeZone,
    description,
    postImageLink,
    organizationId,
  });
  return NextResponse.json(
    { message: "Event Created Successfully" },
    { status: 201 }
  );
}
