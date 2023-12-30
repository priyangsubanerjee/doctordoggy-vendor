/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Fragments/Herosection";
import { Icon } from "@iconify/react";
import Growth from "@/components/Fragments/Growth";
import Steps from "@/components/Fragments/Steps";
import Benifits from "@/components/Fragments/Benifits";

export default function Home() {
  return (
    <main className="py-32">
      <Navbar />
      <Herosection />
      <Growth />
      <Steps />
      <Benifits />
      <div className="mt-56 px-24">
        <p className="text-xs tracking-widest text-center">OTHER SERVICES</p>
        <h1 className="text-2xl font-semibold text-slate-900 text-center mt-2">
          Landed on the wrong page?
        </h1>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="bg-white border px-2 py-2 h-fit rounded-xl flex items-center">
              <img
                src="https://content.alphapaw.com/wp-content/uploads/2021/02/Pet-Parenting-FAQs-Our-Vet-Answers-the-Most-Common-Questions-on-Pet-Parents-Minds-1.jpg.webp"
                className="h-20 rounded-lg"
                alt=""
              />
              <div className="flex flex-col justify-center ml-3">
                <h2 className="text-sm">Doctordoggy for</h2>
                <h3 className="text-2xl font-semibold mt-1">pet parents.</h3>
              </div>
              <button className="h-12 w-12 border flex items-center justify-center rounded-full ml-auto mr-7">
                <Icon icon="ep:top-right" />
              </button>
            </div>
            <div className="bg-white h-fit border px-2 py-2 rounded-xl flex items-center">
              <img
                src="https://www.vetmed.ucdavis.edu/sites/g/files/dgvnsk491/files/styles/sf_landscape_16x9/public/media/images/20191014sean_lucy033.jpg?h=033c0e4d&itok=7W-HHrLk"
                className="h-20 rounded-lg"
                alt=""
              />
              <div className="flex flex-col justify-center ml-3">
                <h2 className="text-sm">Doctordoggy for</h2>
                <h3 className="text-2xl font-bold mt-1">veterinarians.</h3>
              </div>
              <button className="h-12 w-12 border flex items-center justify-center rounded-full ml-auto mr-7">
                <Icon icon="ep:top-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
