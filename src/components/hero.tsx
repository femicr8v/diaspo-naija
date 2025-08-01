"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/constant";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center nigerian-hero-bg pt-16">
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary/40 to-primary/20"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-primary/30 to-primary/10"></div>
      </div>
      <div className="container relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-bold font-space-grotesk sm:text-6xl nigerian-text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href={heroContent.primaryCTAHref}>
                {heroContent.primaryCTA}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={heroContent.secondaryCTAHref}>
                {heroContent.secondaryCTA}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
