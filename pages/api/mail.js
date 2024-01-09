// app/api/route.js 👈🏽import nodemailer from "nodemailer";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  secure: true,
  port: 465,
  auth: {
    user: process.env.ZOHO_MAIL,
    pass: process.env.ZOHO_PASS,
  },
});

export default async function handler(req, res) {
  try {
    const info = await transporter.sendMail({
      from: '"Doctor Doggy" <no-reply@doctordoggy.vet>', // sender address
      to: "priyangsu26@gmail.com", // list of receivers
      subject:
        "This is an extraordinary email sent usign nextjs & nodemailer. 🎊", // Subject line
      html: `<h1>Hey there! 👋🏽</h1>`,
    });
    return res.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return res.json({ message: "Faliure" }, { status: 200 });
  }
}
