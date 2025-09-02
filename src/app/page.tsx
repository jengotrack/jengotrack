import { HeroSection } from '@/components/hero-section';
import { ProductsSection } from '@/components/products-section';
import { CaseStudySection } from '@/components/case-study-section';
import { ApproachSection } from '@/components/approach-section';
import { AboutSection } from '@/components/about-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <CaseStudySection />
      <ApproachSection />
      <AboutSection />
    </div>
  );
}