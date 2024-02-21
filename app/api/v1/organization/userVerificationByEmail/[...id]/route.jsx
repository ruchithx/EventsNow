import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;

  console.log(id);

  return NextResponse.json({ message: "success" });
}
