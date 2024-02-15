import connectMongoDB from "@/lib/mongo/mongodb";
import Event from "@/models/eventModel";
// import Organization from "@/models/organizationModel";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectMongoDB();
    await Event.deleteMany();
    return NextResponse.json({ message: "data delete success" });
  } catch (e) {
    console.log(e);
  }
}
