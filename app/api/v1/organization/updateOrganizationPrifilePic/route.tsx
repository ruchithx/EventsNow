import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { id, image } = await request.json();

    await connectMongoDB();

    const data = await Organization.findByIdAndUpdate(id, {
      $set: { image: image },
    });

    if (!data) {
      return NextResponse.json("No organization found");
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Error updating organization image");
  }
}
