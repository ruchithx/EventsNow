import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await User.deleteMany();
    if (!res) {
      return NextResponse.json({ message: "data not found" });
    }
    return NextResponse.json({ message: "data delete success" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "error of delete user collection" });
  }
}
