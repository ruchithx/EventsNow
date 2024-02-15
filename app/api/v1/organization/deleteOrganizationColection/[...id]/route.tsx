// import connectMongoDB from "@/lib/mongo/mongodb";
// import Organization from "@/models/organizationModel";

// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     connectMongoDB();
//     await Organization.deleteMany();
//     return NextResponse.json({ message: "data delete success" });
//   } catch (e) {
//     console.log(e);
//   }
// }
// import connectMongoDB from "@/lib/mongo/mongodb";
// import Organization from "@/models/organizationModel";
// import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(req: NextRequest & { params: { id: string } }) {
//   try {
//     await connectMongoDB(); // Await the connection establishment

//     const { id } = req.params; // Extract organization ID from URL params

//     // Assuming User is a Mongoose model, use deleteOne() method
//     const data = await Organization.deleteOne({ _id: id });

//     return NextResponse.json({ data });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.error(); // Return an error response
//   }
// }
import connectMongoDB from "@/lib/mongo/mongodb";
import Organization from "@/models/organizationModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest & { params: { id: string } }) {
  try {
    await connectMongoDB(); // Await the connection establishment

    const { id } = req.params; // Extract organization ID from URL params

    const deletionResult = await Organization.deleteOne({ _id: id });

    if (deletionResult.deletedCount === 0) {
      // No organization was deleted, possibly because it doesn't exist
      return NextResponse.json(
        { message: "Organization not found or already deleted." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Organization deleted successfully." });
  } catch (e) {
    console.error("Error deleting organization:", e);
    return NextResponse.error(); // Return an error response
  }
}
