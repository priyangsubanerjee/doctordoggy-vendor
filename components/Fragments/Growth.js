/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Growth() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-24 mt-10 lg:mt-28 gap-12">
      <div className="flex lg:hidden items-end justify-center bg-slate-100 rounded-2xl pt-12">
        <img
          className="rounded-2xl w-[50%]"
          src="https://static.vecteezy.com/system/resources/previews/026/976/738/original/3d-icon-cute-veterinarian-man-with-dog-cartoon-style-on-isolated-transparent-background-generative-ai-png.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="lg:text-xl font-medium text-slate-600 font-poppins">
          Helping you to grow your <br />{" "}
          <span className="text-4xl font-semibold lg:text-6xl text-slate-900 pt-3 block">
            business.
          </span>
        </h1>
        <p className="leading-7 lg:leading-8 text-neutral-700 mt-4 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          incidunt dolores repudiandae, explicabo totam voluptatum cupiditate
          deleniti unde aperiam quas odit ea cumque eveniet perspiciatis
          obcaecati tempore nisi perferendis veniam maxime laboriosam temporibus
          repellendus.
        </p>
        <div className="mt-10 flex items-center space-x-6 text-sm text-blue-600">
          <button className="flex items-center space-x-2">
            <span>Sign in</span>
            <Icon icon="uiw:right" />
          </button>
          <button className="flex items-center space-x-2">
            <span>Apply now</span>
            <Icon icon="uiw:right" />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-end justify-center bg-slate-100 rounded-2xl pt-12">
        <img
          className="rounded-2xl w-[50%]"
          src="https://static.vecteezy.com/system/resources/previews/026/976/738/original/3d-icon-cute-veterinarian-man-with-dog-cartoon-style-on-isolated-transparent-background-generative-ai-png.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Growth;
