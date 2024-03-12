import connectMongoDB from "@/lib/mongo/mongodb";
import Organization from "@/models/organizationModel";
import Permission from "@/models/permissionModel";
import User from "@/models/userModel";

import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    await connectMongoDB();
    // await Permission.deleteMany();
    return NextResponse.json({ message: "data delete success" });
  } catch (e) {
    console.log(e);
  }
}
