import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import Organization from "@/models/organizationModel";

export async function POST(req: Request) {
  try {
    connectMongoDB();

    const { email } = await req.json();

    const organization = await Organization.findOne({ email });

    if (!organization) {
      return;
    }

    return NextResponse.json({ organization });
  } catch (e) {
    console.log(e);
  }
}
