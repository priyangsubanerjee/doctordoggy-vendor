import { ValidateCredentials } from "@/prisma/partner";

export default async function handler(req, res) {
  const { email, password } = req.body;
  const { success, message } = await ValidateCredentials(email, password);
  return res.json({
    success,
    message,
  });
}
