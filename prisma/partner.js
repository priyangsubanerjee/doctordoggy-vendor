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

export const ApprovePartner = async (id) => {
  let password = Math.random().toString(36).slice(-8);
  try {
    let objectUpdated = await prisma.partner.update({
      where: {
        id: id,
      },
      data: {
        verified: true,
        password: password,
      },
    });
    return {
      success: true,
      data: {
        ...objectUpdated,
        password: password,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: error,
    };
  }
};
