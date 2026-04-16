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
  return (
    <section className={"flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16"}>
      <h1 className={"max-w-3xl text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[48px] lg:text-[64px]"}>Build Fast

      </h1>
      <p className={"mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]"}>We design, develop, and ship conversion-focused websites and product interfaces that help agencies win better clients and move faster.

      </p>
      <p className={"mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]"}>From landing pages to full-scale product builds, we turn ideas into responsive, high-performing experiences that look sharp and feel effortless.





      </p>
      <div className={"mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"}>
        <Button className="h-11 gap-2 rounded-lg px-5">Start a Project


        </Button>
        <Button variant="outline" className="h-11 rounded-lg px-5">View Our Work

        </Button>
      </div>
    </section>);

};