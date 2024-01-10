/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/holographic-foil-pastel-rainbow-gradient-abstract-soft-pastel-colors-backdrop_961004-334.jpg"
          className="w-full h-[300px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative pt-20 lg:pt-24 px-4">
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
        <form className="lg:w-[500px] bg-white  mt-10 border rounded-2xl mx-auto p-6">
          <div>
            <label className="text-sm text-neutral-500" htmlFor="">
              Enter registered email
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              label="Email"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-sm text-neutral-500" htmlFor="">
              Enter account password
            </label>
            <Input
              className="h-12 rounded text-base mt-2"
              radius="sm"
              label="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-7">
            <button
              type="button"
              className="text-sm mr-4 text-neutral-600 hover:underline"
            >
              Forgot password?
            </button>
            <Button
              type="submit"
              className="bg-black text-white rounded-md text-sm"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center mt-6">
          <span className="text-sm text-neutral-500">or</span>
          <button className="mt-6 text-neutral-700 text-sm flex items-center justify-center hover:underline">
            <Icon height={23} className="mr-2" icon="iconoir:mail" />
            <span>Login using code</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
