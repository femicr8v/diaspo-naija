"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navLinks, footerContent } from "@/lib/constant";
import { Button, buttonVariants } from "@/components/ui/button";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold font-space-grotesk transition-colors duration-300",
              scrolled ? "nigerian-text-gradient" : "text-white"
            )}
          >
            {footerContent.brandName}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.href}
                href={navlink.href}
                className={cn(
                  "text-sm font-medium font-roboto transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                )}
              >
                {navlink.label}
              </Link>
            ))}
            <Link
              href="/auth/signup"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                scrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "md:hidden",
              scrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-lg">
            <div className="container py-4 space-y-4">
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.href}
                  href={navlink.href}
                  className="block text-base font-medium font-roboto text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {navlink.label}
                </Link>
              ))}
              <Link
                href="/auth/signup"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
