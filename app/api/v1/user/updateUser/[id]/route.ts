import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongo/mongodb";
import mongoose from "mongoose";

export async function PUT(req: Request, { params }: any) {
  try {
    await connectMongoDB();
    const {
      firstName,
      lastName,
      birthday,
      mobileNumber,
      primaryEmail,
      address,
      gender,
      tshirtSize,
      meal,
    } = await req.json();
    const id = params.id;
    const data = {
      firstName,
      lastName,
      birthday,
      mobileNumber,
      primaryEmail,
      address,
      gender,
      tshirtSize,
      meal,
    };

    const newUser = await User.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return Response.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ message: "Internal Server Error" });
  }
}

export async function POST(req: Request) {
  try {
    connectMongoDB();
    const id = await req.json();

    const data = await User.findOne({ _id: id });

    if (!data) {
      return NextResponse.json("No User");
    }
    return NextResponse.json(data);
  } catch (error) {}
}
