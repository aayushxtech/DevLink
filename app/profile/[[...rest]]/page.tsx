"use client";

import { UserProfile, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <SignOutButton>
            <Button
              variant="outline"
              className="border-red-300 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Sign Out
            </Button>
          </SignOutButton>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
