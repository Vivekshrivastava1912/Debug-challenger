import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const Nav = () => {
  return (
    <>   <header className="  flex items-center justify-between bg-black/80 text-white backdrop-blur border-b border-white/10 shadow-[1PX_0_3px_#ffffff] rounded-2xl m-2 p-2 ">
      {/* Logo or Title */}
      <h1 className="text-2xl font-semibold tracking-wide">
        <span className="text-gray-900">⚡</span> Debug Challenger
      </h1>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8 text-sm font-medium">
        <a href="/" className="hover:text-gray-400 transition duration-150 text-lg">Home</a>
        <a href="/challenge" className="hover:text-gray-400 transition duration-150 text-lg">Challenge</a>
        <a href="/article" className="hover:text-gray-400 transition duration-150 text-lg">Article</a>

      
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-black hover:bg-gray-00 text-white font-semibold px-4 py-2 rounded-md transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton   afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
   </>
  )
}

export default Nav