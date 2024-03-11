import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "../../../../../models/permissionModel";
import Organization from "../../../../../models/organizationModel";
// import Permission from "@/models/permissionModel";
// import Organization from "@/models/organizationModel";

export const POST = async (req: Request) => {
  try {
    const { id } = await req.json();

    // const objectId = new mongoose.Types.ObjectId(id);


    await connectMongoDB();
    const user = await Permission.find({
      userId: id,
    });

    if (!user) {
      return new NextResponse("No data found", { status: 404 });
    }

    const needOrganizationID = user.map(
      (organization: any) => organization.organizationId
    );

    const organization = await Promise.all(
      needOrganizationID.map(async (organizationID: any) => {
        const data = await Organization.find({
          _id: organizationID,
        });

        if (!data) {
          return;
        }

        if (data.length === 0) {
          return new NextResponse("No data found", { status: 404 });
        }

        const name = data[0].organizationName;
        const image = data[0].postImageLink;
        const id = data[0]._id;


        return { name, image, id };
      })
    );

    return new NextResponse(JSON.stringify(organization), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
