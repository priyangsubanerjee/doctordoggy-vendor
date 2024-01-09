/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Benifits() {
  return (
    <div className="mt-40 lg:mt-44 px-6 lg:px-24 bg-neutral-50 py-24">
      <p className="text-xs tracking-widest text-center">BENIFITS</p>
      <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
        Why should you partner with us?
      </h1>
      <p className="text-center text-sm max-w-2xl mt-3 mx-auto leading-7 text-neutral-500">
        DoctorDoggy enables you to get 60% more revenue, 10x new customers and
        boost your brand visibility by providing insights to improve your
        business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto mt-12 gap-5">
        <div className="flex items-center border p-4 rounded-2xl bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/510/510020.png"
            className="h-12"
            alt=""
          />
          <div className="ml-6">
            <h1 className="text-lg font-bold">100 & more</h1>
            <p className="text-neutral-500 text-sm mt-1">Cities across India</p>
          </div>
        </div>
        <div className="flex items-center border p-4 rounded-2xl bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3460/3460647.png"
            className="h-12"
            alt=""
          />
          <div className="ml-6">
            <h1 className="text-lg font-bold">10000 & more</h1>
            <p className="text-neutral-500 text-sm mt-1">
              Customers across India
            </p>
          </div>
        </div>
        <div className="flex items-center border p-4 rounded-2xl bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2934/2934851.png"
            className="h-12"
            alt=""
          />
          <div className="ml-4">
            <h1 className="text-lg font-bold">1000 & more</h1>
            <p className="text-neutral-500 text-sm mt-1">
              Onboardings in a day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
