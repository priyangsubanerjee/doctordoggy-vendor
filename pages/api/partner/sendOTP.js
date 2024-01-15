import { SendOTP } from "@/prisma/partner";

export default async function handler(req, res) {
  const { email, browserAgent } = req.body;
  let { success, data } = await SendOTP(email, browserAgent);
  if (success) {
    return res.json({
      success: true,
      message: data,
    });
  } else {
    return res.json({
      success: false,
      message: data,
    });
  }
}
