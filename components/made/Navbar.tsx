"use client";

import React, { useState } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-2 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              DevLink
            </span>
          </Link>
        </div>

        {/* Center navigation - same spacing for all links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/features"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/showcase"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Showcase
          </Link>

          {/* Signed-in navigation links - same spacing as public links */}
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/portfolios"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolios
            </Link>
          </SignedIn>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center">
          <SignedOut>
            <div className="flex items-center space-x-4">
              <SignInButton mode="modal">
                <Button variant="ghost" className="font-medium">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default" className="font-medium">
                  Get Started
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <Link href="/profile">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
              >
                My Profile
              </Button>
            </Link>
          </SignedIn>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t">
          <div className="flex flex-col space-y-4">
            <Link
              href="/features"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/showcase"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>

            <SignedIn>
              <div className="pt-3 border-t">
                <Link
                  href="/dashboard"
                  className="block text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/portfolios"
                  className="block text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolios
                </Link>
                <Link
                  href="/profile"
                  className="block mb-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium w-full"
                  >
                    My Profile
                  </Button>
                </Link>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex flex-col space-y-3 pt-3 border-t">
                <SignInButton mode="modal">
                  <Button variant="ghost" className="font-medium w-full">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="default" className="font-medium w-full">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
