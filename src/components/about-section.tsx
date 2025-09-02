"use client";

import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="bg-neutral-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Built for{' '}
                <span className="text-orange">lasting impact</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-neutral-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                JengoTrack exists to transform complex challenges into practical, 
                usable products. We build simply, move fast, and focus on lasting impact.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">
                    Mission-Driven
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Every product we build serves a real purpose. We don't build for the sake of building—we solve problems that matter.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">
                    Innovation First
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We embrace new technologies and methodologies, but always in service of better user experiences and outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">
                    Human-Centered
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Technology serves people, not the other way around. We design with empathy and build with purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-neutral-200"
            >
              <blockquote className="text-lg text-neutral-700 italic leading-relaxed">
                "The best products don't just work—they make people's lives genuinely better. 
                That's what we strive for with every line of code."
              </blockquote>
              <div className="mt-4 text-sm text-neutral-500">
                — JengoTrack Team
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orange rounded-full mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-charcoal rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-neutral-300 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-orange mb-1">5+</div>
                      <div className="text-xs text-neutral-600">Years Experience</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-orange mb-1">50+</div>
                      <div className="text-xs text-neutral-600">Projects Delivered</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-orange mb-1">100%</div>
                      <div className="text-xs text-neutral-600">Client Satisfaction</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-orange mb-1">24/7</div>
                      <div className="text-xs text-neutral-600">Support Available</div>
                    </div>
                  </div>
                  
                  {/* Process Flow */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div className="flex-1 h-2 bg-orange rounded"></div>
                      <div className="text-xs text-neutral-600">Discover</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div className="flex-1 h-2 bg-orange rounded"></div>
                      <div className="text-xs text-neutral-600">Design</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div className="flex-1 h-2 bg-orange rounded"></div>
                      <div className="text-xs text-neutral-600">Develop</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 text-xs font-bold">4</div>
                      <div className="flex-1 h-2 bg-neutral-200 rounded"></div>
                      <div className="text-xs text-neutral-400">Deploy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-orange rounded-full opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-charcoal rounded-full opacity-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
