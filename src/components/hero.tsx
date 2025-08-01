"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center lg:items-end overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 lg:pb-20">
        <motion.div
          className="max-w-4xl text-left text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-space-grotesk leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Community for <span className="text-green-400">Movers</span>,{" "}
            <span className="text-green-400">Shakers</span>, and{" "}
            <span className="text-green-400">Creators</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Global Nigerian Community brings together forward-thinkers,
            innovators, and changemakers from across the tech industry. We're
            building a community where ideas thrive, projects take flight, and
            technology meets purpose. Join us in shaping the future of tech and
            making a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3"
            >
              <Link
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "text-black hover:text-white"
                )}
                href="/auth/signup"
              >
                Join The Community →
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
