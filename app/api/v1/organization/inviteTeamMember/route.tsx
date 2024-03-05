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

  // const emailTemplate = await fs.readFile(
  //   "@/organization/dashboard/[id]/components/Email.html",
  //   "utf8"
  // );

  const template = Handlebars.compile(emailTemplate);
  const htmlBody = template({
    name: "99x",
    URL: `${process.env.NEXT_PUBLIC_URL}/organization/newuser?organizationId=${organizationId}&userId=${user._id}`,
  });

  // var data = {
  //   name: "Alan",
  //   hometown: "Somewhere, TX",
  //   kids: [
  //     { name: "Jimmy", age: "12" },
  //     { name: "Sally", age: "4" },
  //   ],
  // };
  // var result = template(data);

  // var source =
  //   "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
  //   "{{kids.length}} kids:</p>" +
  //   "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
  // var template = Handlebars.compile(source);

  // var data = {
  //   name: "Alan",
  //   hometown: "Somewhere, TX",
  //   kids: [
  //     { name: "Jimmy", age: "12" },
  //     { name: "Sally", age: "4" },
  //   ],
  // };
  // var result = template();

  try {
    const res = await transporter.sendMail({
      from: "ruchithsamarawickrama.sg@gmail.com",
      to: email,
      subject: "Invitation to join the organization",
      text: `You have been invited to join the organization`,
      html: htmlBody,
      // html: `<h1>Invitation to join the organization <a href="${process.env.NEXT_PUBLIC_URL}/organization/newuser?organizationId=${organizationId}&userId=${user._id}" > click to verify</a></h1>`,
    });
    console.log(res.accepted.length);

    if (res.accepted.length > 0) {
      return NextResponse.json("Email sent successfully");
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(user);
}
