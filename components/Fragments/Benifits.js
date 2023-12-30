/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Benifits() {
  return (
    <div className="mt-56 px-24">
      <p className="text-xs tracking-widest text-center">BENIFITS</p>
      <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
        Simplifying things from the root
      </h1>
      <div className="mt-12">
        <div className="grid grid-cols-4 gap-5">
          <div className="h-60 col-span-2 bg-slate-100 rounded-xl"></div>
          <div className="h-60 col-span-1 bg-slate-100 rounded-xl"></div>
          <div className="h-60 col-span-1 bg-slate-100 rounded-xl"></div>
        </div>
      </div>
      <div className="md:col-span-3 w-full bg-slate-100 rounded-2xl mt-5 py-10 px-6 flex flex-col items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3249/3249904.png"
          alt=""
          className="h-10"
        />
        <h1 className="text-xl font-semibold mt-4">Still not sure?</h1>
        <p className="text-sm text-neutral-600 text-center mt-2 leading-6">
          Get a free consultation from our experts and get your doubts cleared.
        </p>
        <div className="flex items-center justify-center space-x-5 mt-6">
          <button className="flex items-center text-blue-600 space-x-2 text-sm hover:underline">
            <span>Schedule a call</span>
            <span className="translate-y-[1px]">
              <Icon icon="formkit:right" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
