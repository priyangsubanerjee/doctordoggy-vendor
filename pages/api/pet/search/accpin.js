import { FindPetByPin } from "@/prisma/pet";

export default async function handler(req, res) {
  const { pin } = req.body;
  const { success, message, pets } = await FindPetByPin(pin);
  res.status(200).json({
    success: success,
    message: message,
    pets: pets,
  });
}
