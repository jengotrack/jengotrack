import { ProductsSection } from '@/components/products-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Products - JengoTrack Systems",
  description: "Explore JengoTrack Systems' product portfolio. Learn about Jengo, our flagship construction management platform, and upcoming products.",
};

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <section className="bg-neutral-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            Our Products
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We build digital products that solve real-world problems. Each product is designed 
            with our core values of transparency, efficiency, and user-centered design.
          </p>
        </div>
      </section>
      <ProductsSection showHeading={false} />
    </div>
  );
}