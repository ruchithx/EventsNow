import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Event from "@/models/eventModel";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const id = await req.json();
  
  const objectId = new mongoose.Types.ObjectId(id);
  await connectMongoDB();
  const organization = await Event.find({ organizationId: objectId });

  if (!organization) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json(organization);
}
