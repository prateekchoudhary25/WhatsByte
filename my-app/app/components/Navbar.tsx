import Image from "next/image";
import React from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 px-4 py-3 border-b bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image src="/icons/logo.png" alt="Logo" width={30} height={30} />
            <span className="hidden md:block ml-2 text-2xl font-bold">
              WhatBytes
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-2 h-10">
            <Image
              src="/icons/avatar.svg"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-medium">Prateek Choudhary</span>
          </button>
          <button
            className="lg:hidden rounded-md px-2 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
