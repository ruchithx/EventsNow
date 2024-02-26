import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruchithsamarawickrama.sg@gmail.com",
    pass: "umvm idkp zzam hxsy",
  },
});

export const mailOptions = {
  from: "ruchithsamarawickrama.sg@gmail.com",
  to: "ruchithsamarawickrama.sg@gmail.com",
};
