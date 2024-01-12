import sendMail from "@/helper/sendMail";
import { PartnerApplication } from "@/prisma/partner";
import { ApplicationSuccessTemplates } from "@/templates/Application";

export default async function handler(req, res) {
  const partner = req.body;
  let { success, data } = await PartnerApplication(partner);
  let html = ApplicationSuccessTemplates();
  let to = partner.email;
  let subject = `Hi, ${partner.name}! Your application has been received`;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(partner.email)) {
    await sendMail(
      process.env.ZOHO_MAIL,
      process.env.ZOHO_PASS,
      to,
      subject,
      html
    );
  }
  res.status(200).json({
    success,
    data,
  });
}
