import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongo/mongodb";
import Organization from "@/models/organizationModel";

export const GET = async (req) => {
  try {
    connectMongoDB();
    const org = await Organization.find({ isActive: true });
    return new NextResponse(JSON.stringify(org), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
