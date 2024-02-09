import { NextResponse } from "next/server";

import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export const GET = async (req: Request) => {
  try {
    connectMongoDB();
    const org = await Organization.find({ isActive: false });
    return new NextResponse(JSON.stringify(org), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
