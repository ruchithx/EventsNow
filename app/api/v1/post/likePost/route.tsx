import Organization from "@/models/organizationModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/post";
import User from "@/models/userModel";

export async function PUT(request: NextRequest) {
  try {
    const { id, type, email } = await request.json();


    await connectMongoDB();

    const user = await User.findOne({ email });

    const PostData = await Post.find({ _id: id });
    const likeBy = [...PostData[0].likeBy, user._id];

    if (type === "dislike") {
      const removeLike = PostData[0].likeBy.filter(
        (e: any) => !e.equals(user._id)
      );
      const removeData = {
        like: PostData[0].like - 1,
        likeBy: removeLike,
      };

      const data = await Post.findByIdAndUpdate(id, {
        $set: removeData,
      });
      if (!data) {
        return NextResponse.json("No post found");
      }

      return NextResponse.json("like remove");
    }

    if (type === "like") {
      const addData = {
        like: PostData[0].like + 1,
        likeBy,
      };

      const data = await Post.findByIdAndUpdate(
        id,
        {
          $set: addData,
        },
        {
          new: true,
        }
      );

      if (!data) {
        return NextResponse.json("No post found");
      }

      return NextResponse.json("like added");
    }
  } catch (error) {
    return NextResponse.json("Error updating like post");
  }
}
