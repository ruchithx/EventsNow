import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function GET() {
  try {
    await connectMongoDB();
    const organization = await Organization.find();
    console.log("organization is", organization);
    if (!organization) {
      return NextResponse.json({ message: "No organization" });
    }

    return NextResponse.json({ organization });
  } catch (e) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
}
