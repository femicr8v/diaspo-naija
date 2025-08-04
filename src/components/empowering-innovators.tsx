"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { communitySection } from "@/lib/constant";

export function EmpoweringInnovators() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Empowering{" "}
            <span className="text-primary relative">
              Innovators
              <motion.span
                className="text-2xl absolute -top-1 -right-3 text-primary"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✦
              </motion.span>
            </span>
            .
            <br />
            Driving <span className="text-primary">Impact</span>
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {communitySection.map((item, index) => (
            <motion.div
              key={item.title}
              className={`space-y-6 ${
                item.title === "Technology"
                  ? "flex flex-col-reverse max-lg:flex-col"
                  : "flex flex-col"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={`object-cover ${
                      item.title === "Technology" && "pb-6 max-lg:pb-0"
                    }`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
