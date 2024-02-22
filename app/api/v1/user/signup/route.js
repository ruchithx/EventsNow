import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";

import User from "../../../../../models/userModel";

export async function GET() {
  await connectMongoDB();
  const data = await User.find();
  if (!data)
    return Response.json({ message: "there is a error form getting data" });
  return Response.json({ data });
}

export async function POST(req) {
  const {
    email,
    firstName,
    lastName,
    password,
    phone_number,
    passwordConfirm,
  } = await req.json();

  const db = await connectMongoDB();
  const res = await User.create({
    email,
    firstName,
    lastName,
    phone_number,
    password,
    passwordConfirm,
    image:
      "https://firebasestorage.googleapis.com/v0/b/eventsnow-fb0ee.appspot.com/o/eventCover-Flashback?alt=media&token=6f6021ae-dd93-4d5c-931c-9dc50ae5dd4f",
  });

  if (!res) return NextResponse.json({ message: "there is a error" });

  return NextResponse.json({ message: "success" }, { status: 201 });
}
