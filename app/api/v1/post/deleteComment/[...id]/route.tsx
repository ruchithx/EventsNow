import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connectMongoDB from "@/lib/mongo/mongodb";
import Post from "@/models/post";
import Comment from "@/models/comment";
// import Permission from "@/models/permissionModel";

export const DELETE = async (request: NextRequest, { params }: any) => {
  const id = params.id;
  try {
    await connectMongoDB();
    const deleteData = await Comment.deleteOne({ _id: id });

    return new NextResponse(JSON.stringify(deleteData), { status: 200 });
  } catch (error) {
    return new NextResponse("Errror in fetching data" + error, { status: 500 });
  }
};
