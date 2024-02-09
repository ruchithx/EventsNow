import { NextResponse } from "next/server";
import connectMongoDB from "./../../../lib/mongo/mongodb";
import User from "@/models/userModel";

export const GET = async (req) => {
  try {
    connectMongoDB();
    const user = await User.find();
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
