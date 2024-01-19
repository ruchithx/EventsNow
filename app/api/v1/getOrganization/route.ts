import { NextResponse } from "next/server";
import Organization from "@/models/organizationModel";

export async function POST(req: Request) {
  const id = await req.json();

  // const organization = await Organization.findOne({ _id: id });

  return NextResponse.json({ id });
}
