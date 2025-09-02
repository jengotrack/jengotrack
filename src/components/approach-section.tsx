"use client";

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Zap, Users, Layers } from 'lucide-react';

const approaches = [
  {
    icon: Zap,
    title: "Lean Methods",
    subtitle: "From idea to MVP fast",
    description: "We embrace rapid iteration and continuous feedback. Build, test, learn, repeat. Our lean approach ensures we deliver value quickly while minimizing waste and maximizing learning.",
    features: ["Rapid prototyping", "MVP-first development", "Continuous iteration", "Fast time-to-market"]
  },
  {
    icon: Users,
    title: "User-Centered",
    subtitle: "Products shaped by real users",
    description: "Every feature starts with user research. We deeply understand pain points, validate assumptions, and design solutions that users actually want and need.",
    features: ["User research & interviews", "Usability testing", "Feedback-driven design", "Human-centered approach"]
  },
  {
    icon: Layers,
    title: "Scalable Tech",
    subtitle: "Modern stacks built to grow",
    description: "We build on proven, modern technology stacks that can scale with your business. Clean architecture, robust infrastructure, and maintainable code from day one.",
    features: ["Modern tech stacks", "Scalable architecture", "Clean, maintainable code", "Future-proof solutions"]
  }
];

export function ApproachSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We believe in building products the right way. Fast, user-focused, and built to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-neutral-200 hover:border-orange/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon & Header */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange/20 transition-colors duration-300">
                        <approach.icon className="h-8 w-8 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                          {approach.title}
                        </h3>
                        <p className="text-orange font-medium">
                          {approach.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed text-center">
                      {approach.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {approach.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                          <span className="text-neutral-600 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-neutral-light rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exciting challenges and passionate teams to work with. 
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hello@jengotrack.com"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="/about"
                className="border border-orange text-orange hover:bg-orange hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}