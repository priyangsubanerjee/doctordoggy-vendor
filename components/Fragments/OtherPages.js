/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function OtherPages() {
  return (
    <div className="mt-36 lg:mt-56 px-6 lg:px-24">
      <p className="text-xs tracking-widest text-center">OTHER PAGES</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto gap-5">
        <div className="h-16 rounded-xl border lg:shadow-xl shadow-slate-50 px-4">
          <div className="flex items-center h-full">
            <span className="text-neutral-500">for</span>
            <h1 className="lg:text-lg font-semibold ml-2">Pet parents</h1>
            <button className="h-10 w-10 border flex items-center justify-center rounded-full ml-auto mr-0">
              <Icon icon="ep:top-right" />
            </button>
          </div>
        </div>
        <div className="h-16 rounded-xl border lg:shadow-xl shadow-slate-50 px-4">
          <div className="flex items-center h-full">
            <span className="text-neutral-500">for</span>
            <h1 className="lg:text-lg font-semibold ml-2">Veterinarians</h1>
            <button className="h-10 w-10 border flex items-center justify-center rounded-full ml-auto mr-0">
              <Icon icon="ep:top-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPages;
