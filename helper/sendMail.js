import nodemailer from "nodemailer";

export default async function sendMail(username, pass, to, subject, html) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    secure: true,
    port: 465,
    auth: {
      user: username,
      pass: pass,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Doctor Doggy" <no-reply@doctordoggy.vet>', // sender address
      to,
      subject,
      html,
    });
    return {
      success: true,
      message: "Success",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failure",
    };
  }
}
