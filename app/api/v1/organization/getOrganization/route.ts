import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";

export async function POST(req: Request) {
  const id = await req.json();
  console.log(id);

  const organization = await Organization.findOne({ _id: id });

  if (!organization) {
    return NextResponse.json({ message: "No organization" });
  }

  return NextResponse.json({ organization });
}
