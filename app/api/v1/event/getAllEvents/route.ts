export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Event from "@/models/eventModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function GET() {
  connectMongoDB();
  const event = await Event.find();

  if (!event) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json(event);
}
