/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button, Switch, Tab, Tabs } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const session = useSession();

  const GeneralInfo = () => {
    return (
      <div className="relative px-6  md:px-12">
        <img
          className="absolute inset-0 h-full w-full opacity-50"
          src="https://img.freepik.com/premium-photo/white-background-with-blue-background-word-white-it_207225-64.jpg"
          alt=""
        />
        <div className="relative py-8 md:py-16">
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
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold mt-7">
            {session?.data?.user?.name}
          </h2>
          <div className="flex items-start mt-2 md:mt-4">
            <p className="line-clamp-2 ml-1 max-w-[350px] md:max-w-[500px] text-xs md:text-sm md:leading-8 leading-7 text-neutral-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quisquam, debitis ipsam impedit cum assumenda. Tempora, pariatur
              hic. Nemo esse porro, corporis inventore minima libero veritatis
              architecto sapiente cupiditate reprehenderit!
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-5 md:mt-8">
            <div className="flex items-center space-x-1 md:bg-neutral-50 md:px-3 md:py-1 rounded-full">
              <Icon icon="fluent:call-16-regular" width="24" height="24" />
              <span className="text-xs md:text-xs text-neutral-700">
                9647045453
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-neutral-50 px-3 py-1 rounded-full">
              <Icon icon="iconoir:mail" width="22" height="22" />
              <span className="text-xs md:text-xs text-neutral-700">
                priyangsu26@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-8 md:top-12 right-8 md:right-12">
          <Icon icon="basil:edit-outline" width="23" height="23" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-12 lg:pt-14 md:bg-slate-50">
      <div className="max-w-6xl mx-auto bg-white pb-24">
        <GeneralInfo />
        <div>
          <div className="border-b px-2 md:px-12">
            <Tabs
              variant="underlined"
              aria-label="Tabs variants"
              className="translate-y-[5px]"
            >
              <Tab key="actions" title="Quick actions" />
              <Tab key="services" title="Services" />
            </Tabs>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10 px-5 md:px-12">
          <div className="border p-5 rounded-xl">
            <h2 className="md:text-lg font-semibold">Grooming & Spa</h2>
            <p className="text-xs line-clamp-2 leading-6 text-neutral-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget lorem vitae libero.
            </p>
            <div className="mt-4 flex items-center">
              <p className="text-lg font-bold">₹ 700</p>
              <div className="flex items-center w-fit ml-8">
                <Icon
                  icon="lets-icons:time-atack-light"
                  width="27"
                  height="27"
                />
                <span className="text-sm ml-1 text-neutral-600">1.2 hours</span>
              </div>
              <Switch size="sm" className="ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
