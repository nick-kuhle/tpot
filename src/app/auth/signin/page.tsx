'use client';

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 border rounded"
        >
          Sign in with Credentials
        </button>
      </div>
    </div>
  );
}
