import CTASection from '@/components/home/CTASection';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import ProductPreview from '@/components/home/ProductPreview';
import Testimonial from '@/components/home/Testimonial';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <ProductPreview />
      <Features />
      <Testimonial />
      <CTASection />
    </div>
  );
}
