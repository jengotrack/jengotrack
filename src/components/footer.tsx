"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/jengotrack_trimmed_large.png"
                alt="JengoTrack"
                width={230}
                height={150}
                className="h-14 w-auto object-contain"
                style={{ filter: 'brightness(1.4) contrast(1.6)' }}
              />
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Transforming complex challenges into practical, usable products. 
              We build simply, move fast, and focus on lasting impact.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Get in Touch</h4>
            <div className="space-y-2">
              <Link 
                href="mailto:hello@jengotrack.com"
                className="flex items-center space-x-2 text-neutral-300 hover:text-orange transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>hello@jengotrack.com</span>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <Link 
                href="#" 
                className="text-neutral-300 hover:text-orange transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-neutral-300 hover:text-orange transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-neutral-300 hover:text-orange transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Stay Updated</h4>
            <p className="text-neutral-300 text-sm">
              Stay updated on what we&apos;re building.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-orange hover:bg-orange-dark text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-neutral-600" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-400 text-sm">
            © 2024 JengoTrack. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-neutral-400 hover:text-orange transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-orange transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}