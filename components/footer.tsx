import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Reppard's Landscaping</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Professional landscape architecture services creating beautiful outdoor spaces since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hardscape
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Softscape
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Water Features
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Outdoor Living
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#reviews"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.reppards-landscaping.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Reppard's Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
