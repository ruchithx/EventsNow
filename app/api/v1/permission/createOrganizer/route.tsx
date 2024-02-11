import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { organizationId, userId } = await req.json();

  connectMongoDB();

  const res = await Permission.create({
    globalPermission: ["allPermission"],
    organizationId,
    userId,
  });

  if (!res) {
    return NextResponse.json(
      { message: "Failed to create organizer permission" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "success to create organizer" },
    { status: 201 }
  );
}
