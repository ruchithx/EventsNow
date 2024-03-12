import connectMongoDB from "@/lib/mongo/mongodb";
import Event from "@/models/eventModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const id = await req.json();
  connectMongoDB();
  const event = await Event.findOne({ _id: id });

  if (!event) {
    return NextResponse.json({ message: "No event" });
  }
  return NextResponse.json(event);
}
