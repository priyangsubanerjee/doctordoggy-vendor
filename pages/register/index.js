/* eslint-disable @next/next/no-img-element */
import { ApplicationSuccessTemplates } from "@/templates/Application";
import { Icon } from "@iconify/react";
import { Button, Input, Spacer } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import axios from "axios";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Address = ({ partnerData, setPartnerData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
      <div>
        <label className="text-sm text-neutral-500" htmlFor="">
          Store name
        </label>
        <Input
          className="h-12 rounded text-base mt-2"
          radius="sm"
          value={partnerData.name}
          onValueChange={(e) => {
            setPartnerData({ ...partnerData, name: e });
          }}
          placeholder="Store name here"
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
          value={partnerData.address}
          onChange={(e) => {
            setPartnerData({ ...partnerData, address: e.target.value });
          }}
          radius="sm"
          placeholder="Street, area, colony"
          required
        />
      </div>
      <div>
        <label className="text-sm text-neutral-500" htmlFor="">
          City
        </label>
        <Input
          className="h-12 rounded text-base mt-2"
          value={partnerData.city}
          onChange={(e) => {
            setPartnerData({ ...partnerData, city: e.target.value });
          }}
          radius="sm"
          placeholder="City"
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
          value={partnerData.pincode}
          onChange={(e) => {
            setPartnerData({ ...partnerData, pincode: e.target.value });
          }}
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
          value={partnerData.state}
          onChange={(e) => {
            setPartnerData({ ...partnerData, state: e.target.value });
          }}
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
          value={partnerData.country}
          onChange={(e) => {
            setPartnerData({ ...partnerData, country: e.target.value });
          }}
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
          value={partnerData.landmark}
          onChange={(e) => {
            setPartnerData({ ...partnerData, landmark: e.target.value });
          }}
          placeholder="Nearby landmark"
          startContent={
            <Icon icon="maki:landmark-jp" className="text-neutral-500" />
          }
        />
      </div>
    </div>
  );
};

const Contact = ({ partnerData, setPartnerData }) => {
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
          value={partnerData.email}
          onChange={(e) => {
            setPartnerData({ ...partnerData, email: e.target.value });
          }}
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
          value={partnerData.phone}
          onChange={(e) => {
            setPartnerData({ ...partnerData, phone: e.target.value });
          }}
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
          value={partnerData.gstin}
          onChange={(e) => {
            setPartnerData({ ...partnerData, gstin: e.target.value });
          }}
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
          value={partnerData.tradeLicense}
          onChange={(e) => {
            setPartnerData({ ...partnerData, tradeLicense: e.target.value });
          }}
          placeholder="Trade license number here"
        />
      </div>
      <div>
        <RadioGroup
          label={
            <label className="text-sm text-neutral-500">Staff count</label>
          }
          value={partnerData.staffCount}
          orientation="horizontal"
          onChange={(e) => {
            setPartnerData({ ...partnerData, staffCount: e.target.value });
          }}
          size="sm"
        >
          <Radio name="0-5" className="mr-1 mt-1" value="0-5">
            0-5
          </Radio>
          <Radio name="5-10" className="mr-1 mt-1" value="5-10">
            5-10
          </Radio>
          <Radio name="more than 10" className="mt-1" value="more than 10">
            more than 10
          </Radio>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          onValueChange={(value) => {
            setPartnerData({
              ...partnerData,
              doesHaveClinic: value === "yes" ? true : false,
            });
          }}
          value={partnerData.doesHaveClinic ? "yes" : "no"}
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

const Services = ({ partnerData, setPartnerData }) => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-7 lg:gap-5">
      <div className="md:col-span-2 w-full">
        <CheckboxGroup
          label={
            <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
              Select services you provide
            </label>
          }
          onValueChange={(e) => {
            setPartnerData({ ...partnerData, servicesPromised: e });
          }}
          value={partnerData.servicesPromised}
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
      <div className="md:col-span-2 w-full pt-6">
        <label className="text-sm text-neutral-500 block pb-2" htmlFor="">
          Choose working hours
        </label>
        <div className="text-sm mt-2">
          {partnerData.workingDays.map((obj, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mt-3">
              <div className="col-span-1 pt-[1px] flex items-center">
                <div className="pt-1">
                  <Checkbox
                    defaultSelected={obj.isOpen}
                    onChange={(e) => {
                      let temp = [...partnerData.workingDays];
                      temp[i].isOpen = e.target.checked;
                      setPartnerData({ ...partnerData, workingDays: temp });
                    }}
                  />
                </div>
                <div>
                  <p>{obj.day}</p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute text-xs text-neutral-400 font-light px-2 bg-white left-2 top-0 -translate-y-1/2">
                  Opens
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
                  Closes
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
      <div className="lg:col-span-2 pt-5 flex items-start">
        <div className="pt-[2px]">
          <Checkbox
            radius="full"
            color="primary"
            onValueChange={(checked) => {
              setPartnerData({ ...partnerData, agreedTerms: checked });
            }}
            isSelected={partnerData.agreedTerms}
            id="terms"
          />
        </div>
        <div>
          <label className="leading-7 text-sm text-neutral-500" htmlFor="terms">
            I hereby declare that the information provided above is true to my
            knowledge.
          </label>
        </div>
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center py-7">
      <img
        src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png"
        alt=""
        className="h-20"
      />
      <h1 className="text-xl font-semibold mt-7 tracking-wide">
        Application success
      </h1>
      <p className="text-sm max-w-sm text-neutral-500 mt-3 text-center leading-7">
        Your application has been submitted successfully. We will get back to
        you as soon as possible.
      </p>
      <Link href={"/"}>
        <Button className="bg-neutral-800 text-white rounded-md mt-7 px-6">
          Close
        </Button>
      </Link>
    </div>
  );
};

const StepComponent = ({ partnerData, setPartnerData, active }) => {
  switch (active) {
    case 0:
      return (
        <Address partnerData={partnerData} setPartnerData={setPartnerData} />
      );
    case 1:
      return (
        <Contact partnerData={partnerData} setPartnerData={setPartnerData} />
      );
    case 2:
      return (
        <Services partnerData={partnerData} setPartnerData={setPartnerData} />
      );
    case 3:
      return <Success />;
    default:
      return (
        <Address partnerData={partnerData} setPartnerData={setPartnerData} />
      );
  }
};

export default function Apply() {
  const [loading, setLoading] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [partnerData, setPartnerData] = React.useState({
    name: "",
    regisNo: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    landmark: "",
    phone: "",
    email: "",
    doesHaveClinic: false,
    gstin: "",
    tradeLicense: "",
    staffCount: "0-5",
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

  function PerformValidations() {
    if (partnerData.name === "") {
      toast.error("Please enter store name");
      setActive(0);
      return false;
    } else if (partnerData.address === "") {
      toast.error("Please enter store address");
      setActive(0);
      return false;
    } else if (partnerData.pincode === "") {
      toast.error("Please enter pincode");
      setActive(0);
      return false;
    } else if (partnerData.city === "") {
      toast.error("Please enter city");
      setActive(0);
      return false;
    } else if (partnerData.state === "") {
      toast.error("Please enter state");
      setActive(0);
      return false;
    } else if (partnerData.country === "") {
      toast.error("Please enter country");
      setActive(0);
      return false;
    } else if (partnerData.phone === "") {
      toast.error("Please enter phone number");
      setActive(1);
      return false;
    } else if (partnerData.email === "") {
      toast.error("Please enter email");
      setActive(1);
      return false;
    } else if (partnerData.agreedTerms === false) {
      toast.error("Please agree to the declaration");
      setActive(2);
      return false;
    } else {
      return true;
    }
  }

  async function SubmitForm() {
    try {
      if (PerformValidations() == true) {
        setLoading(true);
        let workDaysArray = [];
        partnerData.workingDays.forEach((obj) => {
          let temp = `${obj.day};${obj.isOpen};${obj.startTime};${obj.endTime}`;
          workDaysArray.push(temp);
        });

        let finalPartnerData = {
          ...partnerData,
          workingDays: workDaysArray,
        };

        let res = await axios.post("/api/partner/apply", finalPartnerData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // if valid email, send email

        if (res.data.success) {
          setActive(3);
        } else {
          toast.error(res.data.data);
        }
      }
    } catch (error) {}
    setLoading(false);
  }

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
      <div className="relative px-4">
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
          <div
            style={{
              pointerEvents: loading ? "none" : "all",
            }}
          >
            <StepComponent
              partnerData={partnerData}
              setPartnerData={setPartnerData}
              active={active}
            />
          </div>
          {active < 3 && (
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
                isLoading={loading}
                isDisabled={loading}
                onClick={() => {
                  active < 2 ? setActive(active + 1) : SubmitForm();
                }}
                type="button"
                className="bg-black text-white rounded-md text-sm"
              >
                {active == 2 ? "Submit" : "Next"}
              </Button>
            </div>
          )}
        </div>
      </div>
      <Spacer y={50} />
    </div>
  );
}
