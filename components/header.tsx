import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="font-sans font-bold text-2xl md:text-3xl text-primary">Reppard's Landscaping</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </Link>
          <Link
            href="https://blog.reppards-landscaping.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
