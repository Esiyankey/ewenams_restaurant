"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    return () => {  window.removeEventListener("scroll", handleScroll);};
  }, []);

  return (
    <nav className={`  z-50 bg-[#233100] h-10 sticky top-0 pt-4 ${scroll ? "shadow-md bg-transparent " : ""}`}>
      <div className="flex justify-between items-center max-w-[1450px]  mx-auto">
        <div className="w-40">
          <Image
            src={`${scroll ? "/images/colored-logo.png" : "/images/logo-remove.png"}`}  
            alt="logo here"
            width={150}
            height={50}
            // Keeps original aspect ratio
          />
        </div>

        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2  rounded-md text-[#361a26]   focus:outline-none focus:border-none"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FaTimes
                className="block h-4 w-4 text-[#cdd7b5]"
                aria-hidden="true"
              />
            ) : (
              <FaBars
                className="block h-4 w-4 text-[#cdd7b5]"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        <div className="lg:flex gap-2 items-center mr-4 hidden ">
          <span className="text-[#cdd7b5]">+233 256 778 060</span>
          <Button className="text-[#cdd7b5] border border-[#cdd7b5] bg-[#233100] rounded-xs py-6">
            Make a reservation
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="mt-4  bg-[#2f3d0b]">
            <div className="text-[#cdd7b5] p-4 shadow-sm w-full hover:bg-[#496503]">
              +233 256 778 060
            </div>

            <div className="text-[#cdd7b5]  rounded-xs p-4 shadow-sm hover:bg-[#496503]">
              Make a reservation
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
