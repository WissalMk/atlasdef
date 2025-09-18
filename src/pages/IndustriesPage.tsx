import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartPulse, LandPlot, Building } from 'lucide-react';

const industries = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise',
    description: 'Large organizations face complex security challenges with extensive networks, diverse technologies, and distributed workforces. We provide comprehensive security solutions that address these challenges with enterprise-grade firewalls, advanced threat protection, and zero-trust architecture.',
    challenges: [
      'Complex hybrid infrastructure spanning on-premises and cloud',
      'Large attack surface requiring comprehensive protection',
      'Regulatory compliance across multiple jurisdictions',
      'Need for centralized security management'
    ],
    solutions: [
      'Enterprise-grade firewalls with unified threat management',
      'Comprehensive SIEM and SOC services',
      'Zero-trust network architecture implementation',
      'Advanced endpoint protection with EDR capabilities',
      'Security awareness training for employees'
    ],
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'sme',
    icon: Building,
    title: 'Small and Medium Enterprises',
    description: 'SMEs require cost-effective security solutions that provide robust protection without overwhelming their resources. We deliver tailored security packages that offer essential protection with scalability to grow with your business.',
    challenges: [
      'Limited IT and security resources',
      'Budget constraints for security implementation',
      'Vulnerability to targeted attacks',
      'Need for business continuity and disaster recovery'
    ],
    solutions: [
      'Managed security services with predictable costs',
      'Cloud-based security solutions with minimal infrastructure',
      'Automated threat detection and response',
      'Basic security awareness training',
      'Simplified compliance implementation'
    ],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Educational institutions handle sensitive student data and research information while maintaining open, collaborative environments. We help balance security with accessibility through specialized education-focused solutions.',
    challenges: [
      'Balancing security with open access for learning',
      'Protection of sensitive student data and research',
      'Securing diverse networks with BYOD policies',
      'Managing limited security budgets'
    ],
    solutions: [
      'Network segmentation for student, faculty, and administrative systems',
      'Data protection solutions for research and student information',
      'Secure Wi-Fi with advanced authentication',
      'Web filtering and application control',
      'Security awareness programs for students and staff'
    ],
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Healthcare organizations require specialized security to protect patient data while ensuring system availability for critical care. We deliver HIPAA-compliant solutions that safeguard patient information and medical systems.',
    challenges: [
      'Protection of sensitive patient health information (PHI)',
      'Regulatory compliance with HIPAA and other standards',
      'Security for connected medical devices (IoMT)',
      'High availability requirements for critical systems'
    ],
    solutions: [
      'HIPAA-compliant security architecture',
      'Medical device security and network segmentation',
      'Secure telemedicine infrastructure',
      'Data encryption for PHI protection',
      'Disaster recovery solutions for critical systems'
    ],
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'government',
    icon: LandPlot,
    title: 'Government',
    description: 'Government agencies face unique security challenges with critical infrastructure and sensitive data. We provide high-security solutions that meet strict compliance requirements and protect against advanced threats.',
    challenges: [
      'Protection of critical infrastructure and sensitive data',
      'Compliance with strict government regulations',
      'Defense against nation-state threats and APTs',
      'Need for secure citizen service delivery'
    ],
    solutions: [
      'Advanced threat protection with air-gapped options',
      'Compliance with NIST, FISMA, and other frameworks',
      'Secure e-government services and platforms',
      'Critical infrastructure protection',
      'Insider threat detection and prevention'
    ],
    image: 'https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const IndustriesPage = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | Atlas Defenders';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-6"
          >
            Industry-Specific Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We understand that each industry faces unique security challenges.
            Our specialized solutions are tailored to meet the specific needs of various sectors.
          </motion.p>
        </div>
      </section>

      {/* Industries Content */}
      <section className="py-16">
        <div className="container">
          {industries.map((industry, index) => {
            const { id, icon: Icon, title, description, challenges, solutions, image } = industry;
            const isEven = index % 2 === 0;
            
            return (
              <div key={id} id={id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${!isEven && 'lg:flex-row-reverse'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                        <Icon size={24} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                    </div>
                    <p className="text-text-muted mb-6 text-lg">{description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-primary">Key Challenges</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        {challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">Our Solutions</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        {solutions.map((solution, i) => (
                          <li key={i}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={isEven ? 'lg:order-last' : 'lg:order-first'}
                  >
                    <img 
                      src={image}
                      alt={title}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    />
                  </motion.div>
                </div>
                {index < industries.length - 1 && <hr className="border-gray-200" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            Looking for a Customized Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Our team of experts can develop a tailored security solution that addresses your organization's
            specific challenges, regardless of your industry or size.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="btn bg-accent hover:bg-accent/90 text-white">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;