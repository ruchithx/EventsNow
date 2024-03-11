export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    await connectMongoDB();
    const organization = await Organization.find();

    if (!organization || organization.length === 0) {
      return NextResponse.json({ message: "No organization" });
    }

    return NextResponse.json({ organization });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
}
