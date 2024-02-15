import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Event from "@/models/eventModel";

export async function POST(req: Request) {
  const id = await req.json();

  connectMongoDB();
  const organization = await Event.find({ organizationId: id });

  if (!organization) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json({ organization });
}
