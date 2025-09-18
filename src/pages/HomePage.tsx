import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import PremiumServicesSection from '../components/home/PremiumServicesSection';
import EmpoweringInnovation from '../components/home/EmpoweringInnovation';
import ProfessionalStats from '../components/home/ProfessionalStats';
import Industries from '../components/home/Industries';

import Partners from '../components/home/Partners';
import Testimonials from '../components/home/Testimonials';
import GlobalCertifications from '../components/home/GlobalCertifications';
import CTA from '../components/home/CTA';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Atlas Defenders | IT & Cybersecurity Services';
  }, []);

  return (
    <>
      <Hero />
      <PremiumServicesSection />
      <EmpoweringInnovation />
      <Industries />
      <Partners />
      <ProfessionalStats />
      <Testimonials />
      <GlobalCertifications />
      <CTA />
    </>
  );
};

export default HomePage;