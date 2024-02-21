/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Switch,
  Input,
  Select,
  SelectItem,
  Textarea,
  Checkbox,
} from "@nextui-org/react";
import React from "react";

function RegsiterPet() {
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
      <div className="top-[43px] bg-white max-w-4xl w-full border rounded-3xl relative mx-auto overflow-hidden">
        <div className="mx-auto pb-10">
          <div className="p-10">
            <h1 className="text-2xl text-center font-medium">Register a pet</h1>
            <p className="text-sm text-center tracking-wide text-neutral-500 mt-3">
              * marked fields are required & cannot be empty
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 px-10">
            <div className="col-span-2">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Profile image
              </label>

              <div>
                <button className="h-20 w-20 rounded-md relative">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg"
                    className="w-full h-full object-cover rounded-md absolute inset-0"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="col-span-2 mt-3">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                General details
              </label>
            </div>
            <Input
              radius="sm"
              label="Name"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
            <Select radius="sm" label="Species">
              <SelectItem key="Grooming" value="Grooming">
                Grooming
              </SelectItem>
            </Select>
            <Select radius="sm" label="Breed">
              <SelectItem key="Grooming" value="Grooming">
                Grooming
              </SelectItem>
            </Select>
            <Select radius="sm" label="Sex">
              <SelectItem key="Grooming" value="Grooming">
                Grooming
              </SelectItem>
            </Select>

            <div className="md:col-span-2 w-full mt-6">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Other details
              </label>
            </div>

            <Input
              radius="sm"
              label="Date of birth"
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
            <Input
              radius="sm"
              label="Body weight (kg)"
              type="number"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
            <Input
              radius="sm"
              label="Color"
              type="text"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />

            <div className="md:col-span-2 w-full mt-6">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Parent details
              </label>
            </div>

            <Input
              radius="sm"
              label="Email"
              type="text"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
          </div>

          <div className="flex items-center justify-between px-10 mt-16">
            <div className="flex items-center w-fit">
              <Switch />
              <span className="text-sm text-neutral-500 ml-2">
                Public profile is off
              </span>
            </div>

            <div>
              <button className="text-sm mr-10 text-neutral-500">Cancel</button>
              <Button
                className="bg-black text-white h-fit rounded-md"
                radius="none"
              >
                <div className=" px-3 py-3">Register pet</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegsiterPet;
