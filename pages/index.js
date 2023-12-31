/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Fragments/Herosection";
import { Icon } from "@iconify/react";
import Growth from "@/components/Fragments/Growth";
import Steps from "@/components/Fragments/Steps";
import Benifits from "@/components/Fragments/Benifits";
import OtherPages from "@/components/Fragments/OtherPages";

export default function Home() {
  return (
    <main className="pt-12 lg:pt-16 pb-24">
      <Navbar />
      <Herosection />
      <Growth />
      <Steps />
      <Benifits />
      <OtherPages />
      {/*
       */}
    </main>
  );
}
