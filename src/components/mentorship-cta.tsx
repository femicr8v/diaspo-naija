"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { mentorshipCTA } from "@/lib/constant";

export function MentorshipCTA() {
  return (
    <section
      id="mentorship"
      className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk sm:text-4xl mb-4">
            {mentorshipCTA.title}
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            {mentorshipCTA.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href={mentorshipCTA.mentorHref}>
                {mentorshipCTA.mentorCTA}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-gray-900"
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
