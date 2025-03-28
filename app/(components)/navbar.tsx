// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };
//     useEffect(() => {
//       window.addEventListener("scroll", handleScroll);
//     return () => {  window.removeEventListener("scroll", handleScroll);};
//   }, []);

//   return (
//     <nav className={`  z-50 bg-[#233100] h-10 sticky top-0 pt-4 ${scroll ? "shadow-md bg-transparent " : ""}`}>
//       <div className="flex justify-between items-center max-w-[1450px]  mx-auto">
//         <div className="w-40">
//           <Image
//             src={`${scroll ? "/images/colored-logo.png" : "/images/logo-remove.png"}`}  
//             alt="logo here"
//             width={150}
//             height={50}
//             // Keeps original aspect ratio
//           />
//         </div>

//         <div className="xl:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="inline-flex items-center justify-center p-2  rounded-md text-[#361a26]   focus:outline-none focus:border-none"
//           >
//             <span className="sr-only">Open main menu</span>
//             {isMenuOpen ? (
//               <FaTimes
//                 className="block h-4 w-4 text-[#cdd7b5]"
//                 aria-hidden="true"
//               />
//             ) : (
//               <FaBars
//                 className="block h-4 w-4 text-[#cdd7b5]"
//                 aria-hidden="true"
//               />
//             )}
//           </button>
//         </div>

//         <div className="lg:flex gap-2 items-center mr-4 hidden ">
//           <span className="text-[#cdd7b5]">+233 256 778 060</span>
//           <Button className="text-[#cdd7b5] border border-[#cdd7b5] bg-[#233100] rounded-xs py-6">
//             Make a reservation
//           </Button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <>
//           <div className="mt-4  bg-[#2f3d0b]">
//             <div className="text-[#cdd7b5] p-4 shadow-sm w-full hover:bg-[#496503]">
//               +233 256 778 060
//             </div>

//             <div className="text-[#cdd7b5]  rounded-xs p-4 shadow-sm hover:bg-[#496503]">
//               Make a reservation
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    // Determine if scrolling up or down
    const isScrollingUp = prevScrollPos > currentScrollPos

    // Set visibility based on scroll direction and position
    setVisible(isScrollingUp || currentScrollPos < 10)

    // Set scroll state for styling
    setScroll(currentScrollPos > 50)

    // Update previous scroll position
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`sticky w-full z-50 transition-all duration-300 ${
        scroll ? "bg-[#233100]/95 shadow-md" : "bg-[#233100]"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1450px] mx-auto px-4 py-4">
        <div className="w-40">
          <Image
            src="/images/logo-remove.png"
            alt="logo here"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[#cdd7b5] hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="lg:flex gap-4 items-center hidden">
          <span className="text-[#cdd7b5]">+233 256 778 060</span>
          <Button className="text-[#cdd7b5] border border-[#cdd7b5] bg-transparent hover:bg-[#cdd7b5] hover:text-[#233100] transition-colors rounded-sm py-6">
            Make a reservation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#cdd7b5] hover:text-white focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FaTimes className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden  left-0 right-0 bg-[#2f3d0b] shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#496503]/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#cdd7b5] p-4 hover:bg-[#496503] transition-colors flex items-center"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}

            <div className="p-4 text-[#cdd7b5] hover:bg-[#496503] transition-colors">+233 256 778 060</div>

            <div className="p-4">
              <Button
                className="w-full text-[#cdd7b5] border border-[#cdd7b5] bg-transparent hover:bg-[#cdd7b5] hover:text-[#233100] transition-colors rounded-sm py-5"
                onClick={handleLinkClick}
              >
                Make a reservation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

