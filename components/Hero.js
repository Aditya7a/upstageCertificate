import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import Button from "./Button";
import Nav from "./Nav";
import FormInput from "./FormInput";
import { BadgeCheckIcon, BookOpenSolid } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/outline";
import Tabs from "./Tabs";
import { PDFDocument } from "pdf-lib";
import readXlsxFile from "read-excel-file";
import axios from "axios";

function Hero() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabActive =
    "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500";
  const tabNotActive =
    "inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300";

  return (
    <>
      <div className=" grid h-screen grid-cols-12 gap-0 bg-[#F7FAFC] font-main">
        {/* Hero */}
        <div className="col-span-3 hidden h-screen bg-white md:grid ">
          <Nav />
        </div>

        {/*rightSIDE */}
        <div className=" col-span-9 mx-10 mt-8">
          <div>
            <h1 className="text-xl font-bold uppercase">E-Certificate</h1>
            <h2 className="mt-1 text-base font-medium text-[#8f8f8f]">
              Hello, ACIC. Welcome to UpStage E-Certificate
            </h2>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 flex-none items-center justify-center">
              <button
                type="button"
                className="col-span-1 flex h-12 w-12 items-center justify-center rounded-full bg-b1 text-center font-main text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
            <div className="w-64 flex-initial">
              <div className="col-span-9">
                <div className="text-base font-medium uppercase text-[#8f8f8f]">
                  ACIC BMU
                </div>
                <h1 className="mt-1 text-2xl font-bold uppercase">
                  Event Name
                </h1>
              </div>
            </div>
          </div>

          {/* Tab*/
          /* // htmlFor // label // type // id // placeHolder // buttonName */}
          <div className="mt-8 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <ul className="-mb-px flex flex-wrap">
              <li className="mr-2">
                <a
                  href="#"
                  className={toggleState === 1 ? tabActive : tabNotActive}
                  onClick={() => toggleTab(1)}
                  aria-current="page"
                >
                  Title & Template
                </a>
              </li>

              <li className="mr-2">
                <a
                  href="#"
                  className={toggleState === 2 ? tabActive : tabNotActive}
                  onClick={() => toggleTab(2)}
                >
                  Participants Data
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={toggleState === 3 ? tabActive : tabNotActive}
                  onClick={() => toggleTab(3)}
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* TITLE AND TEMPLATE FORM */}
            <div className={toggleState === 1 ? "" : "hidden"}>
              <FormInput
                htmlFor="title"
                label="title"
                type="text"
                id="title"
                placeHolder="Event Title"
              />

              <FormInput
                htmlFor="template"
                label="template"
                type="file"
                id="title"
                placeHolder="Upload File"
              />
            </div>

            <div className={toggleState === 2 ? "" : "hidden"}>
              <FormInput
                htmlFor="excel"
                label="excel"
                type="file"
                id="excel"
                placeHolder="Upload Excel"
                caption="Only .xls, .excel file supported"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
