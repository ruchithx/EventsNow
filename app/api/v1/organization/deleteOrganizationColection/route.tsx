import connectMongoDB from "@/lib/mongo/mongodb";
import Organization from "@/models/organizationModel";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    await Organization.deleteMany();
    return NextResponse.json({ message: "data delete success" });
  } catch (e) {
    console.log(e);
  }
}
