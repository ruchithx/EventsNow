import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextApiResponse } from "next";

export async function POST(req: Request, response: NextApiResponse) {
  try {
    connectMongoDB();

    response.writeHead(200, {
      "Access-Control-Allow-Origin":
        "https://events-kc6urfcvu-ruchith-nusaras-projects.vercel.app",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });

    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ user: null });
    } else {
      return NextResponse.json({ user });
    }
  } catch (e) {
    console.log(e);
  }
}
