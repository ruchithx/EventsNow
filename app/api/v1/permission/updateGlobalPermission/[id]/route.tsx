import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextResponse } from "next/server";
import Permission from "@/models/permissionModel";

type Params = {
  id: string;
};

export async function PUT(request: Request, { params }: { params: Params }) {
  const id = params.id;

  const body = await request.json();
  console.log(body);

  await connectMongoDB();

  const res = await Permission.findByIdAndUpdate(
    id,
    {
      $set: { globalPermission: body },
    },
    { new: true }
  );

  if (!res) {
    return NextResponse.json(
      { message: "Failed to update global permission" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "success" });
}
