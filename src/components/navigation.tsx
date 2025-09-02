"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Approach', href: '/approach' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/jengotrack.png"
                alt="JengoTrack"
                width={200}
                height={200}
                className="h-12 w-12 object-contain"
                style={{ filter: 'brightness(1) contrast(1.2)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-orange transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-orange hover:bg-orange-dark text-white"
            >
              <Link href="https://jengo.co.uk" target="_blank" rel="noopener noreferrer">
                Explore Jengo
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-orange block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Button 
                asChild
                className="bg-orange hover:bg-orange-dark text-white w-full"
              >
                <Link href="https://jengo.co.uk" target="_blank" rel="noopener noreferrer">
                  Explore Jengo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}