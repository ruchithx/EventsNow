import { NextResponse } from "next/server";
import Handlebars from "handlebars";
import { promises as fs } from "fs";

import { transporter, mailOptions } from "@/config/nodemailer";
import User from "@/models/userModel";
import { emailTemplate } from "@/lib/email/email";

export async function POST(req: Request) {
  const { email, organizationId } = await req.json();

  const user = await User.findOne({ email });

  if (user === null) {
    return NextResponse.json("No User  exists");
  }

  const template = Handlebars.compile(emailTemplate);
  const htmlBody = template({
    name: "99x",
    URL: `${process.env.NEXT_PUBLIC_URL}/organization/newuser?organizationId=${organizationId}&userId=${user._id}`,
  });

  try {
    const res = await transporter.sendMail({
      from: "ruchithsamarawickrama.sg@gmail.com",
      to: email,
      subject: "Invitation to join the organization",
      text: `You have been invited to join the organization`,
      html: htmlBody,
      // html: `<h1>Invitation to join the organization <a href="${process.env.NEXT_PUBLIC_URL}/organization/newuser?organizationId=${organizationId}&userId=${user._id}" > click to verify</a></h1>`,
    });
  

    if (res.accepted.length > 0) {
      return NextResponse.json("Email sent successfully");
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(user);
}
