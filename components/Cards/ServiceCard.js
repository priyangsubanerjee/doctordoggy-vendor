import { Icon } from "@iconify/react";
import { Switch } from "@nextui-org/react";
import React from "react";

function ServiceCard() {
  return (
    <div className="border p-5 rounded-xl">
      <h2 className="md:text-lg font-semibold">Grooming & Spa</h2>
      <p className="text-xs line-clamp-2 leading-6 text-neutral-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
        lorem vitae libero.
      </p>
      <div className="mt-4 flex items-center">
        <p className="text-lg font-bold">₹ 700</p>
        <div className="flex items-center w-fit ml-8">
          <Icon icon="lets-icons:time-atack-light" width="27" height="27" />
          <span className="text-sm ml-1 text-neutral-600">1.2 hours</span>
        </div>
        <Switch size="sm" className="ml-auto" />
      </div>
    </div>
  );
}

export default ServiceCard;
