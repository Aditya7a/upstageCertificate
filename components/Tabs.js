import React from "react";

function Tabs() {
  return (
    <>
      <div className="mt-8 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
              aria-current="page"
            >
              Title & Template
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Participants Data
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              View Certificate
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tabs;
