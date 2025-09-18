import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Network, Code, Eye, Server, Lock, Users, Zap, Database, Wifi, Settings, FileText, Search, Globe, AlertTriangle, Activity, Target, Cloud, Smartphone, Monitor, HardDrive, Router, Layers, ArrowRight, Building2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Actual service categories with correct navigation links matching App.tsx routes
  const categories = [
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      services: [
        { name: 'Defensive Security', icon: Shield, description: 'Advanced threat protection and security monitoring', link: '/services/cybersecurity/defensive-security' },
        { name: 'Offensive Security', icon: Target, description: 'Penetration testing and vulnerability assessments', link: '/services/cybersecurity/offensive-security' },
        { name: 'SOC as a Service', icon: Eye, description: '24/7 security operations center monitoring', link: '/services/cybersecurity/soc-as-a-service' },
        { name: 'GRC & Compliance', icon: FileText, description: 'Governance, risk management, and compliance', link: '/services/cybersecurity/grc' }
      ]
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      services: [
        { name: 'Data Center Design', icon: Building2, description: 'Next-generation data center architecture', link: '/services/infrastructure/data-center-design' },
        { name: 'Network Engineering', icon: Network, description: 'Enterprise network design and implementation', link: '/services/infrastructure/network-engineering' },
        { name: 'Cloud Integration', icon: Cloud, description: 'Hybrid and multi-cloud solutions', link: '/services/infrastructure/cloud-integration' },
        { name: 'Virtualization', icon: Layers, description: 'VMware, Proxmox, and Nutanix platforms', link: '/services/infrastructure/virtualization' },
        { name: 'Server Administration', icon: Server, description: 'Enterprise server management and optimization', link: '/services/infrastructure/server-administration' },
        { name: 'Backup & Recovery', icon: HardDrive, description: 'Data protection and disaster recovery', link: '/services/infrastructure/backup-recovery' },
        { name: 'Infrastructure Monitoring', icon: Activity, description: 'Real-time performance monitoring', link: '/services/infrastructure/monitoring' },
        { name: 'Performance Optimization', icon: Zap, description: 'System tuning and resource optimization', link: '/services/infrastructure/performance-optimization' }
      ]
    },
    {
      id: 'business-apps',
      name: 'Business Apps',
      services: [
        { name: 'Web Development', icon: Globe, description: 'Modern web applications and responsive websites', link: '/services/development/web-development' },
        { name: 'Mobile Development', icon: Smartphone, description: 'Native iOS and Android applications', link: '/services/development/mobile-development' },
        { name: 'DevOps & CI/CD', icon: Settings, description: 'Automated deployment and integration pipelines', link: '/services/development/devops-cicd' },
        { name: 'Enterprise Software', icon: Briefcase, description: 'Custom business applications and platforms', link: '/services/development/enterprise-software' }
      ]
    }
  ];

  const currentCategory = categories[activeCategory];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">
              We Deliver the
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
              Best Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Enterprise-grade technology solutions engineered to transform your business operations, 
            enhance security posture, and accelerate digital innovation.
          </motion.p>
        </motion.div>

        {/* Modern Category Switcher - Smaller & More Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-md'
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                
                {/* Subtle glow effect for active button */}
                {activeCategory === index && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Clean Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className={`grid gap-6 ${
              currentCategory.services.length === 4 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {currentCategory.services.map((service, index) => {
              // Alternating styles: Blue gradient (even) → Elegant light (odd) → Blue gradient → Elegant light
              const isBlueGradient = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="group relative cursor-pointer"
                >
                  <Link to={service.link} className="block h-full">
                    <div className={`relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl h-full ${
                      isBlueGradient 
                        ? 'bg-gradient-to-br from-black via-slate-800 to-blue-900 hover:from-slate-900 hover:via-slate-700 hover:to-blue-800 text-white border border-slate-700/50'
                        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 hover:from-white hover:via-slate-50 hover:to-indigo-50 text-gray-900 border border-slate-200/60 shadow-lg'
                    }`}>
                      
                      {/* Service Name */}
                      <h4 className={`text-lg font-bold mb-3 text-center transition-colors duration-300 ${
                        isBlueGradient 
                          ? 'text-white group-hover:text-blue-100' 
                          : 'text-gray-900 group-hover:text-blue-700'
                      }`}>
                        {service.name}
                      </h4>
                      
                      {/* Service Description */}
                      <p className={`text-sm leading-relaxed text-center mb-4 transition-colors duration-300 ${
                        isBlueGradient 
                          ? 'text-gray-300 group-hover:text-gray-200' 
                          : 'text-gray-600 group-hover:text-gray-700'
                      }`}>
                        {service.description}
                      </p>
                      
                      {/* Arrow Indicator */}
                      <div className="flex justify-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isBlueGradient 
                            ? 'bg-blue-600 group-hover:bg-blue-500' 
                            : 'bg-blue-600 group-hover:bg-blue-700 shadow-md'
                        }`}>
                          <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-all duration-300 text-white" />
                        </div>
                      </div>

                      {/* Enhanced hover effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className={`absolute inset-0 rounded-2xl ${
                          isBlueGradient 
                            ? 'shadow-xl shadow-blue-900/30' 
                            : 'shadow-xl shadow-blue-600/20'
                        }`}></div>
                      </div>

                      {/* Subtle gradient overlay on hover */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                        isBlueGradient 
                          ? 'bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10' 
                          : 'bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-500/5'
                      }`}></div>

                      {/* Premium shine effect for light cards */}
                      {!isBlueGradient && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};

export default PremiumServicesSection;