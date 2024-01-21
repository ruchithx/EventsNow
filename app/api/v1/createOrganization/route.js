import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongo/mongodb";

import Organization from "../../../../models/organizationModel";
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
    isApproved,
  } = await req.json();

   connectMongoDB();
  await Organization.create({
    fullName,
    numberType,
    number,
    companyName,
    organizationName,
    address,
    phoneNumber,
    email,
    isApproved,
  });
  return NextResponse.json({ message: "success" }, { status: 201 });
}
