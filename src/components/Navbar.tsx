import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              NeuroNotes
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/features" className="hover:text-gray-600">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-gray-600">
                Pricing
              </Link>
              <Link href="/faq" className="hover:text-gray-600">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 