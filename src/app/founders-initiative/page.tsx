import FoundersHeroSection from '@/components/sections/FoundersHeroSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CommimentSection from '@/components/sections/CommitmentSection';

export default function FoundersInitiativePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FoundersHeroSection />
        <FeaturesSection />
        <CommimentSection />

      </main>
      <Footer />
    </div>
  );
}
