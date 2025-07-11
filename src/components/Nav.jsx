import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import React from 'react';  

export default function Header() {
  return (
    <header className="flex items-center justify-between m-2 p-3 mt-2 bg-black shadow-[1px_0_7px_#ffffff] text-white rounded-2xl">
      {/* Logo / Brand */}
      <div className="text-2xl font-semibold flex items-center gap-2">
        <span className="text-orange-500">⚡</span>
        <span>Debug Challenger</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-lg font-medium">
        <Link to="/" className="hover:text--gray-700 transition">Home</Link>
        <Link to="/challenge" className="hover:text-gray-700 transition">Challenge</Link>
        <Link to="/article" className="hover:text--gray-700 transition">Article</Link>

        {/* Auth */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
}