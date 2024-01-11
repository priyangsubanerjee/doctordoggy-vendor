import prisma from "./prisma";

export const PartnerApplication = async (partner) => {
  try {
    let userList = await prisma.partner.findMany({
      where: {
        email: partner.email,
      },
    });

    if (userList.length > 0) {
      return {
        success: false,
        data: "Email has been used",
      };
    } else {
      let objectCreated = await prisma.partner.create({
        data: {
          ...partner,
        },
      });
      return {
        success: true,
        data: objectCreated,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: error,
    };
  }
};
