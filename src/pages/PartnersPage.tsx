import { useEffect } from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    category: 'Network Infrastructure',
    companies: [
      { 
        name: 'Cisco', 
        logo: '/Logos/Cisco_logo.svg',
        description: 'Leading provider of networking hardware, software, and telecommunications equipment.'
      },
      { 
        name: 'Juniper Networks', 
        logo: '/Logos/Juniper_Networks_logo.svg',
        description: 'High-performance networking products and solutions for enterprise networks and service providers.'
      },
      { 
        name: 'HP Aruba', 
        logo: '/Logos/Aruba_Networks_logo.svg',
        description: 'Enterprise networking solutions focusing on wireless networks, security, and network management.'
      },
      { 
        name: 'TP-Link', 
        logo: '/Logos/TPLINK_Logo.svg',
        description: 'Reliable networking products for businesses of all sizes with excellent price-performance ratio.'
      }
    ]
  },
  {
    category: 'Security & Firewall',
    companies: [
      { 
        name: 'Fortinet', 
        logo: '/Logos/Fortinet_logo.svg',
        description: 'Comprehensive security solutions including firewalls, anti-virus, and intrusion prevention.'
      },
      { 
        name: 'Palo Alto Networks', 
        logo: '/Logos/paloalto_logo.svg',
        description: 'Next-generation firewall technology and advanced threat prevention.'
      },
      { 
        name: 'Sophos', 
        logo: '/Logos/Sophos_logo.svg',
        description: 'Integrated security solutions for networks and endpoints with cloud-based management.'
      }
    ]
  },
  {
    category: 'Cloud & Virtualization',
    companies: [
      { 
        name: 'Microsoft', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
        description: 'Azure cloud services, Hyper-V virtualization, and comprehensive business software solutions.'
      },
      { 
        name: 'VMware', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png',
        description: 'Industry-leading virtualization and cloud infrastructure software.'
      },
      { 
        name: 'Amazon Web Services', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
        description: 'Comprehensive cloud computing platform with global infrastructure.'
      },
      { 
        name: 'Google Cloud', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
        description: 'Secure, high-performance cloud services with advanced data analytics and AI capabilities.'
      }
    ]
  },
  {
    category: 'Monitoring & Observability',
    companies: [
      { 
        name: 'Zabbix', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zabbix_logo.svg/2560px-Zabbix_logo.svg.png',
        description: 'Enterprise-class open source monitoring solution for networks and applications.'
      },
      { 
        name: 'Grafana', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1024px-Grafana_icon.svg.png',
        description: 'Open-source analytics and interactive visualization platform.'
      },
      { 
        name: 'PRTG', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PRTG_Network_Monitor_Logo.png/1200px-PRTG_Network_Monitor_Logo.png',
        description: 'Comprehensive network monitoring software with intuitive interface.'
      }
    ]
  }
];

const PartnerCard = ({ partner, index }: { partner: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="h-24 flex items-center justify-center mb-6">
        <img 
          src={partner.logo} 
          alt={`${partner.name} logo`} 
          className="max-h-16 max-w-full" 
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
      <p className="text-text-muted">{partner.description}</p>
    </motion.div>
  );
};

const PartnersPage = () => {
  useEffect(() => {
    document.title = 'Our Partners | Atlas Defenders';
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
            Our Technology Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We partner with industry-leading technology providers to deliver best-in-class solutions for our clients.
            These partnerships enable us to offer comprehensive solutions with certified expertise.
          </motion.p>
        </div>
      </section>

      {/* Partners Content */}
      <section className="py-16 bg-background">
        <div className="container">
          {partners.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
              >
                {category.category}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.companies.map((partner, index) => (
                  <PartnerCard 
                    key={partner.name} 
                    partner={partner} 
                    index={index} 
                  />
                ))}
              </div>
              
              {categoryIndex < partners.length - 1 && (
                <hr className="border-gray-200 my-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-12 text-center"
          >
            Benefits of Our Partnerships
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Expertise</h3>
              <p className="text-text-muted">Our team maintains up-to-date certifications with all our partner technologies.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated Solutions</h3>
              <p className="text-text-muted">We integrate best-of-breed technologies to create comprehensive security solutions.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Early Access</h3>
              <p className="text-text-muted">Our partnerships give us early access to new technologies and product roadmaps.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-4.95 3.13-9.22 7.48-10.65a8.98 8.98 0 0 1 6.76.99"/><path d="M17 18v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3Z"/><path d="M21 14h-2"/><path d="M21 14h-2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2"/><path d="M18 14v-3"/><path d="M18 14a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Priority Support</h3>
              <p className="text-text-muted">Our partner status ensures priority support for rapid issue resolution.</p>
            </motion.div>
          </div>
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
            Looking for a Specific Technology Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Contact us to discuss how our partner technologies can help address your organization's specific IT and security challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="btn bg-accent hover:bg-accent/90 text-white">
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;