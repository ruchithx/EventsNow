export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Post from "@/models/post";
// import Permission from "@/models/permissionModel";

export const GET = async () => {
  try {
    connectMongoDB();
    const post = await Post.find();

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
