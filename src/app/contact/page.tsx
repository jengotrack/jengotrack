import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - JengoTrack",
  description: "Get in touch with JengoTrack. Let&apos;s discuss how we can help bring your product vision to life.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-neutral-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
              Let&apos;s Build Something Amazing
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ready to transform your ideas into practical, usable products? 
              We&apos;d love to hear about your project and explore how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">Email Us</h3>
                        <Link 
                          href="mailto:hello@jengotrack.com"
                          className="text-orange hover:text-orange-dark transition-colors"
                        >
                          hello@jengotrack.com
                        </Link>
                      </div>
                    </div>

                    <div className="border-t border-neutral-200 pt-6">
                      <h3 className="font-medium text-charcoal mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <Link 
                          href="#"
                          className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link 
                          href="#"
                          className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link 
                          href="#"
                          className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-4 text-neutral-600">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p>Response within 24 hours during business days</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p>Initial consultation to understand your needs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p>Detailed proposal with timeline and approach</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Send Us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="mvp">MVP Development</option>
                      <option value="consulting">Product Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-orange hover:bg-orange-dark text-white"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}