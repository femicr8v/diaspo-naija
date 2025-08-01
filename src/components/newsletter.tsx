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
    <section className="py-20 bg-red-600 text-white">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            {newsletterContent.title}
          </h2>
          <p className="text-lg mb-8 text-red-100">
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
              className="bg-white text-gray-900 border-0 focus:ring-2 focus:ring-red-300"
              required
            />
            <Button
              type="submit"
              className="bg-gray-900 text-white hover:bg-gray-800 border-0"
            >
              {newsletterContent.buttonText}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
