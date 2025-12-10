import HeroSection from '../src/components/HeroSection';
import MarketPlayersSection from '../src/components/MarketPlayersSection';
import ProcessSolutionsSection from '../src/components/ProcessSolutionsSection';
import MaxTifiSection from '../src/components/MaxTifiSection';
import SustainabilitySection from '../src/components/SustainabilitySection';
import ContactExpertiseSection from '../src/components/ContactExpertiseSection';
import CertificationsSection from '../src/components/CertificationsSection';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarketPlayersSection />
      <ProcessSolutionsSection />
      <MaxTifiSection />
      <SustainabilitySection />
      <ContactExpertiseSection />
      <CertificationsSection />
      <Footer />
    </>
  );
}
