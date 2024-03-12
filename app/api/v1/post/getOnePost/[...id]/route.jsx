export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Post from "@/models/post";
import { request } from "http";
// import Permission from "@/models/permissionModel";

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    connectMongoDB();
    const post = await Post.find({ eventId: id });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
