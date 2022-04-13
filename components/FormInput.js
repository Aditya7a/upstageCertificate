import React from "react";

function FormInput(props) {
  return (
    <>
      <div className="mt-6 items-center">
        <label
          htmlFor={props.htmlFor}
          className="mb-2 block px-3 text-base font-medium uppercase text-gray-900 dark:text-gray-300"
        >
          {props.label}
        </label>
        <div className="flex gap-2">
          <input
            type={props.type}
            id={props.id}
            className="block h-12 w-[32rem] rounded-lg border border-gray-200 bg-white text-lg font-normal text-gray-900 focus:border-b1"
            placeholder={props.placeHolder}
          />
          <button
            type="button"
            className="h-12 w-32 rounded-lg bg-b1 text-base font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-b1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {props.buttonName}
          </button>
        </div>
      </div>
    </>
  );
}

export default FormInput;

// htmlFor
// label
// type
// id
// placeHolder
// buttonName
