import sendMail from "@/helper/sendMail";
import prisma from "./prisma";
import bcrypt from "bcrypt";
import {
  LoginSuccess,
  OTPSent,
  PassResetSuccess,
} from "@/templates/Authentication";

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
        oneTimePass: password,
      },
    });
    return {
      success: true,
      data: {
        ...objectUpdated,
        oneTimePass: password,
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

export const ValidateCredentials = async (email, password) => {
  let user = await prisma.partner.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    if (user.verified) {
      if (user.needPassReset) {
        if (user.password == null) {
          if (user.oneTimePass == password) {
            return {
              success: true,
              message: "",
            };
          } else {
            return {
              success: false,
              message: "One time password do not match",
            };
          }
        } else {
          let match = await bcrypt.compare(password, user.password);
          if (match) {
            return {
              success: true,
              message: "",
            };
          } else {
            return {
              success: false,
              message: "Password do not match",
            };
          }
        }
      } else {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          return {
            success: true,
            message: "",
          };
        } else {
          return {
            success: false,
            message: "Password do not match",
          };
        }
      }
    } else {
      return {
        success: false,
        message: "Account not verified",
      };
    }
  } else {
    return {
      success: false,
      message: "Email do not exist",
    };
  }
};

export const AuthenticatePartner = async (email, password, browserAgent) => {
  let user = await prisma.partner.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    if (user.verified) {
      if (user.needPassReset) {
        if (user.password == null) {
          if (user.oneTimePass == password) {
            return {
              success: true,
              redirect: "/password/reset",
              data: {
                ...user,
                id: null,
              },
            };
          } else {
            return {
              success: false,
              redirect: null,
              data: "Authentication error (Password doesnt match)",
            };
          }
        } else {
          let match = await bcrypt.compare(password, user.password);
          if (match) {
            return {
              success: true,
              redirect: "/dashboard",
              data: {
                ...user,
                id: null,
              },
            };
          } else {
            return {
              success: false,
              data: "Authentication error (Password do not match)",
            };
          }
        }
      } else {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          await sendMail(
            process.env.ZOHO_MAIL,
            process.env.ZOHO_PASS,
            user.email,
            "Login approved 🔓",
            LoginSuccess(
              user.email,
              browserAgent,
              new Date().toLocaleString("en-US", {
                // 1 January 2021, 12:00:00 am

                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })
            ),
            "Password"
          );
          return {
            success: true,
            redirect: "dashboard",
            data: {
              ...user,
              id: null,
            },
          };
        } else {
          return {
            success: false,
            data: "Authentication error (Password do not match)",
          };
        }
      }
    } else {
      return {
        success: false,
        data: "Account not verified",
      };
    }
  } else {
    return {
      success: false,
      data: "User does not exist",
    };
  }
};

export const AuthenticateOTP = async (email, otp, browserAgent) => {
  let user = await prisma.partner.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    if (user.oneTimePass == otp) {
      await prisma.partner.update({
        where: {
          email: email,
        },
        data: {
          oneTimePass: null,
        },
      });
      await sendMail(
        process.env.ZOHO_MAIL,
        process.env.ZOHO_PASS,
        user.email,
        "Login approved 🔓",
        LoginSuccess(
          user.email,
          browserAgent,
          new Date().toLocaleString("en-US", {
            // 1 January 2021, 12:00:00 am

            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
          "One time password"
        )
      );
      return {
        success: true,
        redirect: "/dashboard",
        data: {
          ...user,
          id: null,
        },
      };
    } else {
      return {
        success: false,
        data: "Authentication error (OTP do not match)",
      };
    }
  } else {
    return {
      success: false,
      data: "User does not exist",
    };
  }
};

export const FindPartnerByEmail = async (email) => {
  let user = await prisma.partner.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    return {
      success: true,
      data: {
        ...user,
        id: null,
      },
    };
  } else {
    return {
      success: false,
      data: "User not found",
    };
  }
};

export const ResetPassword = async (email, password, browserAgent) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    let objectUpdated = await prisma.partner.update({
      where: {
        email: email,
      },
      data: {
        needPassReset: false,
        password: hash,
      },
    });

    await sendMail(
      process.env.ZOHO_MAIL,
      process.env.ZOHO_PASS,
      email,
      "Password reset success 🔠",
      PassResetSuccess(
        email,
        browserAgent,
        new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      )
    );
    return {
      success: true,
      data: {
        ...objectUpdated,
        id: null,
        needPassReset: false,
        password: null,
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

export const SendOTP = async (email, browserAgent) => {
  let fourDigit = Math.floor(1000 + Math.random() * 9000).toString();

  let user = await prisma.partner.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    if (user.needPassReset || user.password == null) {
      return {
        success: false,
        data: "Password reset required",
      };
    } else {
      try {
        let objectUpdated = await prisma.partner.update({
          where: {
            email: email,
          },
          data: {
            oneTimePass: fourDigit,
          },
        });

        await sendMail(
          process.env.ZOHO_MAIL,
          process.env.ZOHO_PASS,
          email,
          "One Time Password 🔑",
          OTPSent(
            email,
            fourDigit,
            browserAgent,

            new Date().toLocaleString("en-US", {
              // 1 January 2021, 12:00:00 am

              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })
          )
        );
        return {
          success: true,
          data: "OTP sent successfully",
        };
      } catch (error) {
        console.log(error);
        return {
          success: false,
          data: error,
        };
      }
    }
  } else {
    return {
      success: false,
      data: "Email not found",
    };
  }
};
