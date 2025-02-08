import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-secondary/20 bg-background py-8">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/features" className="text-foreground/70 hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-foreground/70 hover:text-foreground">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-foreground/70 hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-foreground/70 hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-foreground/70 hover:text-foreground">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-foreground/70 hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-foreground/70 hover:text-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t border-secondary/20 pt-8">
        <p className="text-center text-sm text-foreground/70">
          © {new Date().getFullYear()} NeuronNotes. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 