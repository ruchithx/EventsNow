import { NextResponse } from "next/server";
import Event from "@/models/eventModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function GET() {
  connectMongoDB();
  const event = await Event.find({});

  if (!Event) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json({ Event });
}
