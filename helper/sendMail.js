import nodemailer from "nodemailer";

export default async function sendMail(
  username = "",
  pass = "",
  to = "",
  subject = "Doctor Doggy",
  html = "",
  text = ""
) {
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
    await transporter.sendMail({
      from: '"Partners - Doctor Doggy" <no-reply@doctordoggy.vet>', // sender address
      to,
      subject,
      text,
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
