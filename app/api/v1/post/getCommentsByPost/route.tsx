import connectMongoDB from "@/lib/mongo/mongodb";
import Comment from "@/models/comment";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    connectMongoDB();
    const { id } = await req.json();

    const data = await Comment.find({ postId: id });

    if (!data) {
      return NextResponse.json({ data: null });
    }

    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
  }
}
