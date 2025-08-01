"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { mentorshipCTA } from "@/lib/constant";

export function MentorshipCTA() {
  return (
    <section
      id="mentorship"
      className="py-20 nigerian-primary-gradient text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/15 blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/10 blur-md"></div>
      </div>

      <div className="container relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk sm:text-4xl mb-4 text-white">
            {mentorshipCTA.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 font-roboto">
            {mentorshipCTA.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Link href={mentorshipCTA.mentorHref}>
                {mentorshipCTA.mentorCTA}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary font-semibold"
            >
              <Link href={mentorshipCTA.menteeHref}>
                {mentorshipCTA.menteeCTA}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
