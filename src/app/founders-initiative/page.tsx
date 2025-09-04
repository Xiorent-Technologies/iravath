import FoundersHeroSection from '@/components/sections/FoundersHeroSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function FoundersInitiativePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FoundersHeroSection />
        <FeaturesSection />
        <TestimonialsSection />

      </main>
      <Footer />
    </div>
  );
}
