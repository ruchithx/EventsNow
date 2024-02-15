// import User from "@/models/userModel";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await User.deleteMany();
//     return NextResponse.json({ message: "data delete success" });
//   } catch (e) {
//     console.log(e);
//   }
// }
import connectMongoDB from "@/lib/mongo/mongodb";
import Organization from "@/models/organizationModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB(); // Await the connection establishment

    const { _id } = await req.json();

    // Assuming User is a Mongoose model, use deleteOne() method
    const data = await Organization.deleteOne({ _id });

    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
    return NextResponse.error(); // Return an error response
  }
}
