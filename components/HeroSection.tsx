import { Button } from "@/components/ui/button";
import { Triangle } from "lucide-react";

const hero = {
  heading: "To get started, chat with AI.",
  description: "Looking for a starting point or more instructions?",
  hintBefore: "Head over to ",
  hintBold1: "Templates",
  hintBetween: " or the ",
  hintBold2: "Learning",
  hintAfter: " center.",
  primaryCta: "Deploy Now",
  secondaryCta: "Documentation"
};

export const HeroSection = () => {
  return <section className={"relative flex flex-1 overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24"}>
  <div className={"absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_35%)]"} />
  <div className={"mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"}>
    <div className={"text-center lg:text-left"}>
      <div className={"inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur"}>
        <span className={"h-2 w-2 rounded-full bg-emerald-500"} />
        Bubble development agency for modern product teams
      </div>
      <h1 className={"mt-6 max-w-3xl text-[38px] font-bold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[72px]"}>Build Fast</h1>
      <p className={"mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]"}>We create polished Bubble experiences for agencies that need to ship faster, look sharper, and deliver real results for clients.</p>
      <div className={"mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start sm:gap-4"}>
        <Button className="h-11 rounded-lg px-6 shadow-sm">Start a Project</Button>
        <Button variant="outline" className="h-11 rounded-lg px-6">See Case Studies</Button>
      </div>
      <div className={"mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start"}>
        <span>Fast launches</span>
        <span>Clean handoffs</span>
        <span>API integrations</span>
      </div>
    </div>
    <div className={"relative"}>
      <div className={"absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10 blur-2xl"} />
      <div className={"relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-2xl backdrop-blur"}>
        <div className={"flex items-center gap-2 border-b border-border/60 pb-4"}>
          <Triangle className={"h-4 w-4 text-primary"} />
          <div className={"h-2.5 w-2.5 rounded-full bg-emerald-500"} />
          <div className={"h-2.5 w-2.5 rounded-full bg-amber-500"} />
          <div className={"h-2.5 w-2.5 rounded-full bg-rose-500"} />
        </div>
        <div className={"grid gap-4 py-6"}>
          <div className={"rounded-2xl border border-border/60 bg-muted/40 p-4"}>
            <div className={"text-sm font-medium text-foreground"}>Strategy, design, and build</div>
            <div className={"mt-2 text-sm leading-relaxed text-muted-foreground"}>A clean delivery process for agency teams that need production-ready results without the usual drag.</div>
          </div>
          <div className={"grid gap-4 sm:grid-cols-2"}>
            <div className={"rounded-2xl border border-border/60 bg-background p-4"}>
              <div className={"text-2xl font-semibold tracking-tight"}>2-4 weeks</div>
              <div className={"mt-1 text-sm text-muted-foreground"}>Typical launch window</div>
            </div>
            <div className={"rounded-2xl border border-border/60 bg-background p-4"}>
              <div className={"text-2xl font-semibold tracking-tight"}>99%</div>
              <div className={"mt-1 text-sm text-muted-foreground"}>Responsive handoff quality</div>
            </div>
          </div>
          <div className={"rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-emerald-500/10 p-4"}>
            <div className={"text-sm font-medium text-foreground"}>Ideal for</div>
            <div className={"mt-2 text-sm leading-relaxed text-muted-foreground"}>Agencies launching client portals, MVPs, internal tools, and marketing sites with a premium feel.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;};