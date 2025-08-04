"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constant";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-primary/20 shadow-xl z-[70]"
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
                  {navLinks.map((navlink, index) => (
                    <motion.div
                      key={navlink.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={navlink.href}
                        className="block text-xl font-medium font-roboto text-muted-foreground hover:text-primary transition-colors py-2 text-center"
                        onClick={() => setMobileOpen(false)}
                      >
                        {navlink.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Join Button - moved closer to links */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + navLinks.length * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href="/auth/signup"
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "bg-primary hover:bg-primary/90 text-primary-foreground w-full text-lg py-6"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      Join Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
