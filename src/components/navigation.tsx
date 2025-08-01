"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constant";
import { useState, useEffect } from "react";
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

  // Effect to blur main content when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      // Prevent scrolling when drawer is open
      document.body.style.overflow = "hidden";

      // Find and blur main content elements
      const mainContent = document.querySelector("main");
      const nextRoot = document.querySelector("#__next");
      const bodyChildren = Array.from(document.body.children);

      bodyChildren.forEach((child) => {
        // Skip nav, scripts, styles, and our drawer
        if (
          child.tagName.toLowerCase() !== "nav" &&
          child.tagName.toLowerCase() !== "script" &&
          child.tagName.toLowerCase() !== "style" &&
          child.id !== "mobile-drawer" &&
          !child.classList.contains("mobile-drawer")
        ) {
          child.style.filter = "blur(3px)";
          child.style.transition = "filter 0.3s ease-in-out";
        }
      });
    } else {
      document.body.style.overflow = "";

      // Remove blur from all elements
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((child) => {
        child.style.filter = "";
        child.style.transition = "";
      });
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((child) => {
        child.style.filter = "";
        child.style.transition = "";
      });
    };
  }, [mobileOpen]);

  return (
    <>
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
                "text-2xl font-bold font-space-grotesk transition-colors duration-300"
              )}
            >
              🌍{" "}
              <span
                className={cn(
                  scrolled ? "nigerian-text-gradient" : "text-white"
                )}
              >
                DiaspoNaija
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.href}
                  href={navlink.href}
                  className={cn(
                    "text-base font-medium font-roboto transition-colors",
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
                    : "bg-white text-black hover:text-white",
                  "px-6"
                )}
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden",
                scrolled ? "text-primary" : "text-white"
              )}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer - Completely outside nav for proper fixed positioning */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-[60]"
            onClick={() => setMobileOpen(false)}
          />

          {/* Side Drawer */}
          <div
            id="mobile-drawer"
            className={cn(
              "mobile-drawer lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-background border-l border-primary/20 shadow-xl z-[70]",
              "transform transition-transform duration-300 ease-in-out",
              mobileOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{ filter: "none !important" }}
          >
            <div className="flex flex-col h-full">
              {/* Header - Just close button */}
              <div className="flex items-center justify-end p-6 border-b border-primary/20">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-6">
                {navLinks.map((navlink) => (
                  <Link
                    key={navlink.href}
                    href={navlink.href}
                    className="block text-lg font-medium font-roboto text-muted-foreground hover:text-primary transition-colors py-2 text-right"
                    onClick={() => setMobileOpen(false)}
                  >
                    {navlink.label}
                  </Link>
                ))}

                {/* Join Button - moved closer to links */}
                <div className="pt-4">
                  <Link
                    href="/auth/signup"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
