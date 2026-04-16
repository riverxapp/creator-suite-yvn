import { ThemeToggle } from "@/components/theme/theme-toggle";

const brandName = "Panda";

export const Navbar = () => {
  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-12">
    <a href="#top" className="text-lg font-bold tracking-tight text-foreground">{brandName}

      </a>
    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
      <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Services</a>
      <a href="#work" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Work</a>
      <a href="#process" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Process</a>
      <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
    </nav>
    <div className="flex items-center gap-2">
      <a href="#contact" className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex">
        Start a project
      </a>
      <a href="/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
        Log in
      </a>
      <a href="/signup" className={"rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex"}>
        Sign up
      </a>
      <ThemeToggle />
    </div>
  </div>
  <nav aria-label="Primary mobile" className="border-t border-border/60 md:hidden">
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto px-6 py-3 sm:px-10 lg:px-12">
      <a href="#services" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Services</a>
      <a href="#work" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Work</a>
      <a href="#process" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Process</a>
      <a href="#contact" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
      <a href="/login" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Log in</a>
      <a href="/signup" className="whitespace-nowrap rounded-full border border-border px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Sign up</a>
    </div>
  </nav>
</header>;};