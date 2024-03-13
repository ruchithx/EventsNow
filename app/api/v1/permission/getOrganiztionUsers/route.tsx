import { NextResponse } from "next/server";

import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";

type OrganizationPermission = {
  organizationId: string;
  userId: string;
  permission: string[];
  _id: string;
  globalPermission: string[];
  eventPermission: string[];
};

export const POST = async (req: Request) => {
  try {
    const { id } = await req.json();

    connectMongoDB();
    const org = await Permission.find({ organizationId: id }).populate(
      "userId"
    );

    const userDetails = org.map((user: OrganizationPermission) => {
      const data = {
        userData: user.userId,
        permissionDocumentId: user._id,
        globalPermission: user.globalPermission,
        eventPermission: user.eventPermission,
      };
      return data;
    });

    if (!org) {
      return new NextResponse("No data found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(userDetails), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
