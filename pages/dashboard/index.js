/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const session = useSession();
  console.log(session);
  return (
    <div className="min-h-screen pt-14 bg-neutral-50">
      <div className="max-w-6xl mx-auto bg-white px-12 pb-24">
        <div className="relative">
          <img
            className="absolute inset-0 h-full w-full"
            src="https://img.freepik.com/premium-photo/white-background-with-blue-background-word-white-it_207225-64.jpg"
            alt=""
          />
          <div className="relative py-16">
            <div className="flex text-xs items-center space-x-2 w-fit text-neutral-600 border-b border-dashed pb-2">
              <Icon icon="solar:calendar-broken" width="16" height="16" />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-3xl font-poppins font-semibold mt-7">
              {session?.data?.user?.name}
            </h2>
            <div className="flex items-center space-x-2 mt-6">
              <div className="flex items-center space-x-1 bg-neutral-50 px-3 py-1 rounded-full">
                <Icon icon="fluent:call-16-regular" width="24" height="24" />
                <span className="text-sm text-neutral-700">9647045453</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-50 px-3 py-1 rounded-full">
                <Icon icon="iconoir:mail" width="22" height="22" />
                <span className="text-sm text-neutral-700">
                  priyangsu26@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-3">
          <div className="p-6 bg-zinc-50 rounded">
            <Icon
              className="text-indigo-600"
              icon="icon-park-outline:fingernail"
              width="32"
              height="32"
            />
            <div className="flex items-center space-x-2 font-poppins mt-4">
              <p className="text-sm">Services</p>
              <h2 className="text-4xl font-semibold">9</h2>
            </div>
            <p className="text-xs text-neutral-500 leading-5 mt-3">
              These are the services that you provide to your customers. You can
              add, edit, delete and view the services.
            </p>
            <div className="flex items-center justify-end">
              <Icon icon="ph:arrow-right-light" width="24" height="24" />
            </div>
          </div>
          <div className="p-6 bg-zinc-50 rounded">
            {" "}
            <Icon
              className="text-indigo-600"
              icon="solar:calendar-broken"
              width="32"
              height="32"
            />
            <div className="flex items-center space-x-2 font-poppins mt-4">
              <p className="text-sm">Bookings</p>
              <h2 className="text-3xl font-semibold">91</h2>
            </div>
            <p className="text-xs text-neutral-500 leading-5 mt-3">
              These are the bookings that you have received from your customers.
              You can view the bookings and manage them.
            </p>
            <div className="flex items-center justify-end">
              <Icon icon="ph:arrow-right-light" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
