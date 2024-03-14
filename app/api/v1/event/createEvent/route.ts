import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import Event from "../../../../../models/eventModel";

export async function POST(req: NextRequest) {
  const {
    eventName,
    selectedTab,
    eventLocation,
    eventStartDate,
    startTime,
    description,
    coverImage,
    dashboardImage,
    organizationId,
    eventEndDate,
    endTime,
  } = await req.json();

  connectMongoDB();
  const event = await Event.create({
    eventName,
    selectedTab,
    eventLocation,
    eventStartDate,
    startTime,
    description,
    coverImage,
    dashboardImage,
    organizationId,
    eventEndDate,
    endTime,
  });
  if (!event) {
    return NextResponse.json(
      { message: "Event Creation Failed" },
      { status: 400 }
    );
  }
  return NextResponse.json({ event }, { status: 201 });
}
