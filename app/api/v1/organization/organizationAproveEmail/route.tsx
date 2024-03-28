import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";

export async function POST(req: Request) {
  const { email, name } = await req.json();

  // const template = Handlebars.compile(emailTemplate);
  // const htmlBody = template({
  //   name: "99x",
  //   URL: `${process.env.NEXT_PUBLIC_URL}/organization/newuser?organizationId=${organizationId}&userId=${user._id}`,
  // });

  try {
    const res = await transporter.sendMail({
      from: "ruchithsamarawickrama.sg@gmail.com",
      to: email,
      subject: "Invitation to join the organization",
      text: `You have been invited to join the organization`,
      // html: htmlBody,
      html: `<h1>Your ${name} organization has been approved</h1>`,
    });

    if (res.accepted.length > 0) {
      return NextResponse.json("Email sent successfully");
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  // return NextResponse.json(user);
}
