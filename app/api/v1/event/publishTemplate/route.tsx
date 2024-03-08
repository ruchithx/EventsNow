import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/eventModel";

export async function PUT(request: NextRequest) {
  try {
    const { id, template } = await request.json();

    await connectMongoDB();

    const data = await Event.findByIdAndUpdate(
      id,
      {
        $set: { template, isPublished: true },
      },
      { new: true }
    );

    if (!data) {
      return NextResponse.json({ message: "No event found" });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Error updating organization image");
  }
}
