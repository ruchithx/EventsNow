import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt, { compare } from "bcryptjs";
import { comparePassword } from "@/lib/auth/auth";

async function updateUserPassword(userId: string, newPassword: string) {
  try {
    await connectMongoDB();

    const user = await User.findByIdAndUpdate(
      userId,
      {
        password: newPassword,
      },
      { new: true }
    );
    if (!user) {
      throw new Error("User not found");
    }

    return { success: true, message: "Password updated successfully" };
  } catch (error: any) {
    console.error("Error updating password:", error.message);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const { id, currentPassword, newPassword } = await req.json();

    const user = await User.findById({ _id: id }).select("password");

    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }

    const passwordMatch = await compare(currentPassword, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: "Incorrect Password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await updateUserPassword(id, hashedPassword);

    return NextResponse.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "An error occurred" });
  }
}
