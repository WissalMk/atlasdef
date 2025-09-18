import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Code, Users, Briefcase, BarChart, Award, Layers, 
  LayoutTemplate, Globe, Server, GraduationCap, LifeBuoy, Database, BarChart2,
  CheckCircle, XCircle, ChevronDown
} from 'lucide-react';

// Helper for Section Titles
const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{children}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const HoneycombGrid = ({ technologies }) => {
  const allLogos = Object.values(technologies).flat();
  const logosPerRow = 9;
  const hexWidth = 140;
  const hexHeight = 160;
  const verticalOverlap = 40;
  const horizontalSpacing = 4;
  const staggerOffset = (hexWidth / 2) + horizontalSpacing;

  const rows = [];
  for (let i = 0; i < allLogos.length; i += logosPerRow) {
    rows.push(allLogos.slice(i, i + logosPerRow));
  }

  const Hexagon = ({ logoSrc }) => (
    <div
      className="relative flex-shrink-0 flex items-center justify-center bg-white shadow-md transition-transform duration-300 hover:scale-110 hover:z-10"
      style={{
        width: `${hexWidth}px`,
        height: `${hexHeight}px`,
        margin: `0 ${horizontalSpacing}px`,
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
      }}
    >
      <img src={logoSrc} alt="Tech logo" className="max-h-14 max-w-24 object-contain" />
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center"
          style={{
            marginTop: rowIndex > 0 ? `-${verticalOverlap}px` : 0,
            transform: rowIndex % 2 !== 0 ? `translateX(${staggerOffset}px)` : 'translateX(0)'
          }}
        >
          {row.map((logo, logoIndex) => (
            <Hexagon key={logoIndex} logoSrc={logo} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Accordion for feature groups
const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => (
  <div className="border-t border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-3 text-blue-600" />
        <span className="font-semibold">{title}</span>
      </div>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
    >
      <div className="pb-4 pl-8">
        {children}
      </div>
    </motion.div>
  </div>
);

const WebDevelopmentPage = () => {
  const [openGroupId, setOpenGroupId] = useState(null);

  const handleAccordionClick = (groupId) => {
    setOpenGroupId(prevGroupId => (prevGroupId === groupId ? null : groupId));
  };

  const packages = [
    {
      id: 1,
      title: 'Starter CMS',
      oldPrice: '7,000 Dhs',
      newPrice: '5,500 Dhs',
      promo: 'Limited-time offer',
      isPopular: false,
      featureGroups: [
        { id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
          { name: 'Platform / CMS: WordPress, WooCommerce, Shopify', included: true },
          { name: 'Pages Included: Up to 5 pages', included: true },
          { name: 'Theme / Design: Premium pre-built theme installation', included: true },
        ]},
        { id: 2, title: 'Domain & Hosting', icon: Globe, features: [
          { name: 'Domain Name: Free for 1 year', included: true },
          { name: 'Hosting: Free for 1 year', included: true },
        ]},
        { id: 3, title: 'Training & Support', icon: GraduationCap, features: [
          { name: 'Training: Basic website management training', included: true },
          { name: 'Support: 15 days post-delivery', included: true },
        ]},
        { id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
          { name: 'SEO Optimization: Basic', included: true },
          { name: 'Performance Optimization', included: false },
        ]},
        { id: 5, title: 'Backup & Reliability', icon: Database, features: [
          { name: 'Backup', included: false },
          { name: 'CDN (Content Delivery Network)', included: false },
          { name: 'Load Balancer', included: false },
        ]},
        { id: 6, title: 'Security Features', icon: ShieldCheck, features: [
          { name: 'Free SSL/TLS Certificates for 1 year', included: true },
          { name: 'Web Application Firewall (WAF)', included: false },
          { name: 'Anti-DDoS Protection', included: false },
          { name: 'Reverse Proxy Server', included: false },
          { name: 'Database Security', included: false },
          { name: 'Vulnerability Analysis', included: false },
          { name: 'Identity & Access Management (IAM)', included: false },
          { name: 'Secret Management', included: false },
          { name: 'Protection Against Common Attacks', included: false },
        ]}
      ]
    },
    {
      id: 2,
      title: 'Professional Secure CMS',
      oldPrice: '15,000 Dhs',
      newPrice: '12,500 Dhs',
      promo: 'Save 2,500 Dhs!',
      isPopular: true,
      featureGroups: [
        { id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
          { name: 'Platform / CMS: WordPress, WooCommerce, Shopify', included: true },
          { name: 'Pages Included: Up to 10 pages', included: true },
          { name: 'Theme / Design: Premium pre-built theme installation', included: true },
        ]},
        { id: 2, title: 'Domain & Hosting', icon: Globe, features: [
          { name: 'Domain Name: Free for 1 year', included: true },
          { name: 'Hosting: Free for 1 year', included: true },
        ]},
        { id: 3, title: 'Training & Support', icon: GraduationCap, features: [
          { name: 'Training: Comprehensive website management training', included: true },
          { name: 'Support: 2 months post-delivery', included: true },
        ]},
        { id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
          { name: 'SEO Optimization: Advanced', included: true },
          { name: 'Performance Optimization: Basic optimization', included: true },
        ]},
        { id: 5, title: 'Backup & Reliability', icon: Database, features: [
          { name: 'Backup: Automated backups', included: true },
          { name: 'CDN (Content Delivery Network)', included: true },
          { name: 'Load Balancer', included: false },
        ]},
        { id: 6, title: 'Security Features', icon: ShieldCheck, features: [
          { name: 'Free SSL/TLS Certificates for 1 year', included: true },
          { name: 'Web Application Firewall (WAF)', included: true },
          { name: 'Anti-DDoS Protection', included: true },
          { name: 'Reverse Proxy Server', included: true },
          { name: 'Database Security: Basic database security', included: true },
          { name: 'Vulnerability Analysis', included: false },
          { name: 'Identity & Access Management (IAM)', included: false },
          { name: 'Secret Management', included: false },
          { name: 'Protection Against Common Attacks', included: false },
        ]}
      ]
    },
    {
      id: 3,
      title: 'Professional Custom Website',
      newPrice: 'Starting from 15,000 Dhs',
      promo: 'Intro price',
      isPopular: false,
      featureGroups: [
        { id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: Custom-built platform', included: true },
            { name: 'Pages Included: Up to 15 pages', included: true },
            { name: 'Theme / Design: Fully custom design & development', included: true },
        ]},
        { id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 3 years', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
        ]},
        { id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Full website management training', included: true },
            { name: 'Support: 2–3 months post-delivery', included: true },
        ]},
        { id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Advanced', included: true },
            { name: 'Performance Optimization: Advanced optimization', included: true },
        ]},
        { id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup: Automated backups', included: true },
            { name: 'CDN (Content Delivery Network)', included: true },
            { name: 'Load Balancer', included: true },
        ]},
        { id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF)', included: true },
            { name: 'Anti-DDoS Protection', included: true },
            { name: 'Reverse Proxy Server', included: true },
            { name: 'Database Security: Advanced database security', included: true },
            { name: 'Vulnerability Analysis: Basic vulnerability analysis', included: true },
            { name: 'Identity & Access Management (IAM)', included: false },
            { name: 'Secret Management', included: false },
            { name: 'Protection Against Common Attacks', included: false },
        ]}
      ]
    },
    {
      id: 4,
      title: 'Business Custom Website',
      newPrice: 'Custom Quote',
      promo: 'Contact for full TCO',
      isPopular: false,
      featureGroups: [
        { id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: Custom-built platform', included: true },
            { name: 'Pages Included: Fully custom, project-based', included: true },
            { name: 'Theme / Design: Fully custom, enterprise-grade', included: true },
        ]},
        { id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 3 years', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
        ]},
        { id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Full enterprise training', included: true },
            { name: 'Support: As per project scope', included: true },
        ]},
        { id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Advanced', included: true },
            { name: 'Performance Optimization: Enterprise-grade', included: true },
        ]},
        { id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup: High-availability backup & disaster recovery', included: true },
            { name: 'CDN (Content Delivery Network)', included: true },
            { name: 'Load Balancer', included: true },
        ]},
        { id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF): Enterprise-grade', included: true },
            { name: 'Anti-DDoS Protection: Enterprise-grade', included: true },
            { name: 'Reverse Proxy Server: Enterprise-grade', included: true },
            { name: 'Database Security: Enterprise-grade', included: true },
            { name: 'Vulnerability Analysis: Enterprise-level', included: true },
            { name: 'Identity & Access Management (IAM): Integrated', included: true },
            { name: 'Secret Management: Integrated', included: true },
            { name: 'Protection Against SQL Injection, XSS, CSRF, etc.', included: true },
        ]}
      ]
    }
  ];

  const technologies = {
    "CMS & E-commerce": ["/Logos/wordpress.svg", "/Logos/woocommerce.svg", "/Logos/shopify.svg", "/Logos/craftcms.svg"],
    "Front-end": ["/Logos/react.svg", "/Logos/nextjs.svg", "/Logos/vue.svg", "/Logos/nuxt.svg", "/Logos/angular.svg", "/Logos/svelte.svg"],
    "CSS / UI": ["/Logos/tailwindcss.svg", "/Logos/bootstrap.svg", "/Logos/material-ui.svg"],
    "Back-end": ["/Logos/laravel.svg", "/Logos/symfony.svg", "/Logos/django.svg", "/Logos/flask.svg", "/Logos/fastapi.svg", "/Logos/nodejs.svg", "/Logos/springboot.svg", "/Logos/dotnet.svg"],
    "Databases": ["/Logos/mysql.svg", "/Logos/postgresql.svg", "/Logos/oracle.svg", "/Logos/sql-server.svg", "/Logos/mongodb.svg", "/Logos/redis.svg", "/Logos/elasticsearch.svg"],
  };

  return (
    <div className="bg-white text-gray-700 font-sans">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <path fill="#3B82F6" d="M0,0H980C850,280,750,550,900,900H0V0Z" />
          </svg>
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center w-full">
            <motion.div className="w-full lg:w-3/5 xl:w-1/2 text-white text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight text-white"> Build Secure, Scalable & High-Performance Web Platforms </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 mb-8 font-light"> 15+ years delivering custom web apps, e-commerce, and enterprise portals with security built in. </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105"> Start My Project </button>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-2/5 xl:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A team of professionals collaborating on a project" className="w-full max-w-md lg:max-w-full h-auto rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Choose the right plan for your business. All our packages are designed for security, performance, and scalability."> Our Web Development Packages </SectionTitle>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative rounded-xl shadow-lg flex flex-col ${pkg.isPopular ? 'border-2 border-blue-600' : 'border border-gray-200'}`}>
                {pkg.isPopular && (
                  <div className="absolute -top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                )}
                <div className="p-8 bg-white rounded-t-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    {pkg.oldPrice && <span className="text-lg text-gray-400 line-through mr-2">{pkg.oldPrice}</span>}
                    <span className="text-3xl font-bold text-gray-900">{pkg.newPrice}</span>
                  </div>
                  <p className="bg-blue-100 text-blue-700 text-sm font-semibold rounded-full px-3 py-1 self-start mb-4">{pkg.promo}</p>
                </div>
                <div className="flex-grow bg-gray-50 p-6">
                  {pkg.featureGroups.map((group) => (
                    <AccordionItem
                      key={group.id}
                      title={group.title}
                      icon={group.icon}
                      isOpen={openGroupId === group.id}
                      onClick={() => handleAccordionClick(group.id)}
                    >
                      <ul className="space-y-3 text-sm">
                        {group.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            {feature.included ? (
                              <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                            )}
                            <span className={!feature.included ? 'text-gray-500' : 'text-gray-800'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))}
                </div>
                <div className="p-8 bg-white rounded-b-xl mt-auto">
                  <button className={`w-full text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <SectionTitle subtitle="Partner with a team that prioritizes security and performance at every stage of development."> Why Choose Atlas Defenders </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <ShieldCheck size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Security-First Engineering</h3> <p className="text-gray-600">Every website and application we build is production-hardened from day one, incorporating best practices for threat mitigation.</p> </div> </div>
                <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <Award size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise-Grade SLAs & Compliance</h3> <p className="text-gray-600">We deliver solutions that meet stringent requirements, mapping to PCI, GDPR, and HIPAA standards as needed for your industry.</p> </div> </div>
                <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <Users size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Stack & Certified People</h3> <p className="text-gray-600">Our senior engineers hold top certifications (OSCP, CCNP, AWS/Azure) and are experts in modern, reliable technologies.</p> </div> </div>
                <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <BarChart size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">From SME to Telecom</h3> <p className="text-gray-600">Our architecture scales to meet the demands of any business, from agile startups to carrier-grade enterprise customers.</p> </div> </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="We leverage a vast ecosystem of modern, robust, and secure technologies to build powerful web solutions.">
            Our Technology Ecosystem
          </SectionTitle>
          <HoneycombGrid technologies={technologies} />
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
