import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectMongoDB();
    const organization = await Organization.find();
    console.log("organization is", organization);
    if (!organization) {
      return NextResponse.json({ message: "No organization" });
    }

    return NextResponse.json({ organization });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
}
