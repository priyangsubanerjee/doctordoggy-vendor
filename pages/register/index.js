/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button, Input, Spacer } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";

import Link from "next/link";
import React from "react";

export default function Apply() {
  const [active, setActive] = React.useState(0);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const Address = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store name
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Store name here"
            required
            startContent={
              <Icon
                height="20"
                icon="ri:store-2-line"
                className="text-neutral-500"
              />
            }
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store address
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Street, area, city"
            required
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Pincode
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Pincode"
            startContent={
              <Icon
                height="20"
                icon="mdi:location"
                className="text-neutral-500"
              />
            }
            required
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            State
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="State"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Country
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Country"
            startContent={<Icon icon="ph:globe" className="text-neutral-500" />}
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Landmark (optional)
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Nearby landmark"
            startContent={
              <Icon icon="maki:landmark-jp" className="text-neutral-500" />
            }
          />
        </div>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-7 lg:gap-5">
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store email
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Store email here"
            required
            startContent={
              <Icon
                height={20}
                icon="iconoir:mail-solid"
                className="text-neutral-500"
              />
            }
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store phone number
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Use country code"
            required
            startContent={
              <Icon
                height={20}
                icon="ic:round-phone"
                className="text-neutral-500"
              />
            }
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            GST number (optional)
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="GST number here"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Trade license number (optional)
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Trade license number here"
          />
        </div>
        <div>
          <RadioGroup
            label={
              <label className="text-sm text-neutral-500" htmlFor="">
                Staff count
              </label>
            }
            defaultValue="0-5"
            orientation="horizontal"
            size="sm"
          >
            <Radio className="mr-1 mt-1" value="0-5">
              0-5
            </Radio>
            <Radio className="mr-1 mt-1" value="5-10">
              5-10
            </Radio>
            <Radio className="mt-1" value="more than 10">
              more than 10
            </Radio>
          </RadioGroup>
        </div>
        <div>
          <RadioGroup
            defaultValue="no"
            label={
              <label className="text-sm text-neutral-500" htmlFor="">
                Do you have a vet clinic?
              </label>
            }
            orientation="horizontal"
            size="sm"
          >
            <Radio className="mr-1 mt-1" value="yes">
              Yes
            </Radio>
            <Radio className="mr-1 mt-1" value="no">
              No
            </Radio>
          </RadioGroup>
        </div>
      </div>
    );
  };

  const Services = () => {
    return (
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-7 lg:gap-5">
        <div className="lg:col-span-2 w-full">
          <CheckboxGroup
            label={
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Select services you provide
              </label>
            }
            orientation="horizontal"
            color="primary"
            size="sm"
          >
            <Checkbox className="mr-2" value="grooming">
              Grooming & spa
            </Checkbox>
            <Checkbox className="mr-2" value="walking">
              Dog walking
            </Checkbox>
            <Checkbox className="mr-2" value="training">
              Training
            </Checkbox>
            <Checkbox value="boarding">Boarding</Checkbox>
          </CheckboxGroup>
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store opens at
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Password"
            type="time"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Store closes at
          </label>
          <Input
            className="h-12 rounded text-base mt-2"
            radius="sm"
            placeholder="Password"
            type="time"
          />
        </div>
        <div className="lg:col-span-2 w-full pt-2">
          <CheckboxGroup
            label={
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Select your working days
              </label>
            }
            orientation="horizontal"
            color="primary"
            size="sm"
          >
            {days.map((day, index) => (
              <Checkbox key={index} className="mr-1" value={day}>
                {day}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
        <div className="lg:col-span-2 pt-3 flex items-center">
          <Checkbox
            radius="full"
            onValueChange={(checked) => {
              console.log(checked);
            }}
            value="boarding"
            className="inline-block"
            id="terms"
          />
          <label
            className="leading-7 -mt-[1px] text-sm text-neutral-500"
            htmlFor="terms"
          >
            I hereby declare that the information provided above is true to my
            knowledge.
          </label>
        </div>
      </div>
    );
  };

  const StepComponent = () => {
    switch (active) {
      case 0:
        return <Address />;
      case 1:
        return <Contact />;
      case 2:
        return <Services />;
      default:
        return <Address />;
    }
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div className="relative">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdHAyNTYtYmFja2dyb3VuZC0yNS5qcGc.jpg"
          className="w-full h-[300px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative px-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          Apply for partners program
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={() => router.push("/deworming/schedule")}
            className="flex items-center space-x-2 text-sm"
          >
            <span>Already have an partners account?</span>
            <Link
              href={"/vaccination/schedule"}
              className="flex items-center text-blue-600 space-x-2 text-sm hover:underline"
            >
              <span>Login</span>
              <span className="translate-y-[1px]">
                <Icon icon="formkit:right" />
              </span>
            </Link>
          </button>
        </div>
        <div className="lg:w-[900px]  bg-white mt-10 border rounded-2xl mx-auto p-6">
          <StepComponent />
          <div className="flex items-center justify-between mt-10">
            <button
              disabled={active === 0}
              onClick={() => active > 0 && setActive(active - 1)}
              type="button"
              className="text-sm disabled:cursor-not-allowed disabled:opacity-50 mr-4 text-neutral-600 hover:underline"
            >
              Back
            </button>
            <Button
              onClick={() => active < 2 && setActive(active + 1)}
              type="button"
              className="bg-black text-white rounded-md text-sm"
            >
              {active == 2 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
      <Spacer y={50} />
    </div>
  );
}
