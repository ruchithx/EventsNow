import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/post";
import User from "@/models/userModel";

export async function POST(request: NextRequest) {
  try {
    const { id, type, userEmail } = await request.json();

    // const user = await User.find({
    //   _id: "65de9e98f77063d5f382283a",
    // });
    // if (!user) {
    //   return NextResponse.json("No user found" + user);
    // }

    // return NextResponse.json({ id, type, userEmail });

    await connectMongoDB();

    const PostData = await Post.find({ _id: id });

    if (type === "dislike") {
      const data = await Post.findByIdAndUpdate(id, {
        $set: { like: PostData[0].like - 1 },
      });
      if (!data) {
        return NextResponse.json("No post found");
      }

      return NextResponse.json("like remove");
    }

    if (type === "like") {
      const data = await Post.findByIdAndUpdate(id, {
        $set: { like: PostData[0].like + 1 },
      });

      if (!data) {
        return NextResponse.json("No post found");
      }

      return NextResponse.json("like added");
    }
  } catch (error) {
    return NextResponse.json("Error updating like post");
  }
}
