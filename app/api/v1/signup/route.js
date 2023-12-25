import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongo/mongodb";
const mongoose = require("mongoose");
const User = mongoose.model("User");

// const User = require("./../../../../models/userModel");

export async function GET() {
  await connectMongoDB();
  const data = await User.find();
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
  console.log(
    email,
    firstName,
    lastName,
    password,
    phone_number,
    passwordConfirm
  );
  await connectMongoDB();
  await User.create({
    email,
    firstName,
    lastName,
    phone_number,
    password,
    passwordConfirm,
  });
  return NextResponse.json({ message: "success" }, { status: 201 });
}
