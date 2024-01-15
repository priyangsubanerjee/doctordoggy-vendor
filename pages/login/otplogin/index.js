/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Login() {
  const session = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [browserAgent, setBrowserAgent] = React.useState(null);
  const [otpSent, setOtpSent] = React.useState(false);
  const [resendAllowed, setResendAllowed] = React.useState(false);

  async function sendOTP() {
    if (email.length != 0) {
      let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

      if (emailRegex.test(email)) {
        setLoading(true);
        let { data } = await axios.post(
          "/api/partner/sendOTP",
          {
            email: email,
            browserAgent: browserAgent,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.success) {
          toast.success(data.message);
          setOtpSent(true);
        } else {
          toast.error(data.message);
        }
        setLoading(false);
      } else {
        toast.error("Invalid email");
      }
    } else {
      toast.error("Email and password cannot be empty");
    }
    setLoading(false);
  }

  async function handleVerification() {
    if (password.length != 0) {
      setLoading(true);
      let authRes = await signIn("credentials", {
        email,
        password,
        browserAgent,
        mode: "otp",
        redirect: false,
      });
      if (authRes.ok) {
        toast.success("Login successful");
        location.reload();
      } else {
        toast.error("Invalid OTP");
      }
      setLoading(false);
    } else {
      toast.error("OTP cannot be empty");
    }
  }

  useEffect(() => {
    if (browserAgent == null) {
      if (navigator.userAgent.indexOf("Chrome") != -1) {
        setBrowserAgent("Chrome");
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        setBrowserAgent("Firefox");
      } else if (navigator.userAgent.indexOf("MSIE") != -1) {
        setBrowserAgent("MSIE");
      } else if (navigator.userAgent.indexOf("Edge") != -1) {
        setBrowserAgent("Edge");
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        setBrowserAgent("Safari");
      } else if (navigator.userAgent.indexOf("Opera") != -1) {
        setBrowserAgent("Opera");
      } else {
        setBrowserAgent("Unknown");
      }
    }
  }, [browserAgent]);

  return (
    <div className="pt-20 lg:pt-24 ">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/new-soft-pastel-blur-gradient-background_92086-57.jpg"
          className="w-full h-[250px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative px-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          Login using OTP
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button className="flex items-center space-x-2 text-sm">
            <span>Dont have an partners account?</span>
            <Link
              href={"/register"}
              className="flex items-center text-blue-600 space-x-2 text-sm hover:underline"
            >
              <span>Apply now</span>
              <span className="translate-y-[1px]">
                <Icon icon="formkit:right" />
              </span>
            </Link>
          </button>
        </div>
        <div className="md:w-[500px] max-w-[500px] bg-white  mt-10 border rounded-2xl mx-auto p-6">
          <div>
            <label className="text-sm text-neutral-500" htmlFor="">
              Enter registered email
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          {otpSent && (
            <div className="mt-5">
              <label className="text-sm text-neutral-500" htmlFor="">
                Enter one time password
              </label>
              <Input
                className="h-12 rounded text-base mt-2"
                radius="sm"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Password"
                value={password}
                type="tel"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          <div className="flex items-center justify-between mt-10">
            <Link href="/login">
              <button
                type="button"
                className="text-sm mr-4 text-neutral-600 hover:underline"
              >
                Cancel login
              </button>
            </Link>
            <Button
              isLoading={loading}
              isDisabled={loading}
              onClick={() => {
                if (otpSent) {
                  handleVerification();
                } else {
                  sendOTP();
                }
              }}
              className="bg-black text-white rounded-md text-sm"
            >
              {otpSent ? "Verify" : "Send OTP"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
