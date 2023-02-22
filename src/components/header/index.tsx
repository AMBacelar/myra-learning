/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext, useState } from "react";
import { ModalContext, ModalType } from "../../pages/_app";

export const Header = () => {
  const { setModalType, setShowModal } = useContext(ModalContext);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start md:w-0 md:flex-1">
              <Link className="flex" href="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/static/images/purple-logo.png"
                  alt=""
                />
                <span className="ml-3 text-3xl text-white">Myra Learning</span>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setShowSidebar(true)}
                className="space-y-2 rounded-md p-2 hover:cursor-pointer hover:bg-[#FFFFFF55]"
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
              </button>
            </div>
            <div className="hidden space-x-10 md:flex">
              <div className="flex flex-1 items-center justify-end lg:w-0">
                <Link
                  href="/about"
                  className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                >
                  About
                </Link>
                <a
                  href="https://join.com/companies/myralearning"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                >
                  Careers
                </a>
              </div>
            </div>
            <div className="space-x-10 md:flex">
              <div className="flex flex-1 items-center justify-end">
                <button
                  onClick={() => {
                    setModalType(ModalType.form);
                    setShowModal(true);
                  }}
                  className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`navbar-menu relative z-50 ${showSidebar ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-[#00000088] py-6 px-6">
          <div className="mb-8 flex items-center justify-end">
            <button
              className="navbar-close"
              onClick={() => setShowSidebar(false)}
            >
              <svg
                className="h-10 w-10 cursor-pointer p-2 text-gray-200 hover:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-600"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-600"
                  href="https://join.com/companies/myralearning"
                  target="_blank"
                  rel="noreferrer"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};