export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";

export const GET = async () => {
  try {
    connectMongoDB();
    const userPermission = await Permission.find().populate("userId");

    return new NextResponse(JSON.stringify(userPermission), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
