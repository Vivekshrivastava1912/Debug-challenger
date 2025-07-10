import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">🔥 My Clerk Auth App</h1>

      <nav>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
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