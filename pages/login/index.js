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

  async function handleLogin() {
    if (email.length != 0 && password.length != 0) {
      let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

      if (emailRegex.test(email)) {
        if (password.length >= 6) {
          setLoading(true);
          try {
            const { data } = await axios.post(
              "/api/partner/validate",
              {
                email,
                password,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (data.success) {
              const authRes = await signIn("credentials", {
                email,
                password,
                browserAgent,
                mode: "password",
                redirect: false,
              });
              console.log(authRes);
              if (!authRes.ok) {
                console.log(authRes);
              } else {
                location.reload();
              }
            } else {
              toast.error(data.message);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          toast.error("Password must be atleast 6 characters long");
        }
      } else {
        toast.error("Invalid email");
      }
    } else {
      toast.error("Email and password cannot be empty");
    }
    setLoading(false);
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
          src="https://img.freepik.com/premium-vector/holographic-foil-pastel-rainbow-gradient-abstract-soft-pastel-colors-backdrop_961004-334.jpg"
          className="w-full h-[250px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative px-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          Partners Login
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={() => router.push("/deworming/schedule")}
            className="flex items-center space-x-2 text-sm"
          >
            <span>Dont have an partners account?</span>
            <Link
              href={"/vaccination/schedule"}
              className="flex items-center text-blue-600 space-x-2 text-sm hover:underline"
            >
              <span>Apply now</span>
              <span className="translate-y-[1px]">
                <Icon icon="formkit:right" />
              </span>
            </Link>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="md:w-[500px] max-w-[500px] bg-white  mt-10 border rounded-2xl mx-auto p-6"
        >
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
          <div className="mt-5">
            <label className="text-sm text-neutral-500" htmlFor="">
              Enter account password
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link href="/login/otplogin">
              <button
                type="button"
                className="text-sm mr-4 text-neutral-600 hover:underline"
              >
                Forgot password?
              </button>
            </Link>
            <Button
              type="submit"
              isLoading={loading}
              isDisabled={loading}
              className="bg-black text-white rounded-md text-sm"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center mt-8">
          <span className="text-sm text-neutral-500">or</span>
          <Link href="/login/otplogin">
            <button className="mt-6 text-neutral-700 text-sm flex items-center justify-center hover:bg-neutral-100 px-2 py-1 rounded-md">
              <Icon height={23} className="mr-2" icon="iconoir:mail" />
              <span>Login using code</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
