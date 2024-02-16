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
        <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab key="services" title="Services" />
          <Tab key="actions" title="Actions" />
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
