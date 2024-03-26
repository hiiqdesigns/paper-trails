"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`relative shadow${
        isOpen ? " bg-white md:bg-transparent" : " bg-transparent"
      }`}
    >
      <div className="container px-8 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <Link href={`/`}>
            <Image
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
              width={100}
              height={60}
            />
          </Link>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6${isOpen && " hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6${isOpen ? " block" : " hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        {/* <div
          className={`${
            isOpen
              ? "translate-x-[0%] opacity-100 "
              : "-translate-x-full md:translate-x-[0%] opacity-0 md:opacity-100 "
          }absolute md:relative top-full inset-x-0 z-20 w-full px-16 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:flex md:items-center md:justify-between bg-white md:bg-transparent shadow md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:ml-2">
            <Link
              href={`/`}
              className="py-2 px-4 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              href={`/about`}
              className="py-2 px-4 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100"
            >
              About
            </Link>

            <Link
              href={`/contact`}
              className="py-2 px-4 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full pl-10 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div> */}
      </div>
    </nav>
  );
};
