import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const id = params.id;

  const body = await request.json();

  await connectMongoDB();

  await Organization.findByIdAndUpdate(
    id,
    {
      $set: { ...body },
    },
    { new: true }
  );

  return NextResponse.json({ message: "success" });
}
