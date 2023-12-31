import { Icon } from "@iconify/react";
import React from "react";

function Steps() {
  return (
    <div>
      <div className="mt-44 px-6 lg:px-24">
        <p className="text-xs tracking-widest text-center">PROCESS</p>
        <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
          Steps to become a partner
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12">
          <div className="flex flex-col items-center w-60">
            <div className="h-12 w-12 rounded-full border border-black flex items-center justify-center">
              1
            </div>
            <h1 className="font-semibold text-lg mt-5">Fill out the form</h1>
            <p className="text-xs leading-5 mt-2 text-center text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div className="lg:h-[1px] h-20 my-4 w-[1px] lg:w-32 bg-black/50"></div>
          <div className="flex flex-col items-center w-60">
            <div className="h-12 w-12 rounded-full border border-black flex items-center justify-center">
              2
            </div>
            <h1 className="font-semibold text-lg mt-5">Approval</h1>
            <p className="text-xs leading-5 mt-2 text-center text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div className="lg:h-[1px] h-20 my-4 w-[1px] lg:w-32 bg-black/50"></div>
          <div className="flex flex-col items-center w-60">
            <div className="h-12 w-12 rounded-full border border-black flex items-center justify-center">
              3
            </div>
            <h1 className="font-semibold text-lg mt-5">Onboarding</h1>
            <p className="text-xs leading-5 mt-2 text-center text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center text-sm text-blue-600">
          <button className="flex items-center space-x-2">
            <span>Apply now</span>
            <Icon icon="uiw:right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Steps;
