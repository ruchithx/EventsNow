export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async () => {
  try {
    await connectMongoDB();
    const user = await User.find();
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
