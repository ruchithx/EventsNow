import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import Organization from "../../../../../models/organizationModel";
export async function POST(req) {
  const {
    fullName,
    numberType,
    number,
    companyName,
    organizationName,
    address,
    phoneNumber,
    email,
    postImageLink,
  } = await req.json();

  connectMongoDB();
  const res = await Organization.create({
    fullName,
    numberType,
    number,
    companyName,
    organizationName,
    address,
    phoneNumber,
    email,
    postImageLink,
    isActive: false,
  });

  if (!res) {
    return NextResponse.json(
      { message: "Failed to create organization" },
      { status: 500 }
    );
  }

  return NextResponse.json({ id: res._id }, { status: 201 });
}
