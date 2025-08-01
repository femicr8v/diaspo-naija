"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { newsletterContent } from "@/lib/constant";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-white/20 blur-lg"></div>
        <div className="absolute bottom-5 left-5 w-16 h-16 rounded-full bg-white/15 blur-md"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-white/10 blur-sm"></div>
      </div>

      <div className="container relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4 text-white">
            {newsletterContent.title}
          </h2>
          <p className="text-lg mb-8 text-white/90 font-roboto">
            {newsletterContent.subtitle}
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              placeholder={newsletterContent.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/95 text-foreground border-0 focus:ring-2 focus:ring-white/50 placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90 border-0 font-semibold"
            >
              {newsletterContent.buttonText}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
