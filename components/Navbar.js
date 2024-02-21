/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const session = useSession();
  return (
    <nav className="fixed top-0 inset-x-0 z-20">
      <div className="h-12 px-6 lg:px-44 lg:h-14 flex items-center justify-between bg-white/90 backdrop-blur-2xl">
        <div>
          <Link aria-label="home" href={"/"}>
            <img src="/logoDark.png" className="lg:h-9 h-7" alt="" />
          </Link>
        </div>

        {session.status == "authenticated" ? (
          <ul className="hidden lg:flex items-center space-x-12 text-sm">
            <li className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </li>
            <li className="cursor-pointer">Bookings</li>
            <li className="cursor-pointer">Appointments</li>
            <li className="cursor-pointer">Doctors</li>
            <li className="cursor-pointer">Help</li>
          </ul>
        ) : (
          <ul className="hidden lg:flex items-center space-x-12 text-sm">
            <li className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </li>
            <li className="cursor-pointer">Partners program</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Contact us</li>
          </ul>
        )}

        <div className="flex items-center">
          {session.status == "authenticated" ? (
            <Dropdown className="rounded-lg z-30">
              <DropdownTrigger className="outline-none">
                <Avatar
                  size="sm"
                  src="https://cdn-icons-png.flaticon.com/256/149/149071.png"
                  className="cursor-pointer"
                />
              </DropdownTrigger>

              <DropdownMenu
                onAction={async (key) => {
                  switch (key) {
                    case "logout":
                      await signOut();
                      location.reload();
                      break;
                    case "account":
                      window.location.href = "/account";
                      break;
                    case "pets":
                      window.location.href = "/pets";
                      break;
                    case "notifications":
                      window.location.href = "/notifications";
                      break;
                    default:
                      break;
                  }
                }}
                aria-label="Custom item styles"
              >
                <DropdownSection aria-label="Profile & Actions" showDivider>
                  <DropdownItem
                    key="account"
                    className="h-14 gap-2 opacity-100"
                  >
                    <User
                      name={session?.data?.user?.name}
                      description={session?.data?.user?.email}
                      classNames={{
                        name: "text-neutral-700",
                        description: "text-default-500",
                      }}
                      avatarProps={{
                        size: "sm",
                        src: "https://cdn-icons-png.flaticon.com/256/149/149071.png",
                      }}
                    />
                  </DropdownItem>
                </DropdownSection>

                <DropdownItem className="rounded" key="pets">
                  Pets
                </DropdownItem>

                <DropdownItem className="rounded" key="account">
                  Account
                </DropdownItem>
                <DropdownItem className="rounded" key="notifications">
                  Notifications
                </DropdownItem>
                <DropdownItem className="rounded" key="edit">
                  Report an issue
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  className="text-danger rounded"
                  color="danger"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href="/login">
              <Avatar className="bg-neutral-100" size="sm" />
            </Link>
          )}
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
