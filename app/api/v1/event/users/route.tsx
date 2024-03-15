import connectMongoDB from "@/lib/mongo/mongodb";
import Permission from "@/models/permissionModel";
import { connect } from "http2";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

type Permission = {
  _id: string;
  organizationId: string;
  userId: {
    _id: string;
    email: string;
    firstName: string;
  };
  globalPermission: string[];
  eventPermission: {
    eventId: string;
    permissions: string[];
  }[];
};

export async function POST(req: Request) {
  const { id } = await req.json();
  try {
    await connectMongoDB();
    const objectId = new ObjectId(id);
    const data = await Permission.find().populate("userId");

    const user = data.filter((permission: Permission) => {
      return permission.eventPermission?.find((p) => {
        // console.log(p.eventId, new ObjectId(id));
        const eventObjectId =
          typeof p.eventId === "string" ? new ObjectId(p.eventId) : p.eventId;

        if (eventObjectId.equals(objectId)) {
          return true;
        } else {
          return false;
        }
      });
    });

    if (!user || user.length === 0) {
      return NextResponse.json({ message: "user not found" });
    }

    const userDetails = user.map((u: Permission) => {
      return {
        email: u.userId.email,
        name: u.userId.firstName,
      };
    });

    return NextResponse.json(userDetails);
  } catch (e) {
    return NextResponse.json({ message: "server error" });
  }
}
