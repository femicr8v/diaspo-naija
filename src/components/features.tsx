"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/constant";

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-space-grotesk nigerian-text-gradient sm:text-4xl">
            Why Choose Our Platform
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full nigerian-card-bg border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 filter drop-shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
