import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function POST(req: Request) {
  try {
    connectMongoDB();

    const id = await req.json();

    const data = await User.findOne({ _id: id });
    console.log("hiiiiiiii");

    if (!data) {
      return NextResponse.json("No User");
    }
    console.log("hi");
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
