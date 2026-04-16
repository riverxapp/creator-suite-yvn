import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
          <section className="flex flex-col justify-between gap-10 bg-slate-950 p-8 text-slate-50 sm:p-10 dark:bg-slate-50 dark:text-slate-950">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-white/10 text-white dark:bg-slate-900/10 dark:text-slate-950">
                Join the studio
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                  Create your account and start building with Bubble.
                </h1>
                <p className="max-w-md text-sm leading-6 text-slate-300 dark:text-slate-600">
                  Set up your workspace, manage projects, and collaborate with
                  your team from one streamlined dashboard.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-500">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="underline-offset-4 hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="p-8 sm:p-10">
            <div className="mx-auto max-w-md space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Sign up</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Enter your details to create a new account.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus-visible:border-slate-950 focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus-visible:border-slate-950 focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus-visible:border-slate-950 focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus-visible:border-slate-950 focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300"
                  />
                </div>

                <Button type="submit" className="h-11 w-full">
                  Create account
                </Button>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-slate-950 underline-offset-4 hover:underline dark:text-slate-50">
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
