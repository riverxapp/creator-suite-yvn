import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <section aria-labelledby="trust-heading" className="border-t border-border/60 px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Built for modern product teams
              </p>
              <h2 id="trust-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted systems, faster launches, and measurable growth.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold">End-to-end delivery</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Strategy, design, engineering, and launch support in one streamlined workflow.
                </p>
              </article>
              <article className="rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold">Performance-first builds</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Accessible, responsive, and optimized for fast interactions across devices.
                </p>
              </article>
              <article className="rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold">Flexible collaboration</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Work with a focused development partner that adapts to your timeline and scope.
                </p>
              </article>
              <article className="rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold">Clear communication</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Transparent milestones, practical updates, and decisions grounded in product goals.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </p>
              <h2 id="services-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                High-impact services for development agency landing pages.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold">Product websites</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Launch polished marketing pages and funnels that clearly explain value and drive action.
                </p>
              </article>
              <article className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold">Design systems</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Create reusable UI foundations that keep future pages fast to build and consistent.
                </p>
              </article>
              <article className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold">Conversion optimization</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Refine messaging, hierarchy, and calls to action to improve engagement and leads.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="process-heading" className="border-y border-border/60 px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Process
              </p>
              <h2 id="process-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A simple workflow from idea to launch.
              </h2>
              <ol className="mt-8 space-y-5">
                <li>
                  <h3 className="font-semibold">1. Discover</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Define goals, audience, and the key message that the homepage must communicate.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">2. Build</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Implement responsive sections with reusable components and accessible structure.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">3. Launch</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Review, polish, and ship with confidence, ready for iteration and growth.
                  </p>
                </li>
              </ol>
            </div>
            <aside className="rounded-3xl border border-border bg-muted/30 p-8">
              <h3 className="text-xl font-semibold">What you get</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>• Responsive layout across mobile, tablet, and desktop</li>
                <li>• Clear hierarchy with strong calls to action</li>
                <li>• Shared component integration for faster iteration</li>
                <li>• Semantic markup that supports accessibility</li>
              </ul>
            </aside>
          </div>
        </section>

        <section aria-labelledby="cta-heading" className="px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-foreground px-8 py-10 text-background md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-background/70">
                Ready to build?
              </p>
              <h2 id="cta-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start your next agency homepage with a clear, modern foundation.
              </h2>
              <p className="mt-3 text-sm leading-6 text-background/80">
                Use this homepage structure to present your services, build trust, and convert visitors.
              </p>
            </div>
            <a href={"/login"} className="inline-flex h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-background/90">Sign in

            </a>
          </div>
        </section>
      </main>
    </div>);}