/* eslint-disable @next/next/no-img-element */
import ServiceCard from "@/components/Cards/ServiceCard";
import { Icon } from "@iconify/react";
import { Button, Switch, Tab, Tabs } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const session = useSession();
  const [selectedTab, setSelectedTab] = React.useState("actions");

  const GeneralInfo = () => {
    return (
      <div className="relative px-6  md:px-12">
        <img
          className="absolute inset-0 h-full w-full"
          src="https://img.freepik.com/premium-photo/white-background-with-blue-background-word-white-it_207225-64.jpg"
          alt=""
        />
        <div className="relative py-8 md:py-12">
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
              Shop No - 13 , Kabiguru Sarani . SAIL CO-operative , City Centre ,
              Durgapur , West Bengal , 713216 , India
            </p>
          </div>
        </div>
        <div className="absolute top-8 md:top-12 right-8 md:right-12">
          <Icon icon="basil:edit-outline" width="23" height="23" />
        </div>
      </div>
    );
  };

  const Services = () => {
    return (
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 mt-6 md:mt-10 px-5 md:px-12">
        <div className="flex items-center justify-center bg-neutral-50 rounded-lg cursor-pointer py-5">
          <Icon icon="fluent:cube-add-20-regular" width="32" height="32" />
          <span className="ml-3 text-sm font-medium text-neutral-700">
            Create service
          </span>
        </div>
        <ServiceCard />
      </div>
    );
  };

  const TabContent = () => {
    if (selectedTab === "actions") {
      return <QuickActions />;
    } else if (selectedTab === "services") {
      return <Services />;
    } else if (selectedTab === "gallery") {
      return (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10 px-5 md:px-12">
            <ServiceCard />
          </div>
        </div>
      );
    }
  };

  const QuickActions = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-6 mx-4 lg:mx-16 mt-10 gap-y-8 gap-x-0 md:gap-4">
        <Link
          href={"/services/create"}
          className="flex flex-col items-center justify-center py-3"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="fluent:cube-add-20-regular" width="24" height="24" />
          </div>
          <h2 className="text-sm text-center text-neutral-600 font-medium mt-3">
            Create service
          </h2>
        </Link>
        <div className="flex flex-col items-center justify-center py-3">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="iconamoon:search" width="20" height="20" />
          </div>
          <h2 className="text-sm text-center text-neutral-600 font-medium mt-3">
            Search a pet
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="mingcute:add-line" width="20" height="20" />
          </div>
          <h2 className="text-sm text-center text-neutral-600 font-medium mt-3">
            Register a pet
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="mdi:injection" width="20" height="20" />
          </div>
          <h2 className="text-sm text-center text-neutral-600 font-medium mt-3">
            Schedule vaccination
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon
              icon="material-symbols:security-update-good-outline-rounded"
              width="20"
              height="20"
            />
          </div>
          <h2 className="text-sm text-neutral-600 font-medium mt-3">
            Update vaccination
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="game-icons:medicine-pills" width="20" height="20" />
          </div>
          <h2 className="text-sm text-neutral-600 font-medium mt-3">
            Schedule deworming
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="ph:prescription-fill" width="20" height="20" />
          </div>
          <h2 className="text-sm text-neutral-600 font-medium mt-3">
            Upload prescription
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-3 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-zinc-50">
            <Icon icon="icomoon-free:lab" width="20" height="20" />
          </div>
          <h2 className="text-sm text-neutral-600 font-medium mt-3">
            Upload pathology
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/holographic-foil-pastel-rainbow-gradient-abstract-soft-pastel-colors-backdrop_961004-334.jpg"
          className="w-full h-[350px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute z-0 inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="top-[43px] bg-white max-w-6xl w-full border rounded-3xl relative mx-auto overflow-hidden">
        <div className="max-w-6xl mx-auto pb-10">
          <div className="max-h-[270px]">
            <GeneralInfo />
          </div>
          <div>
            <div className="border-b px-2 md:px-12">
              <Tabs
                className="translate-y-[5.5px]"
                variant="underlined"
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
              >
                <Tab key="actions" title="Quick actions" />
                <Tab key="services" title="Services" />
                <Tab key="gallery" title="Gallery" />
              </Tabs>
            </div>
          </div>
          <TabContent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
