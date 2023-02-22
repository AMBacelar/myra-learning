/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import { ModalContext, ModalType } from "../../pages/_app";

export const Header = () => {
  const { setModalType, setShowModal } = useContext(ModalContext);
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link className="flex" href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="/static/images/purple-logo.png"
                alt=""
              />
              <span className="ml-3 text-3xl text-white">Myra Learning</span>
            </Link>
          </div>
          <nav className="hidden space-x-10 md:flex"></nav>
          <div className="flex flex-1 items-center justify-end lg:w-0">
            <Link
              href="/about"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
            >
              About
            </Link>
            <a
              href="https://join.com/companies/myralearning"
              target="_blank"
              rel="noreferrer"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
            >
              Careers
            </a>
            <button
              onClick={() => {
                setModalType(ModalType.form);
                setShowModal(true);
              }}
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
