import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Smart AI Analysis",
    href: "/features/ai-analysis",
    description: "Get instant AI-powered analysis of your video content",
  },
  {
    title: "Time Efficiency",
    href: "/features/time-efficiency",
    description: "Save hours with automated note generation",
  },
  {
    title: "Personalized Learning",
    href: "/features/personalized",
    description: "Customized study materials tailored to your needs",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to make the most of our platform",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest updates and educational insights",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get help when you need it",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">NeuronNotes</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:bg-secondary/10">Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 bg-background md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                      className="hover:bg-secondary/10"
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:bg-secondary/10">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 bg-background md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map((resource) => (
                    <ListItem
                      key={resource.title}
                      title={resource.title}
                      href={resource.href}
                      className="hover:bg-secondary/10"
                    >
                      {resource.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="text-foreground hover:bg-secondary/10 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-secondary/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-foreground hover:bg-secondary/10">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10",
            "text-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-foreground/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}); 