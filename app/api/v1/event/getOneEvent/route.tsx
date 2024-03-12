import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Event from "@/models/eventModel";

export async function POST(req: Request) {
  const id = await req.json();
  // const objectId = new mongoose.Types.ObjectId(id);
  await connectMongoDB();
  const event = await Event.findOne({ _id: id.id });

  if (!event) {
    return NextResponse.json({ message: "No event" });
  }

  return NextResponse.json(event);
}
