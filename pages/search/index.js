/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Select,
  SelectItem,
  Switch,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";

function SearchPin() {
  return (
    <div className="pt-16 pb-24">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/holographic-foil-pastel-rainbow-gradient-abstract-soft-pastel-colors-backdrop_961004-334.jpg"
          className="w-full h-[350px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute z-0 inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="top-[120px] bg-white max-w-xl w-full border rounded-3xl relative mx-auto overflow-hidden">
        <div className="mx-auto pb-10">
          <div className="px-10 mt-10">
            <h1 className="text-2xl text-center font-medium">Search pet</h1>
            <p className="text-sm text-center tracking-wide text-neutral-500 mt-3">
              * pin is provided by pet parent
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 px-10 mt-6">
            <Input
              radius="sm"
              label="Account pin"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
          </div>
          <div className="flex items-center justify-between px-10 mt-10">
            <div className="flex items-center w-fit"></div>
            <div>
              <button className="text-sm mr-10 text-neutral-500">Cancel</button>
              <Button
                className="bg-black text-white h-fit rounded-md"
                radius="none"
              >
                <div className=" px-3 py-3">Search pets</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPin;
