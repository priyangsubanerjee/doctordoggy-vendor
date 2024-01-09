import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mt-32 lg:mt-44 px-6 lg:px-24">
      <p className="text-xs tracking-widest text-center">FAQ</p>
      <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
        Frequently Asked Questions
      </h1>
      <div className="max-w-xl mx-auto mt-10">
        <Accordion showDivider={false} defaultExpandedKeys={["1"]}>
          <AccordionItem
            open
            className="border px-5 rounded-xl mb-3"
            key="1"
            aria-label="Accordion 1"
            title={
              <p className="text-base">What is DoctorDoggy Partners Program?</p>
            }
          >
            <p className="text-sm leading-6 -mt-2 text-neutral-500">
              {defaultContent}
            </p>
          </AccordionItem>
          <AccordionItem
            className="border px-5 rounded-xl mb-4"
            key="2"
            aria-label="Accordion 1"
            title={<p className="text-base">Is there any registration fee?</p>}
          >
            <p className="text-sm leading-6 -mt-2 text-neutral-500">
              {" "}
              {defaultContent}
            </p>
          </AccordionItem>
          <AccordionItem
            className="border px-5 rounded-xl mb-4"
            key="3"
            aria-label="Accordion 1"
            title={<p className="text-base">Is there any registration fee?</p>}
          >
            <p className="text-sm leading-6 -mt-2 text-neutral-500">
              {" "}
              {defaultContent}
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
