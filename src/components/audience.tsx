"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { audienceBlocks } from "@/lib/constant";

export function Audience() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {audienceBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full nigerian-card-bg border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="font-space-grotesk text-xl text-foreground">
                    {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {block.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="flex items-center gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: benefitIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
