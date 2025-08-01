"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constant";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk nigerian-text-gradient sm:text-4xl">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full nigerian-card-bg border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">
                    - {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
