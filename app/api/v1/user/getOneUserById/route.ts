import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function POST(req: Request) {
  try {
    connectMongoDB();

    const id = await req.json();

    const data = await User.findOne({ _id: id });

    if (!data) {
      return NextResponse.json("No User");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
