import React from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import Button from "./Button";
import { BookOpenIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function Nav() {
  return (
    <>
      <aside className="" aria-label="Sidebar">
        <div className=" mt-8 h-screen items-center justify-center rounded bg-white dark:bg-gray-800">
          <div className=" mt-8 flex items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-b1">
              <Image src={Logo} alt="Logo.png" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center text-xl font-bold">
            ACIC BMU
          </div>
          <div className="mt-2 flex items-center justify-center text-sm font-medium text-[#8f8f8f]">
            ADMIN
          </div>
          <div className="py-5">
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="mt-2 ml-16 flex text-base font-medium uppercase text-[#333333]">
            Menu
          </div>
          <div className="mt-2 flex items-center justify-center text-sm font-medium text-[#8f8f8f]">
            <Button buttonName="Certificate" icon={BadgeCheckIcon} />
          </div>
          <div className="mt-1 flex items-center justify-center text-sm font-medium text-[#8f8f8f]">
            <Button buttonName="Certificate" icon={BookOpenIcon} />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Nav;
