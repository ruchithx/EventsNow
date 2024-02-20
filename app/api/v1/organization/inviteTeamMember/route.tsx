import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
export async function POST(req: Request) {
  const { email } = await req.json();
  console.log(email);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Invitation to join the organization",
      text: `You have been invited to join the organization`,
      html: `<p>You have been invited to join the organization</p>`,
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(email);
}
