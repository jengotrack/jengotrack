"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function ProductsSection() {
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
            Our Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We focus on building products that make a real difference. 
            Starting with construction project management, expanding to new verticals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jengo - Flagship Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-2 border-orange shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 h-full">
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-2xl font-heading font-bold text-charcoal">
                          Jengo
                        </h3>
                        <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          Flagship Product
                        </span>
                      </div>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        Jengo brings transparency, accountability, and simplicity to construction projects. 
                        From diaspora owners to project managers on the ground, Jengo enables trust in every build.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                        <p className="text-neutral-600">Real-time project tracking and updates</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                        <p className="text-neutral-600">Transparent financial management</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                        <p className="text-neutral-600">Seamless stakeholder communication</p>
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="bg-orange hover:bg-orange-dark text-white group"
                    >
                      <Link 
                        href="https://jengo.co.uk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <span>View Full Showcase</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>

                  {/* Product Mockups */}
                  <div className="flex-1 relative">
                    <div className="relative max-w-md mx-auto">
                      {/* Desktop Mockup */}
                      <div className="bg-neutral-100 rounded-lg p-6 shadow-lg">
                        <div className="bg-white rounded border border-neutral-200 overflow-hidden">
                          {/* Browser Header */}
                          <div className="bg-neutral-100 px-4 py-2 border-b border-neutral-200">
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                              <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-neutral-500">
                                jengo.co.uk
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="w-20 h-6 bg-orange rounded"></div>
                              <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-neutral-100 rounded p-3 text-center">
                                <div className="w-8 h-8 bg-orange rounded mx-auto mb-2"></div>
                                <div className="h-2 bg-neutral-300 rounded w-3/4 mx-auto"></div>
                              </div>
                              <div className="bg-neutral-100 rounded p-3 text-center">
                                <div className="w-8 h-8 bg-neutral-300 rounded mx-auto mb-2"></div>
                                <div className="h-2 bg-neutral-300 rounded w-3/4 mx-auto"></div>
                              </div>
                              <div className="bg-neutral-100 rounded p-3 text-center">
                                <div className="w-8 h-8 bg-neutral-300 rounded mx-auto mb-2"></div>
                                <div className="h-2 bg-neutral-300 rounded w-3/4 mx-auto"></div>
                              </div>
                            </div>
                            
                            <div className="h-20 bg-neutral-50 rounded flex items-end justify-center space-x-1 p-2">
                              {[30, 60, 40, 80, 50].map((height, index) => (
                                <div 
                                  key={index}
                                  className="bg-orange rounded-t w-3"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Mockup */}
                      <div className="absolute -bottom-6 -right-6 w-20 bg-charcoal rounded-lg p-1 shadow-lg">
                        <div className="bg-white rounded overflow-hidden">
                          <div className="bg-orange h-1 w-full"></div>
                          <div className="p-2 space-y-1">
                            <div className="h-1 bg-neutral-300 rounded w-3/4"></div>
                            <div className="h-1 bg-neutral-300 rounded w-1/2"></div>
                            <div className="h-4 bg-neutral-100 rounded flex items-end justify-center space-x-0.5 p-0.5">
                              {[2, 4, 3, 5, 3].map((height, index) => (
                                <div 
                                  key={index}
                                  className="bg-orange rounded-t w-1"
                                  style={{ height: `${height * 2}px` }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coming Soon Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Coming Soon Card 1 */}
            <Card className="border border-neutral-200 opacity-60">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-heading font-semibold text-neutral-500">
                      Product 2
                    </h4>
                    <span className="bg-neutral-200 text-neutral-500 px-2 py-1 rounded text-xs">
                      Coming Soon
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-200 rounded w-full"></div>
                    <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-16 bg-neutral-100 rounded"></div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Card 2 */}
            <Card className="border border-neutral-200 opacity-60">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-heading font-semibold text-neutral-500">
                      Product 3
                    </h4>
                    <span className="bg-neutral-200 text-neutral-500 px-2 py-1 rounded text-xs">
                      Coming Soon
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-200 rounded w-full"></div>
                    <div className="h-3 bg-neutral-200 rounded w-2/3"></div>
                  </div>
                  <div className="h-16 bg-neutral-100 rounded"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
