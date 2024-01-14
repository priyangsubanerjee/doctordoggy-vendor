import { ResetPassword } from "@/prisma/partner";

export default async function handler(req, res) {
  const { email, password } = req.body;

  let { success, data } = await ResetPassword(email, password);

  if (success) {
    return res.json({
      success: true,
      data,
    });
  } else {
    return res.json({
      success: false,
      data: "Something went wrong",
    });
  }
}
