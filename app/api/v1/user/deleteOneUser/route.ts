import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB(); // Await the connection establishment

    const { email } = await req.json();

    // Assuming User is a Mongoose model, use deleteOne() method
    const data = await User.deleteOne({ email });

    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
    return NextResponse.error(); // Return an error response
  }
}
