"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Rocket, TrendingUp, Users } from 'lucide-react';

const timelineSteps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Identifying transparency gaps in construction",
    year: "2023"
  },
  {
    icon: Rocket,
    title: "Prototype",
    description: "Building MVP with real user feedback",
    year: "2024"
  },
  {
    icon: TrendingUp,
    title: "Launch",
    description: "Going live with initial user base",
    year: "2024"
  },
  {
    icon: Users,
    title: "Growth",
    description: "Scaling across multiple projects",
    year: "2025"
  }
];

export function CaseStudySection() {
  return (
    <section className="bg-orange text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          className="absolute inset-0 h-full w-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="dots-pattern" 
              width="40" 
              height="40" 
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From Idea to Impact
              </motion.h2>
              
              <motion.p 
                className="text-xl leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Jengo started with a simple mission: bring transparency to construction 
                projects for diaspora communities. Today, it's evolving into a platform 
                trusted by builders, owners, and investors alike.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-heading font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Projects Tracked</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-heading font-bold mb-2">₦2B+</div>
                  <div className="text-sm opacity-90">In Project Value</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-orange hover:bg-neutral-100 group"
              >
                <Link 
                  href="https://jengo.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Visit Jengo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-12">
                Our Journey
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-white/30"></div>
                
                {/* Timeline Steps */}
                <div className="space-y-8">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                      viewport={{ once: true }}
                    >
                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full text-orange">
                        <step.icon className="h-8 w-8" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-heading font-bold">
                            {step.title}
                          </h4>
                          <span className="text-sm bg-white/20 px-2 py-1 rounded">
                            {step.year}
                          </span>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
