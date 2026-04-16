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

export default function Home() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <HeroSection />
        </section>

        <section
          id="services"
          className="border-t border-border/60 bg-card/30"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to ship on Bubble with confidence
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                From concept validation to launch support, we build Bubble
                experiences that feel fast, reliable, and easy to maintain.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A simple process that keeps projects moving
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="text-sm font-medium text-primary">{item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-border/60 bg-card/30">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Proof
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Trusted by teams building with Bubble
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Demo results and testimonial content shown here to illustrate the
                kind of outcomes a focused Bubble agency can deliver.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <blockquote className="text-base leading-7">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
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
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <div className="rounded-3xl border border-border bg-foreground px-6 py-10 text-background shadow-sm sm:px-10 lg:px-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/70">
                  Let&apos;s build
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to launch your Bubble project?
                </h2>
                <p className="mt-4 text-base leading-7 text-background/80">
                  Share your product idea, and we&apos;ll help you scope the MVP,
                  design the experience, and build a path to launch.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@pandabubble.dev"
                  className="inline-flex items-center justify-center rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
                >
                  Book a discovery call
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-background/20 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}