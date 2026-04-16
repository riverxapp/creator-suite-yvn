import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
          <section className="flex flex-col justify-between gap-10 bg-slate-900 p-8 text-slate-50 sm:p-12">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/10 text-slate-50 hover:bg-white/15">
                Welcome back
              </Badge>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Sign in to continue building with Bubble.
                </h1>
                <p className="max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                  Access your workspace, manage projects, and keep your development flow moving from
                  one secure place.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-slate-50">Fast onboarding</p>
                <p className="mt-1 leading-6">Resume where you left off with saved sessions and preferences.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-slate-50">Secure access</p>
                <p className="mt-1 leading-6">Use your account to keep your projects and notes protected.</p>
              </div>
            </div>
          </section>

          <section className="p-8 sm:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Enter your email and password to access your account.
                </p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-slate-700 dark:focus:ring-slate-300"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="password" className="text-sm font-medium leading-none">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-slate-600 underline-offset-4 hover:underline dark:text-slate-400"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-slate-700 dark:focus:ring-slate-300"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:focus:ring-slate-300"
                    />
                    Remember me
                  </label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Use a trusted device only.</p>
                </div>

                <Button type="submit" className="w-full">
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-slate-600 dark:text-slate-400">
                  New here?{" "}
                  <Link href="/signup" className="font-medium text-slate-950 underline-offset-4 hover:underline dark:text-slate-50">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
