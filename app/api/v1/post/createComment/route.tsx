import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";

import Comment from "@/models/comment";

export async function POST(req: NextRequest) {
  const { userImage, postId, description } = await req.json();

  await connectMongoDB();

  if (!userImage || !postId || !description) {
    return NextResponse.json(
      { message: "Please fill all the fields" },
      { status: 400 }
    );
  }

  const comment = await Comment.create({
    userImage,
    postId,
    description,
  });

  return NextResponse.json(
    { message: "comment created successfully", comment: comment },
    { status: 201 }
  );
}
