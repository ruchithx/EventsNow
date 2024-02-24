import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function GET() {
  await connectMongoDB();
  const organization = await Organization.find();
  console.log("organization is", organization);
  if (!organization) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json({ organization });
}
