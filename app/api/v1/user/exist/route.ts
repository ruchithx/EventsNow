import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import User from "@/models/userModel";

export async function POST(req: Request) {
  try {
    connectMongoDB();

    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ user: null });
    } else {
      return NextResponse.json({ user });
    }
  } catch (e) {
    console.log(e);
  }
}
