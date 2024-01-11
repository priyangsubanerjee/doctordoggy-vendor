import prisma from "./prisma";

export const PartnerApplication = async (partner) => {
  try {
    let objectCreated = await prisma.partner.create({
      data: {
        ...partner,
      },
    });
  } catch (error) {}
};
