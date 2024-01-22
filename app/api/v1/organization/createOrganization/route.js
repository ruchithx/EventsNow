import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import Organization from "../../../../../models/organizationModel";
export async function POST(req) {
  const {
    fullName,
    numberType,
    number,
    companyName,
    address,
    phoneNumber,
    email,
  } = await req.json();

  connectMongoDB();
  const res = await Organization.create({
    fullName,
    numberType,
    number,
    companyName,
    address,
    phoneNumber,
    email,
    isActive: false,
  });

  return NextResponse.json({ id: res._id }, { status: 201 });
}
