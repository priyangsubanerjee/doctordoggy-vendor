import { PartnerApplication } from "@/prisma/partner";

export default async function handler(req, res) {
  const partner = req.body;
  console.log(partner);
  let { success, data } = await PartnerApplication(partner);
  res.status(200).json({
    success,
    data,
  });
}
