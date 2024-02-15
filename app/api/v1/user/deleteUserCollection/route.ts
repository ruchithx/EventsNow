import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await User.deleteMany();
    return NextResponse.json({ message: "data delete success" });
  } catch (e) {
    console.log(e);
  }
}
