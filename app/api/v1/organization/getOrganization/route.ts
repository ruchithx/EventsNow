import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function POST(req: Request) {
  const id = await req.json();

  connectMongoDB();
  const organization = await Organization.findOne({ _id: id });

  if (!organization) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json({ organization });
}
