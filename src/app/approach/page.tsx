import { ApproachSection } from '@/components/approach-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Approach - JengoTrack",
  description: "Learn about JengoTrack's product development methodology. We use lean methods, user-centered design, and scalable technology.",
};

export default function ApproachPage() {
  return (
    <div className="pt-16">
      <section className="bg-neutral-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            Our Approach
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            How we build products that last. Our methodology combines lean development 
            practices with deep user research and modern technology stacks.
          </p>
        </div>
      </section>
      <ApproachSection />
    </div>
  );
}