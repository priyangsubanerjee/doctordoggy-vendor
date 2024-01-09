/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-20">
      <div className="h-12 px-6 lg:px-44 lg:h-14 flex items-center justify-between bg-white/90 backdrop-blur-2xl">
        <div>
          <Link aria-label="home" href={"/"}>
            <img src="/logoDark.png" className="lg:h-9 h-7" alt="" />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center space-x-12 text-sm">
          <li className="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => Router.push("/dev/progress")}
          >
            Partners program
          </li>
          <li
            className="cursor-pointer"
            onClick={() => Router.push("/dev/progress")}
          >
            FAQs
          </li>
          <li onClick={() => router.push("/pets")} className="cursor-pointer">
            Contact us
          </li>
        </ul>
        <div className="flex items-center">
          <Link href="/login">
            <Avatar className="bg-neutral-100" size="sm" />
          </Link>
          <button className="ml-5 lg:hidden">
            <Icon height={24} icon="clarity:menu-line" />
          </button>
        </div>
      </div>
      {/* <div className="h-12 bg-black w-full text-center text-white text-sm font-light flex items-center justify-center">
        This website is still under development.
      </div> */}
    </nav>
  );
}

export default Navbar;
