import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Shield, Wifi, Server, Cloud, LineChart, Eye, HardDrive, ChevronRight, X } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  shortTitle: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'network',
    icon: Network,
    title: 'Professional Network Configuration',
    shortTitle: 'Network Configuration',
    description: 'We design and deploy enterprise-grade networks with advanced routing, switching, VLAN segmentation, and protocol optimization. From VRRP and HSRP to Layer 3 core architecture and STP/RSTP optimization — we ensure maximum uptime, performance, and scalability for mission-critical infrastructure.',
    imageUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'firewall',
    icon: Shield,
    title: 'Firewall Deployment & Security Architecture',
    shortTitle: 'Firewall Deployment',
    description: 'Fortify your perimeter with expert firewall deployment using Fortinet, Palo Alto, Cisco Firepower, pfSense, and OPNsense. We implement Zero Trust segmentation, advanced rule policies, deep packet inspection, and intrusion prevention across hybrid environments.',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'wireless',
    icon: Wifi,
    title: 'Wireless Solutions',
    shortTitle: 'Wireless Solutions',
    description: 'Achieve full wireless coverage with modern Wi-Fi 6/6E mesh networks. We plan and deploy Ubiquiti, TP-Link Omada, Cisco Meraki, and Aruba solutions, with handover optimization, roaming, and secure access for corporate and guest VLANs.',
    imageUrl: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'virtualization',
    icon: Server,
    title: 'Virtualization Solutions',
    shortTitle: 'Virtualization',
    description: 'Modernize your infrastructure with VMware vSphere, Proxmox, Nutanix AHV, or XCP-ng. From cluster setup to VM migration and high availability, we help you unlock scalability, efficiency, and cost-saving through full virtualization orchestration.',
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Integration',
    shortTitle: 'Cloud Integration',
    description: 'Seamlessly integrate AWS, Azure, GCP, and OCI cloud platforms into your infrastructure. We specialize in hybrid cloud design, secure VPN tunnels, IAM hardening, and cost-optimized workload deployment tailored for each business need.',
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'monitoring',
    icon: LineChart,
    title: 'Monitoring & Observability',
    shortTitle: 'Monitoring',
    description: 'Gain real-time insight into your infrastructure with Zabbix, PRTG, Prometheus, and Grafana. We deploy end-to-end observability stacks with SNMP, NetFlow, alerting systems, and proactive SLA tracking for mission-critical visibility.',
    imageUrl: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'cybersecurity',
    icon: Eye,
    title: 'Cybersecurity & SOC as a Service',
    shortTitle: 'SOC Service',
    description: 'Get 24/7 cyber defense with our fully managed SOC powered by Wazuh, SIEM (Elastic Stack or Splunk), XDR (Cortex, CrowdStrike), and IDS (Suricata). From log correlation to real-time threat detection and incident response — we protect what matters most.',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  },
  {
    id: 'backup',
    icon: HardDrive,
    title: 'Backup & Disaster Recovery (BDR)',
    shortTitle: 'Backup & DR',
    description: 'Protect your data and operations with Veeam-powered enterprise backup, replication, and disaster recovery strategies. We ensure recoverability with RPO/RTO optimization, offsite replication, and immutable storage integration.',
    imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
  }
];

// Group services into rows of 4
const serviceRows = [
  services.slice(0, 4),  // Row 1: Network, Firewall, Wireless, Virtualization
  services.slice(4, 8),  // Row 2: Cloud, Monitoring, Cybersecurity, Backup
];

const GridServices = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };

  const getRowIndex = (serviceId: string) => {
    return serviceRows.findIndex(row => row.some(service => service.id === serviceId));
  };

  const isInSameRow = (serviceId: string, expandedId: string) => {
    const serviceRowIndex = getRowIndex(serviceId);
    const expandedRowIndex = getRowIndex(expandedId);
    return serviceRowIndex === expandedRowIndex;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Core Services — Tailored for Modern IT Infrastructure
          </h2>
          <p className="text-xl text-text-muted max-w-4xl mx-auto">
            Enterprise-grade solutions designed for decision-makers and IT professionals. Click any service to explore detailed capabilities.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="space-y-8">
          {serviceRows.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-6">
              {/* Services Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {row.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  const isExpanded = expandedService === service.id;
                  const shouldMinimize = expandedService && 
                    isInSameRow(service.id, expandedService) && 
                    expandedService !== service.id;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (rowIndex * 4 + serviceIndex) * 0.1
                      }}
                      viewport={{ once: true }}
                      className={`
                        relative cursor-pointer transition-all duration-500 ease-in-out
                        ${shouldMinimize ? 'scale-90 opacity-60' : 'scale-100 opacity-100'}
                      `}
                      onClick={() => handleServiceClick(service.id)}
                      whileHover={!isExpanded && !shouldMinimize ? { scale: 1.02, y: -5 } : {}}
                    >
                      <div className={`
                        bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-80
                        transition-all duration-500 hover:shadow-xl
                        ${isExpanded ? 'shadow-2xl border-primary/30 ring-2 ring-primary/10' : 'hover:border-primary/30'}
                        ${shouldMinimize ? 'hover:shadow-md' : ''}
                      `}>
                        {/* Collapsed Card */}
                        <div className="p-6 h-full flex flex-col justify-center items-center text-center relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300">
                            <Icon size={28} className="text-primary" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-primary mb-3 leading-tight">
                            {service.shortTitle}
                          </h3>
                          
                          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
                          
                          <div className="flex items-center text-primary font-medium text-sm">
                            <span>Click to explore</span>
                            <ChevronRight size={14} className="ml-2" />
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="absolute bottom-3 right-3 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                              animate={{ x: [0, 2, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ChevronRight size={12} className="text-primary" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Expanded Content Row */}
              <AnimatePresence>
                {expandedService && getRowIndex(expandedService) === rowIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {(() => {
                      const expandedServiceData = services.find(s => s.id === expandedService);
                      if (!expandedServiceData) return null;
                      
                      const Icon = expandedServiceData.icon;
                      
                      return (
                        <div className="bg-white rounded-2xl shadow-xl border border-primary/20 p-8 relative">
                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedService(null);
                            }}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <X size={16} className="text-gray-600" />
                          </button>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Content */}
                            <div>
                              <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mr-4">
                                  <Icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary leading-tight">
                                  {expandedServiceData.title}
                                </h3>
                              </div>
                              
                              <p className="text-text-muted leading-relaxed mb-6">
                                {expandedServiceData.description}
                              </p>
                              
                              <div className="flex items-center text-primary font-medium">
                                <span>Learn more about this service</span>
                                <motion.div
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                  className="ml-2"
                                >
                                  →
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* Right Side - Visual */}
                            <div className="relative">
                              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                                <img 
                                  src={expandedServiceData.imageUrl}
                                  alt={expandedServiceData.title}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                                
                                {/* Tech overlay */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                                  <span className="text-xs font-medium text-primary">Enterprise Grade</span>
                                </div>
                              </div>
                              
                              {/* Decorative Elements */}
                              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Instruction Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-muted">
            Click any service card to explore detailed information and capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GridServices;