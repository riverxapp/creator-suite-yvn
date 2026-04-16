import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

const services = [
  {
    title: "MVPs & internal tools",
    description:
      "Launch high-signal products quickly with structured workflows, custom logic, and a clean user experience.",
  },
  {
    title: "Marketplace builds",
    description:
      "Create two-sided platforms with listings, payments, roles, and scalable admin tooling.",
  },
  {
    title: "Automation & integrations",
    description:
      "Connect Bubble to the tools your team already uses with APIs, webhooks, and reliable data flows.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We align on goals, user journeys, scope, and the fastest path to a production-ready launch.",
  },
  {
    step: "02",
    title: "Design + build",
    description:
      "We translate your concept into polished UI, database structure, and responsive Bubble workflows.",
  },
  {
    step: "03",
    title: "Launch + iterate",
    description:
      "We test, refine, and support your rollout so you can keep improving after launch.",
  },
];

const testimonials = [
  {
    quote:
      "They helped us turn a rough concept into a polished Bubble app in weeks, not months.",
    name: "Alex Morgan",
    title: "Founder, OpsFlow",
  },
  {
    quote:
      "Communication was clear, timelines were realistic, and the end result felt genuinely premium.",
    name: "Priya Shah",
    title: "Product Lead, Northstar Studio",
  },
];

const stats = [
  { label: "Projects shipped", value: "40+" },
  { label: "Avg. launch timeline", value: "6 weeks" },
  { label: "Client retention", value: "92%" },
];

const featuredHighlights = [
  "Product strategy",
  "Interface design",
  "Workflow architecture",
  "QA + launch support",
];

export default function Home() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(255,255,255,1))]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground shadow-sm backdrop-blur">
                Bubble Development Agency
              </div>

              <HeroSection />

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                We design and build polished Bubble products for founders and
                teams that need to launch quickly without sacrificing clarity,
                reliability, or visual quality.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@pandabubble.dev"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.01] hover:bg-foreground/90"
                >
                  Book a discovery call
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
                >
                  See what we build
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm backdrop-blur"
                  >
                    <div className="text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-95 shadow-2xl shadow-slate-900/10" />
              <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                      Live project snapshot
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      OpsFlow Client Portal
                    </h2>
                  </div>
                  <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    In production
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/60">Scope</p>
                    <p className="mt-2 text-base font-medium">
                      Workflow automation, dashboards, and payments
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/60">Timeline</p>
                    <p className="mt-2 text-base font-medium">5.5 weeks to launch</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">Included in every engagement</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredHighlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                  <p className="text-sm text-white/60">Monthly outcome</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {[
                      { label: "Signups", value: "+31%" },
                      { label: "Conversion", value: "18.4%" },
                      { label: "NPS", value: "64" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-slate-900/60 p-3 text-center"
                      >
                        <div className="text-lg font-semibold">{item.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border/60 bg-card/30">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Services
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Modern Bubble builds for teams that care about experience
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                From concept validation to launch support, we create Bubble
                products that feel purposeful, responsive, and ready for scale.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-border bg-background p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                    {service.title.slice(0, 2)}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A clear, collaborative path from idea to launch
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We keep projects moving with a lightweight process that reduces
                ambiguity and makes the next step obvious.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="rounded-3xl border border-border bg-card p-7 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-border/60 bg-card/30">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Proof
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Trusted by teams building with Bubble
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Demo results and testimonial content shown here to illustrate
                the kind of outcomes a focused Bubble agency can deliver.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-3xl border border-border bg-background p-7 shadow-sm"
                >
                  <div className="flex gap-1 text-primary">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={`${testimonial.name}-${index}`}>{star}</span>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-8 tracking-tight">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-foreground px-6 py-10 text-background shadow-sm sm:px-10 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-background/70">
                    Let&apos;s build
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Ready to launch your Bubble project?
                  </h2>
                  <p className="mt-4 text-base leading-7 text-background/80 sm:text-lg">
                    Share your product idea, and we&apos;ll help you scope the
                    MVP, design the experience, and build a path to launch.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    href="mailto:hello@pandabubble.dev"
                    className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
                  >
                    Book a discovery call
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-background/20 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                  >
                    Explore services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}