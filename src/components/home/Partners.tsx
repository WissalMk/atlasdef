import { motion } from 'framer-motion';

const Partners = () => {
  // Organize logos into 3 rows for infinite scrolling
  const row1Logos = [
    { name: 'Cisco', logo: '/Logos/Cisco_logo.svg' },
    { name: 'Juniper Networks', logo: '/Logos/Juniper_Networks_logo.svg' },
    { name: 'HP Aruba', logo: '/Logos/Aruba_Networks_logo.svg' },
    { name: 'TP-Link', logo: '/Logos/TPLINK_Logo.svg' },
    { name: 'Huawei', logo: '/Logos/huawei_logo.svg' },
    { name: 'Fortinet', logo: '/Logos/Fortinet_logo.svg' },
    { name: 'Palo Alto Networks', logo: '/Logos/paloalto_logo.svg' },
    { name: 'pfSense', logo: '/Logos/PfSense_logo.png' },
    { name: 'OPNsense', logo: '/Logos/Opnsense_logo.svg' },
    { name: 'Sophos', logo: '/Logos/Sophos_logo.svg' },
    { name: 'F5', logo: '/Logos/F5_Logo_0.svg' }
  ];

  const row2Logos = [
    { name: 'Keycloak', logo: '/Logos/keycloak.svg' },
    { name: 'Authentik', logo: '/Logos/Authentik.svg' },
    { name: 'Authelia', logo: '/Logos/authelia_logo.svg' },
    { name: 'Nutanix', logo: '/Logos/Nutanix_Logo.svg' },
    { name: 'VMware', logo: '/Logos/vmware.svg' },
    { name: 'Proxmox', logo: '/Logos/Proxmox_logo.svg' },
    { name: 'XCP-ng', logo: '/Logos/XCP-ng.svg' },
    { name: 'Citrix', logo: '/Logos/Citrix_logo.svg' },
    { name: 'Red Hat', logo: '/Logos/Red_Hat_Logo.svg' },
    { name: 'Ubuntu', logo: '/Logos/Ubuntu.svg' },
    { name: 'Rocky Linux', logo: '/Logos/rocky_linux.svg' },
    { name: 'NGINX', logo: '/Logos/nginx.svg' },
    { name: 'HAProxy', logo: '/Logos/haproxy.svg' },
    { name: 'Grafana', logo: '/Logos/grafana.svg' }
  ];

  const row3Logos = [
    { name: 'CrowdStrike', logo: '/Logos/CrowdStrike_logo.svg' },
    { name: 'SentinelOne', logo: '/Logos/SentinelOne_logo.svg' },
    { name: 'Symantec', logo: '/Logos/Symantec.svg' },
    { name: 'Cybereason', logo: '/Logos/Cyberreason.svg' },
    { name: 'Wazuh', logo: '/Logos/Wazuh_Logo.svg' },
    { name: 'Okta', logo: '/Logos/okta_logo.svg' },
    { name: 'Splunk', logo: '/Logos/splunk_logo.svg' },
    { name: 'Elastic Stack', logo: '/Logos/elastic.svg' },
    { name: 'Security Onion', logo: '/Logos/securityonion.svg' },
    { name: 'Nessus', logo: '/Logos/nessus_logo.png' },
    { name: 'Qualys', logo: '/Logos/qualys_logo.png' },
    { name: 'OpenVAS', logo: '/Logos/openvas.svg' },
    { name: 'Rapid7', logo: '/Logos/rapid7.svg' },
    { name: 'Acunetix', logo: '/Logos/acunetix.svg' },
    { name: 'Nextcloud', logo: '/Logos/nextcloud.svg' }
  ];

  const LogoRow = ({ logos, direction, speed = 30 }: { logos: any[], direction: 'left' | 'right', speed?: number }) => {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];
    
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center space-x-12"
          animate={{
            x: direction === 'left' ? [0, -100 * logos.length] : [-100 * logos.length, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{ width: `${200 * logos.length}%` }}
        >
          {duplicatedLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`flex-shrink-0 w-32 ${partner.name === 'Rocky Linux' ? 'h-24' : ['Cybereason', 'Symantec'].includes(partner.name) ? 'h-24' : 'h-16'} flex items-center justify-center group`}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className={`${partner.name === 'Rocky Linux' ? 'max-h-40' : partner.name === 'VMware' ? 'max-h-36' : partner.name === 'Keycloak' ? 'max-h-32' : partner.name === 'Authentik' ? 'max-h-32' : partner.name === 'Cybereason' ? 'max-h-32' : partner.name === 'Symantec' ? 'max-h-32' : partner.name === 'OpenVAS' ? 'max-h-32' : ['CrowdStrike', 'SentinelOne'].includes(partner.name) ? 'max-h-28' : partner.name === 'HAProxy' ? 'max-h-24' : partner.name === 'Rapid7' ? 'max-h-24' : partner.name === 'Nextcloud' ? 'max-h-20' : ['Ubuntu', 'Proxmox', 'XCP-ng', 'Acunetix', 'Authelia'].includes(partner.name) ? 'max-h-20' : 'max-h-12'} max-w-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Industry-Leading Technologies
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
              We Use
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            We build and secure systems using proven, industry-leading platforms and technologies trusted by the world's top enterprises.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row1Logos} direction="left" speed={35} />
          </motion.div>

          {/* Row 2 - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row2Logos} direction="right" speed={40} />
          </motion.div>

          {/* Row 3 - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row3Logos} direction="left" speed={32} />
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;