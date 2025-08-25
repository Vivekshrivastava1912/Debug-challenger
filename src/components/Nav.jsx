import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="flex items-center justify-between m-2 p-1 bg-black shadow-[1px_0_3px_#ffffff] text-white rounded-2xl sm:bg-black shadow-[1px_0_7px_#ffffff]">
        {/* Logo */}
        <div className="text-xl font-semibold flex items-center ">
          <span className="text-blue-500 mb-1 ">⚡</span>
       
  <span className="mb-1 text-2xl font-bold">
  <span className="text-orange-400 animate-pulse [animation-delay:0=10s]">C</span>
  <span className="text-white animate-pulse [animation-delay:0.5s]">o</span>
  <span className="text-white animate-pulse [animation-delay:0.10s]">d</span>
  <span className="text-white animate-pulse [animation-delay:0.20s]">e</span>
  <span className="text-white animate-pulse [animation-delay:0.25s]">O</span>
  <span className="text-orange-400 animate-pulse [animation-delay:30s]">t</span>
  <span className="text-white animate-pulse [animation-delay:1.40s]">i</span>
  <span className="text-white animate-pulse [animation-delay:1.45s]">o</span>
  <span className="text-white animate-pulse [animation-delay:1.65s]">n</span>
</span>


        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 p-2 text-lg font-medium ">
          <Link to="/Landing" className="hover:text-gray-400 transition text-xl">Home</Link>
          <Link to="/challenge" className="hover:text-gray-400 transition text-xl">Debug</Link>
          <Link to="/Quizepage" className="hover:text-gray-400 transition text-xl">Quiz</Link>
          <Link to="/Aabhi" className="hover:text-gray-400 transition text-xl">IRemarks</Link>
         <Link to="/Article" className="hover:text-gray-400 transition text-xl">About</Link>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-2 py-1 rounded-md bg-orange-500 shadow-[1px_0_4px_#ffffff] m-2px text-black font-bold text-xl">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>

        {/* Mobile Hamburger */}
        <div className=" md:hidden m-2 pt-1">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenu size={25} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-3 bg-black text-white rounded-lg p-3 shadow-[1px_0_4px_#ffffff] flex flex-col gap-2 z-50"
        >
          <Link to="/Landing" className="px-2 py-1 rounded-md bg-black shadow-[1px_0_4px_#ffffff] mb-2px text-center" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/challenge" className="px-2 py-1 rounded-md bg-black shadow-[1px_0_4px_#ffffff] mb-2px text-center" onClick={() => setIsOpen(false)}>Debug</Link>
        
            <Link to="/Aabhi" className="px-2 py-1 rounded-md bg-black shadow-[1px_0_4px_#ffffff] mb-2px text-center" onClick={() => setIsOpen(false)}>IRemarks</Link>
              <Link to="/Quizepage" className="px-2 py-1 rounded-md bg-black shadow-[1px_0_4px_#ffffff] mb-2px text-center" onClick={() => setIsOpen(false)}>Quiz</Link>
                <Link to="/Article" className="px-2 py-1 rounded-md bg-black shadow-[1px_0_4px_#ffffff] mb-2px text-center" onClick={() => setIsOpen(false)}>About</Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-2 py-1 rounded-md bg-orange-500 shadow-[1px_0_4px_#ffffff] mb-2px text-black font-bold">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </>
  );
}