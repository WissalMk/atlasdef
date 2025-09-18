import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlobalCertifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Defense',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'cloud',
      name: 'Cloud',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'support',
      name: 'IT Support & Service Management',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      activeColor: 'bg-blue-600'
    }
  ];

  // Auto-cycling animation between categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => {
        const currentIndex = categories.findIndex(cat => cat.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 4000); // Change category every 4 seconds

    return () => clearInterval(interval);
  }, [categories]);

  // Clean certification data without duplicates
  const certifications = {
    cybersecurity: [
      'CISSP', 'CISA', 'CISM', 'CompTIA Security+', 'CompTIA CySA+',
      'eJPT', 'eCPPT', 'CRTP', 'CRTE', 'OSCP', 'OSEP', 'PCSNE', 'FCP'
    ],
    infrastructure: [
      'CCNA', 'CCNP', 'CCNP Security', 'JNCIA-JUNOS', 'JNCIA-DC', 'JNCIA-SEC', 
      'JNCIS-ENT', 'JNCIP-DC', 'JNCIP-ENT', 'NCA', 'NCP-MCI',
      'RHCSA', 'VCP-DCV', 'AZ-800', 'AZ-801', 'LPIC-1', 'LPIC-2', 'LPIC-3'
    ],
    cloud: [
      'AZ-104', 'AWS SAA', 'AWS SAP', 
      'GCP ACE', 'GCP PCA', 'CKA'
    ],
    support: [
      'CompTIA A+', 'CompTIA Network+'
    ]
  };

  // Cross-category certifications that should be highlighted in multiple categories
  const crossCategoryCerts = ['PCSNE', 'FCP'];

  // Highlighted certifications for each category
  const highlightedCerts = {
    infrastructure: [
      'CCNA', 'CCNP', 'CCNP Security', 'JNCIA-JUNOS', 'JNCIA-DC', 'JNCIA-SEC',
      'JNCIS-ENT', 'JNCIP-DC', 'JNCIP-ENT', 'NCA', 'NCP-MCI',
      'RHCSA', 'VCP-DCV', 'AZ-800', 'AZ-801', 'LPIC-1', 'LPIC-2', 'LPIC-3',
      'PCSNE', 'FCP'
    ],
    cybersecurity: [
      'CISSP', 'CISA', 'CISM', 'CompTIA Security+', 'CompTIA CySA+',
      'eJPT', 'eCPPT', 'CRTP', 'CRTE', 'OSCP', 'OSEP', 'PCSNE', 'FCP'
    ],
    cloud: [
      'AZ-104', 'AWS SAA', 'AWS SAP',
      'GCP ACE', 'GCP PCA'
    ],
    support: [
      'CompTIA A+', 'CompTIA Network+'
    ]
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-full mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Leading Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our team maintains the highest standards of professional excellence through comprehensive certification programs across cybersecurity, infrastructure, cloud, and IT service management domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Category buttons container */}
          <div className="flex flex-wrap justify-center">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-8 py-4 font-semibold text-base transition-all duration-300 relative bg-gray-50
                    ${isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                    }
                  `}
                >
                  <span className="whitespace-nowrap">{category.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* All Certifications Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-6 px-4"
        >
          {/* Render all certifications distributed across locations */}
          {(() => {
            // Create a consistent array of all certifications with their categories (no shuffling)
            const allCerts = Object.entries(certifications).flatMap(([category, certs]) =>
              certs.map(cert => ({ cert, category }))
            );
            
            // Keep certifications in consistent positions
            const consistentCerts = allCerts;
            
            return consistentCerts.map(({ cert, category }, index) => {
              // Standard category matching
              let isActive = activeCategory === 'all' || activeCategory === category;
              
              // Cross-category highlighting: PCSNE and FCP should be highlighted when either cybersecurity OR infrastructure is selected
              if (crossCategoryCerts.includes(cert)) {
                isActive = activeCategory === 'all' || activeCategory === 'cybersecurity' || activeCategory === 'infrastructure';
              }
              
              const isHighlighted = highlightedCerts[category as keyof typeof highlightedCerts]?.includes(cert) || false;
              return (
                <motion.div
                  key={`${cert}-${category}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group"
                >
                  <CertificationCard 
                    cert={cert} 
                    isActive={isActive}
                    isHighlighted={isHighlighted}
                    category={category}
                  />
                </motion.div>
              );
            });
          })()}
        </motion.div>
      </div>
    </section>
  );
};

// Certification Card Component - UniFi Style with Conditional Styling
const CertificationCard = ({ cert, isActive, isHighlighted, category }: { cert: string, isActive: boolean, isHighlighted: boolean, category: string }) => {
  // Certification logo mapping - using actual logos from /public/Certifications/
  const getCertLogo = (certName: string) => {
    const logoMap: { [key: string]: string } = {
      // Cisco Certifications
      'CCNA': '/Certifications/CCNA.png',
      'CCNP': '/Certifications/CCNP.png',
      'CCNP Security': '/Certifications/CCNP_SECURITY.png',
      
      // Juniper Certifications
      'JNCIA-JUNOS': '/Certifications/Jncia-junos.png',
      'JNCIA-DC': '/Certifications/JNCIA-DC.png',
      'JNCIA-SEC': '/Certifications/JNCIA-Sec.png',
      'JNCIS-ENT': '/Certifications/JNCIS-ENT.png',
      'JNCIP-DC': '/Certifications/JNCIP-DC.png',
      'JNCIP-ENT': '/Certifications/JNCIP-ENT.png',
      
      // Palo Alto Certifications
      'PCSNE': '/Certifications/PCSNE.png',
      'PCNSP': '/Certifications/Palo alto Certified Network Security Professional.png',
      
      // Fortinet Certifications
      'FCA': '/Certifications/FCA.png',
      'FCF': '/Certifications/FCF.png',
      'FCP': '/Certifications/FCP.png',
      
      // VMware Certifications
      'VCP-DCV': '/Certifications/VCP-DCV.png',
      
      // Red Hat Certifications
      'RHCSA': '/Certifications/Red Hat Certified System Administrator.png',
      'RHCE': '/Certifications/Red Hat Certified Engineer.png',
      
      // Nutanix Certifications
      'NCA': '/Certifications/Nutanix Certified Associate.png',
      'NCP-MCI': '/Certifications/NUTANIX Professional Multicloud Infrastructure.png',
      'NCM-MCI': '/Certifications/NUTANIX Multicloud Infrastructure Master.png',
      
      // Microsoft Azure Certifications
      'AZ-104': '/Certifications/Az 104.png',
      'AZ-800': '/Certifications/AZ 800.png',
      'AZ-801': '/Certifications/AZ 801.png',
      
      // AWS Certifications
      'AWS SAA': '/Certifications/AWS Certified Solution Architect Associate.png',
      'AWS SAP': '/Certifications/AWS Certified Solution Architect Professional.png',
      'AWS ANS': '/Certifications/AWS Certified Advanced Networking.png',
      'AWS SCS': '/Certifications/AWS Certified Security Specialist.png',
      
      // Google Cloud Certifications
      'GCP ACE': '/Certifications/Associate Cloud Engineer Certification.png',
      'GCP PCA': '/Certifications/Professional Cloud Architect Certification.png',
      'GCP PCNE': '/Certifications/Professional Cloud Network Engineer Certification.png',
      
      // Kubernetes Certifications
      'CKA': '/Certifications/Certified Kubernetes Administrator.png',
      
      // CompTIA Certifications - URL encoded for deployment compatibility
      'CompTIA A+': '/Certifications/Comptia%20A%2B.png',
      'CompTIA Network+': '/Certifications/Comptia%20Network%2B.png',
      'CompTIA Security+': '/Certifications/Comptia%20Security%2B.png',
      'CompTIA CySA+': '/Certifications/Comptia%20Cysa%2B.png',
      'CompTIA SecurityX': '/Certifications/Comptia SecurityX.png',
      
      // Linux Professional Institute
      'LPIC-1': '/Certifications/LIPIC1.png',
      'LPIC-2': '/Certifications/LIPIC2.png',
      'LPIC-3': '/Certifications/LIPIC3.png',
      
      // Cybersecurity & GRC
      'CISSP': '/Certifications/CISSP.png',
      'CISA': '/Certifications/Certified Information Systems Auditor.png',
      'CISM': '/Certifications/Certified Information Security Manager.png',
      'CC': '/Certifications/CC.png',
      
      // Penetration Testing Certifications (SVG format)
      'CRTP': '/Certifications/CRTP.svg',
      'CRTE': '/Certifications/CRTE.svg',
      'OSCP': '/Certifications/OSCP.svg',
      'OSDA': '/Certifications/OSDA.svg',
      'OSEP': '/Certifications/OSEP.svg',
      'eJPT': '/Certifications/EJPTV2.svg',
      'eCPPT': '/Certifications/ECPPT.svg'
    };
    return logoMap[certName] || '/Certifications/CISSP.png';
  };

  return (
    <motion.div
      whileHover={{ scale: isActive ? 1.08 : 1.04, y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`
        bg-gray-50 p-6 transition-all duration-500 cursor-pointer group hover:bg-gray-100
        ${isActive 
          ? '' 
          : 'opacity-30 hover:opacity-50'
        }
      `}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Logo - Professional Size */}
        <div className="w-24 h-24 flex items-center justify-center">
          <img
            src={getCertLogo(cert)}
            alt={`${cert} certification`}
            className={`
              max-w-full max-h-full object-contain transition-all duration-500
              ${isActive 
                ? 'group-hover:scale-110 filter-none' 
                : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
              }
            `}
            onError={(e) => {
              // Individual fallback handling for each certification
              const target = e.target as HTMLImageElement;
              if (cert === 'CompTIA A+') {
                target.src = '/Certifications/Comptia A+.png';
              } else if (cert === 'CompTIA Network+') {
                target.src = '/Certifications/Comptia Network+.png';
              } else if (cert === 'CompTIA Security+') {
                target.src = '/Certifications/Comptia Security+.png';
              } else if (cert === 'CompTIA CySA+') {
                target.src = '/Certifications/Comptia Cysa+.png';
              } else {
                // Fallback to CISSP logo for other certifications
                target.src = '/Certifications/CISSP.png';
              }
            }}
          />
        </div>
        
        {/* Certification Name */}
        <div className={`
          text-xs font-semibold transition-colors duration-500 tracking-wide
          ${isActive 
            ? 'text-gray-800 group-hover:text-gray-900' 
            : 'text-gray-500 group-hover:text-gray-700'
          }
        `}>
          {cert}
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalCertifications;