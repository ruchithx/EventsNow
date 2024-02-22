import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

async function updateUserPassword(userId: string, newPassword: string) {
  try {
    await connectMongoDB(); // Ensure database connection is established

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.password = newPassword;
    await user.save();
    return { success: true, message: "Password updated successfully" };
  } catch (error: any) {
    console.error("Error updating password:", error.message);
    throw error; // Rethrow the error for handling in the calling function
  }
}

export async function POST(req: Request) {
  try {
    await connectMongoDB(); // Ensure database connection is established
    const { id, currentPassword, newPassword } = await req.json();

    const user = await User.findById(id);
    if (!user) {
      return { error: "User not found" }; // Return an error response
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return { error: "Incorrect Password" }; // Return an error response
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updateUserPassword(id, hashedPassword);

    console.log("Password changed successfully");
    return { success: true, message: "Password changed successfully" }; // Return success response
  } catch (error: any) {
    console.error("Connection failed:", error.message);
    return { error: "Connection failed" }; // Return an error response
  }
}
