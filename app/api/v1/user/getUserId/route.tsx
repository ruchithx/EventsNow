import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    connectMongoDB();
    const { email } = await req.json();
    const data = await User.findOne({ email });

    if (!data) {
      return NextResponse.json({ data: null });
    }

    return NextResponse.json({ id: data._id });
  } catch (e) {
    console.log(e);
  }
}
