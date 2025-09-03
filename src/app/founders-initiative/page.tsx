import FoundersHeroSection from '@/components/sections/FoundersHeroSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function FoundersInitiativePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FoundersHeroSection />
      </main>
      <Footer />
    </div>
  );
}
