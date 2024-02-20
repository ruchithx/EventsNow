import { NextResponse } from "next/server";
import Handlebars from "handlebars";
import fs from "fs";

import { transporter, mailOptions } from "@/config/nodemailer";
export async function POST(req: Request) {
  const { email, organizationId } = await req.json();

  console.log(email, organizationId);

  // const emailTemplate = fs.readFileSync(
  //   "@/organization/dashboard/[id]/components/email.html",
  //   "utf8"
  // );
  // var template = Handlebars.compile(emailTemplate);
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
    await transporter.sendMail({
      from: "ruchithsamarawickrama.sg@gmail.com",
      to: email,
      subject: "Invitation to join the organization",
      text: `You have been invited to join the organization`,
      // html: result,
      html: `<h1>Invitation to join the organization <a href="http://localhost:3000/organization/newUser?organizationId=${organizationId}&data=t1" > click to verify</a></h1>`,
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(email);
}
