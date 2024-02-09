import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import User from "@/models/userModel";

export async function POST(req: Request) {
  try {
    connectMongoDB();

    const { email, name } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      await User.create({
        email,
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
      });
      return NextResponse.json({ user: "user create success" });
    } else {
      return NextResponse.json({ user });
    }
  } catch (e) {
    console.log(e);
  }
}
