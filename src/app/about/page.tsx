import { AboutSection } from '@/components/about-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - JengoTrack Systems",
  description: "Learn about JengoTrack Systems' mission to transform complex challenges into practical, usable products. We build simply, move fast, and focus on lasting impact.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-neutral-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            About JengoTrack Systems
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We exist to transform complex challenges into practical, usable products. 
            Built on a foundation of transparency, innovation, and human-centered design.
          </p>
        </div>
      </section>
      <AboutSection showHeading={false} />
    </div>
  );
}