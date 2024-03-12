import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/post";

export async function PUT(request: NextRequest) {
  try {
    const { id, description } = await request.json();

    await connectMongoDB();

    const data = await Post.findByIdAndUpdate(id, {
      $set: { description },
    });

    if (!data) {
      return NextResponse.json("No post found");
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Error updating post");
  }
}
