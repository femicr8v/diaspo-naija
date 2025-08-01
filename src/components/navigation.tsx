"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navLinks, footerContent } from "@/lib/constant";
import { Button, buttonVariants } from "@/components/ui/button";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold font-space-grotesk">
            {footerContent.brandName}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.href}
                href={navlink.href}
                className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
              >
                {navlink.label}
              </Link>
            ))}
            <Link
              href="/auth/signup"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "bg-red-600 hover:bg-red-700"
              )}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="container py-4 space-y-4">
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.href}
                  href={navlink.href}
                  className="block text-base font-medium text-gray-600 hover:text-red-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {navlink.label}
                </Link>
              ))}
              <Link
                href="/auth/signup"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "bg-red-600 hover:bg-red-700 w-full"
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
