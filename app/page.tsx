import {
  CTASection,
  Features,
  Hero,
  ProductPreview,
  Testimonial,
} from '@/features/home/components';

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
