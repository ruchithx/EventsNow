import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongo/mongodb";
// const mongoose = require("mongoose");
// const User = mongoose.model("User");

import User from "./../../../../models/userModel";

async function POST(req: Request) {
  const { email, firstName } = await req.json();

  await connectMongoDB();
  await User.create({
    email,
    firstName,
  });
  return NextResponse.json({ message: "success" }, { status: 201 });
}
