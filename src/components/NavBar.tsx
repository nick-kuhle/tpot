'use client';

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-lg font-bold">
        <Link href="/">Tinder Clone</Link>
      </div>
      <div className="space-x-4">
        {!session ? (
          <Link
            href="/auth/signin"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign In
          </Link>
        ) : (
          <>
            <Link
              href="/profile"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Profile
            </Link>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
