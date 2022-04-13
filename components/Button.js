import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function Button(props) {
  let className =
    "mr-2 inline-flex h-11 w-64 items-center rounded-lg bg-b1 px-5 py-2.5 text-center font-main text-sm font-medium text-white hover:bg-gray-600";
  return (
    <>
      <div className="grid-row grid items-center justify-center gap-2 font-main">
        <button type="button" className={className}>
          <div>
            <props.icon className="ml-4 h-6 w-6 text-white" />
          </div>
          <p className="ml-3 text-base font-bold">{props.buttonName}</p>
        </button>
      </div>
    </>
  );
}

export default Button;
