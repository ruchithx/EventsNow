import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { id } = await req.json();



  await connectMongoDB();

  const res = await Permission.findByIdAndDelete({ _id: id });

  if (!res) {
    return NextResponse.json(
      { message: "Failed to delete user permission" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "success toelete user permission" },
    { status: 201 }
  );
}
