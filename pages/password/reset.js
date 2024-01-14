/* eslint-disable @next/next/no-img-element */
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export async function getServerSideProps(context) {
  const sessionData = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (sessionData.user.needPassReset == false) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionData: JSON.parse(JSON.stringify(sessionData)),
    },
  };
}

function ResetPassword({ sessionData }) {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleFormSubmit() {
    if (password.length == 0 && confirmPassword.length == 0) {
      toast.error("Passwords cannot be empty");
    } else {
      if (password == confirmPassword) {
        setLoading(true);
        let { data } = await axios.post(
          "/api/partner/resetPass",
          {
            email: sessionData.user.email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.success) {
          console.log("Password reset successful");
          toast.success("Password reset successful");
          window.location.reload();
        }
      } else {
        toast.error("Passwords do not match");
      }
      setLoading(false);
    }
  }

  return (
    <div className="pt-20 lg:pt-24 ">
      <div className="relative">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3RwMjU2LWJhY2tncm91bmQtMDgteC5qcGc.jpg"
          className="w-full h-[250px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative px-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          Reset Password
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={() => router.push("/deworming/schedule")}
            className="flex items-center space-x-2 text-sm"
          >
            <span>Strengthen your account security</span>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          className="md:w-[500px] bg-white  mt-10 border rounded-2xl mx-auto p-6"
        >
          <div>
            <label className="text-sm text-neutral-500" htmlFor="">
              Set new password
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div className="mt-5">
            <label className="text-sm text-neutral-500" htmlFor="">
              Confirm new password
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => signOut()}
              type="button"
              className="text-sm mr-4 text-neutral-600 hover:underline"
            >
              Logout
            </button>
            <Button
              isLoading={loading}
              isDisabled={loading}
              type="submit"
              className="bg-black text-white rounded-md text-sm"
            >
              Proceed
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
