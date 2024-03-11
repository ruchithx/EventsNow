export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;
  try {
    await connectMongoDB();
    const user = await Permission.find({ userId: id }).populate({
      path: "eventPermission.eventId",
      select: " eventName postImageLink",
    });

    const eventDetails = user.map((event: any) => {
      if (event.eventPermission.length > 0) {
        return event.eventPermission.map((e: any) => e.eventId);
      }
    });

    const hasData = eventDetails.filter((e: any) => e !== null);
    const flattenedEvents = hasData.flatMap((event: any) => event || []);

    // const arrat = [...eventDetails];

    return new NextResponse(JSON.stringify(flattenedEvents), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
