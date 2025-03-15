import React from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
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

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/features"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/showcase"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Showcase
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <div className="hidden sm:block">
              <SignInButton mode="modal">
                <Button variant="ghost" className="font-medium">
                  Sign In
                </Button>
              </SignInButton>
            </div>
            <SignUpButton mode="modal">
              <Button variant="default" className="font-medium">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>

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
            <div className="ml-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                My Profile
              </Button>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
