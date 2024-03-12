export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Post from "@/models/post";
import { request } from "http";
// import Permission from "@/models/permissionModel";

export const GET = async (request: NextRequest, { params }: any) => {
  const id = params.id;

  try {
    await connectMongoDB();
    const post = await Post.find({ eventId: id }).populate("likeBy");

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
