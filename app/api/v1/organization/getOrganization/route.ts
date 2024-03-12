import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";

export async function POST(req: Request) {
  try {
    const id = await req.json();

    connectMongoDB();
    const organization = await Organization.findOne({ _id: id });

    if (!organization) {
      return NextResponse.json({ message: "No organization" }, { status: 404 });
    }

    return NextResponse.json({ organization });
  } catch (error: any) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return NextResponse.json(
        { message: "Invalid organization ID" },
        { status: 400 }
      );
    }

    // For other errors, return a generic error response
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
