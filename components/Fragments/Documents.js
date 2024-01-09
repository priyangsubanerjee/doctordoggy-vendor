/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import React from "react";

function Documents() {
  return (
    <div className="mt-36 lg:mt-56 py-16 px-6 lg:px-24 bg-slate-50">
      <p className="text-xs tracking-widest text-center">DOCUMENTS</p>
      <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
        Documents required for smooth registration
      </h1>

      <div className="md:flex md:items-center md:justify-center mt-12 md:space-x-16 space-y-5 md:space-y-0 text-sm">
        <ul className="space-y-5">
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon
              height={22}
              className="text-indigo-500"
              icon="icon-park-solid:check-one"
            />
            <span>FSSAI license copy (apply now)</span>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-16 space-x-4">
        <Button className="h-12 bg-transparent border border-indigo-500 rounded-md px-8 py-3 text-black">
          View steps
        </Button>
        <Button className="h-12 bg-indigo-600 rounded-md px-8 py-3 text-white">
          Apply now
        </Button>
      </div>
    </div>
  );
}

export default Documents;
