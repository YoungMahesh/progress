import { auth } from "@/server/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex w-full justify-center lg:justify-start">
          <h1 className="text-4xl font-bold">Progress Tracker</h1>
        </div>
        <div className="mt-4 flex justify-center gap-4 lg:mt-0">
          {session ? (
            <div className="flex items-center gap-4">
              <span>Welcome, {session.user?.name ?? session.user?.email}</span>
              <Link
                href="/api/auth/signout"
                className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
              >
                Sign Out
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="rounded-lg border border-indigo-600 px-4 py-2 text-indigo-600 hover:bg-indigo-50"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="mt-32 flex flex-col items-center">
        {session ? (
          <p className="text-center text-2xl">
            Welcome to your Progress Tracker! Start tracking your progress now.
          </p>
        ) : (
          <p className="text-center text-2xl">
            Sign in to start tracking your progress.
          </p>
        )}
      </div>
    </main>
  );
}
