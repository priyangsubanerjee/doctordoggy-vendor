import sendMail from "@/helper/sendMail";
import { ApprovePartner } from "@/prisma/partner";
import { ApplicationApproved } from "@/templates/Application";
import axios from "axios";

export default async function handler(req, res) {
  const { id } = req.body;
  let { success, data } = await ApprovePartner(id);
  if (success) {
    let { password, email } = data;
    let { success, message } = await sendMail(
      process.env.ZOHO_MAIL,
      process.env.ZOHO_PASS,
      email,
      "Application Approved",
      ApplicationApproved(email, password)
    );

    if (success) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message });
    }
  }
}
