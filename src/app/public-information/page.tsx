import PublicInfoHeroSection from '@/components/sections/PublicInfoHeroSection';
import WhatThisMeansSection from '@/components/sections/WhatThisMeansSection';
import UpcomingUpdatesSection from '@/components/sections/UpcomingUpdatesSection';
import ContactUsSection from '@/components/sections/ContactUsSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PublicInfoInitiativePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PublicInfoHeroSection />
        <WhatThisMeansSection />
        <UpcomingUpdatesSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
