"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-neutral-light relative overflow-hidden">
      {/* Blueprint Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg 
          className="absolute inset-0 h-full w-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="blueprint-grid" 
              width="50" 
              height="50" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 50 0 L 0 0 0 50" 
                fill="none" 
                stroke="#F97316" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Image
                  src="/jengotrack_cropped.png"
                  alt="JengoTrack"
                  width={189}
                  height={124}
                  className="h-16 w-auto object-contain"
                  style={{ filter: 'brightness(1.2) contrast(1.3)' }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We build digital products that{' '}
                <span className="text-orange">solve real-world problems</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-neutral-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                JengoTrack is a product development studio. Our flagship product, 
                Jengo, is transforming how construction projects are managed.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-orange hover:bg-orange-dark text-white text-lg px-8 py-6 rounded-lg group"
              >
                <Link 
                  href="https://jengo.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Explore Jengo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Product Mockup Placeholder */}
              <div className="bg-white rounded-lg shadow-2xl p-8 border border-neutral-200">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-8 bg-orange rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="space-y-4">
                    <div className="h-4 bg-charcoal rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-300 rounded w-1/2"></div>
                    <div className="h-3 bg-neutral-300 rounded w-2/3"></div>
                  </div>
                  
                  {/* Chart/Graph Area */}
                  <div className="h-32 bg-neutral-100 rounded-lg flex items-end justify-center space-x-2 p-4">
                    {[40, 70, 45, 85, 60].map((height, index) => (
                      <div 
                        key={index}
                        className="bg-orange rounded-t w-8 transition-all duration-1000 ease-out"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Bottom Controls */}
                  <div className="flex space-x-4">
                    <div className="flex-1 h-10 bg-orange rounded flex items-center justify-center">
                      <div className="w-16 h-2 bg-white rounded"></div>
                    </div>
                    <div className="w-10 h-10 bg-neutral-200 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-neutral-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange rounded-full opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-charcoal rounded-full opacity-10"
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