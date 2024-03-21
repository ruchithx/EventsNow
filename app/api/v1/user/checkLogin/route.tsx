import { comparePassword } from "@/lib/auth/auth";
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB();
    const { email, password } = await req.json();

    const data = await User.findOne({ email }).select("+password");

    if (!data) {
      return NextResponse.json({ data: "Invalid user name or password" });
    }
   

    const checkPassword = await comparePassword(password, data.password);

    if (!checkPassword) {
      return NextResponse.json({ data: "Invalid user name or password" });
    }

    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
  }
}
