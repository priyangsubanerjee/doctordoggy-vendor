/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@nextui-org/react";
import React from "react";

function CreateServicePage() {
  const [partnerData, setPartnerData] = React.useState({
    name: "",
    workingDays: [
      {
        day: "Monday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Tuesday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Wednesday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Thursday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Friday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Saturday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: true,
      },
      {
        day: "Sunday",
        startTime: "08:00",
        endTime: "21:00",
        isOpen: false,
      },
    ],
    servicesPromised: [],
    agreedTerms: false,
  });

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
            <h1 className="text-2xl text-center font-medium">
              Create a service
            </h1>
            <p className="text-sm text-center tracking-wide text-neutral-500 mt-3">
              * marked fields are required & cannot be empty
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 px-10">
            <div className="col-span-2">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Display images (max 3)
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
              label="Service name"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
            <Select radius="sm" label="Select an animal">
              <SelectItem key="Grooming" value="Grooming">
                Grooming
              </SelectItem>
            </Select>
            <Textarea label="Description" radius="sm" />

            <div className="md:col-span-2 w-full mt-6">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Choose days available
              </label>
              <div className="text-sm mt-2">
                {partnerData.workingDays.map((obj, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 mt-3">
                    <div className="col-span-1 pt-[1px] flex items-center">
                      <div className="pt-0">
                        <Checkbox
                          size="sm"
                          defaultSelected={obj.isOpen}
                          onChange={(e) => {
                            let temp = [...partnerData.workingDays];
                            temp[i].isOpen = e.target.checked;
                            setPartnerData({
                              ...partnerData,
                              workingDays: temp,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <p>{obj.day}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="absolute text-xs text-neutral-400 font-light px-2 bg-white left-2 top-0 -translate-y-1/2">
                        From
                      </span>
                      <input
                        className="bg-transparent w-full h-full border px-3 py-3 rounded-lg"
                        type="time"
                        value={obj.startTime}
                        onChange={(e) => {
                          let temp = [...partnerData.workingDays];
                          temp[i].startTime = e.target.value;
                          setPartnerData({ ...partnerData, workingDays: temp });
                        }}
                        name=""
                        id=""
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute text-xs text-neutral-400 font-light px-2 bg-white left-2 top-0 -translate-y-1/2">
                        To
                      </span>
                      <input
                        className="bg-transparent w-full h-full border px-3 py-3 rounded-lg"
                        size="sm"
                        value={obj.endTime}
                        onChange={(e) => {
                          let temp = [...partnerData.workingDays];
                          temp[i].endTime = e.target.value;
                          setPartnerData({ ...partnerData, workingDays: temp });
                        }}
                        type="time"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 w-full mt-6">
              <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
                Pricing & duration details
              </label>
            </div>

            <Input
              radius="sm"
              label="Estimated price (in ₹)"
              classNames={{
                label: "ml-2",
                input: "px-2",
              }}
            />
            <Input
              radius="sm"
              label="Estimated time (in hrs.)"
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
                Publish this service
              </span>
            </div>

            <div>
              <button className="text-sm mr-10 text-neutral-500">Cancel</button>
              <Button
                className="bg-black text-white h-fit rounded-md"
                radius="none"
              >
                <div className=" px-3 py-3">Create service</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateServicePage;
