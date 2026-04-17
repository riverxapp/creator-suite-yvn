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
  return <section className={"relative flex flex-1 overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24"}><div className={"mx-auto flex w-full max-w-4xl flex-col items-center text-center"}>
    


      
    <h1 className={"mt-6 max-w-3xl text-[38px] font-bold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[72px]"}>Build Fast</h1>
    <p className={"mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]"}>We create polished Bubble experiences for agencies that need to ship faster, look sharper, and deliver real results for clients.</p>
    <div className={"mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"}>
      <Button className="h-11 rounded-lg px-6 shadow-sm">Start a Project</Button>
      <Button variant="outline" className="h-11 rounded-lg px-6">See Case Studies</Button>
    </div>
    <div className={"mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"}>
      <span>Fast launches</span>
      <span>Clean handoffs</span>
      <span>API integrations</span>
    </div>
  </div>


  </section>;
































};