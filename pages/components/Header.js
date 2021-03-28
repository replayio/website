import Image from "next/image";
import React, { useState } from "react";
import Flyout from "./Flyout"
function Link({ href, children }) {
  return (
    <a href={href} className="font-medium text-gray-500 hover:text-gray-900">
      {children}
    </a>
  );
}

function MenuItem({ children, href }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      role="menuitem"
    >
      {children}
    </a>
  );
}

function HeaderMenu({ showDropdown, toggleDropdown }) {
  return (
    <div
      style={{ display: showDropdown ? "block" : "none" }}
      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-10"
    >
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <Image width="28px" height="28px" src="/logo.svg" alt="" />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              onClick={toggleDropdown}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1" role="none">
            <MenuItem href="https://www.notion.so/Docs-56758667f53a4d51b7c6fc7a641adb02">
              Docs
            </MenuItem>
            <MenuItem href="https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4"> Uses Cases</MenuItem>
            <MenuItem href="/about-us"> About Us</MenuItem>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="relative ">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/"> <img src="https://replay.io/_next/image?url=%2Flogo.svg&w=64&q=75" /></a>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <Link href="https://www.notion.so/Docs-56758667f53a4d51b7c6fc7a641adb02">
            Docs
          </Link>
          <Flyout />
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="flex items-center md:hidden absolute right-0">
          <button
            type="button"
            className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            id="main-menu"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            className="typeform-share ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
            href="https://form.typeform.com/to/jAaabLbi"
            data-mode="drawer_right"
            data-submit-close-delay="0"
            target="_blank"
          >
            Join our beta list
          </a>
        </div>
      </div>
      <HeaderMenu showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
    </div>
  );
}
