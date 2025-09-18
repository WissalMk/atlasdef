import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cybersecurity');
  const [infrastructureIndex, setInfrastructureIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Check if we're on special pages that need different styling
  const isOffensiveSecurityPage = location.pathname === '/services/cybersecurity/offensive-security';
  const isNetworkEngineeringPage = location.pathname === '/services/infrastructure/network-engineering';
  const isCloudIntegrationPage = location.pathname === '/services/infrastructure/cloud-integration';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll for infrastructure services (4 at a time from 6 total)
  useEffect(() => {
    if (selectedCategory === 'infrastructure' && showServicesDropdown && !isAutoScrollPaused) {
      const interval = setInterval(() => {
        setInfrastructureIndex(prev => prev === 0 ? 1 : 0); // Toggle between showing services 0-3 and 2-5 (last 4)
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [selectedCategory, showServicesDropdown, isAutoScrollPaused]);

  // Resume auto-scroll after 5 seconds when paused
  useEffect(() => {
    if (isAutoScrollPaused) {
      const timeout = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoScrollPaused]);

  // Services dropdown handlers
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 150);
  };

  // Header styling - normal background, only logo and text colors change for Network Engineering
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${showServicesDropdown || isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`;

  // Exact services data from your images
  const servicesData = {
    cybersecurity: {
      title: 'Cybersecurity Solutions',
      services: [
        {
          title: 'Defensive Security',
          subtitle: 'XDR, EDR, SIEM, IDS, IPS and real-time defense systems',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/services/cybersecurity/defensive-security'
        },
        {
          title: 'Offensive Security',
          subtitle: 'Advanced security assessment & penetration testing',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          link: '/services/cybersecurity/offensive-security'
        },
        {
          title: 'SOC as a Service',
          subtitle: '24/7 Security Operations Center',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          link: '/services/cybersecurity/soc-as-a-service'
        },
        {
          title: 'GRC',
          subtitle: 'Governance, Risk & Compliance',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/services/cybersecurity/grc'
        }
      ]
    },
    infrastructure: {
      title: 'Infrastructure Solutions',
      services: [
        {
          title: 'Next-Generation Data Centers',
          subtitle: 'Modern, scalable, and secure environments',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/services/infrastructure/data-center-design'
        },
        {
          title: 'Network Engineering & Optimization',
          subtitle: 'Advanced network design and performance tuning',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/network-engineering'
        },
        {
          title: 'Cloud Integration',
          subtitle: 'AWS, Azure, GCP, OCI integration',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          ),
          link: '/services/infrastructure/cloud-integration'
        },
        {
          title: 'Backup & Disaster Recovery',
          subtitle: 'Secure, automated backup with rapid recovery',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
          link: '/services/infrastructure/backup-recovery'
        },
        {
          title: 'Virtualization',
          subtitle: 'VMware, Proxmox, Nutanix platforms',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/virtualization'
        },
        {
          title: 'Server & System Administration',
          subtitle: 'Proactive monitoring and lifecycle management',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/server-administration'
        }
      ]
    },
    development: {
      title: 'Development & DevOps',
      services: [
        {
          title: 'Web Development',
          subtitle: 'Full-Stack Applications',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          link: '/services/development/web-development'
        },
        {
          title: 'Mobile Development',
          subtitle: 'iOS & Android Apps',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
          ),
          link: '/services/development/mobile-development'
        },
        {
          title: 'DevOps & CI/CD',
          subtitle: 'Docker, Kubernetes',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          link: '/services/development/devops-cicd'
        },
        {
          title: 'Enterprise Software',
          subtitle: 'ERP, CRM, HRMS',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/services/development/enterprise-software'
        }
      ]
    }
  };

  // Navigation categories
  const categories = [
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'development', label: 'Development' }
  ];

  const nextInfrastructure = () => {
    setInfrastructureIndex(prev => prev === 0 ? 1 : 0); // Toggle between 0-3 and 1-4
    setIsAutoScrollPaused(true); // Pause auto-scroll for 5 seconds
  };

  const prevInfrastructure = () => {
    setInfrastructureIndex(prev => prev === 0 ? 1 : 0); // Toggle between 0-3 and 1-4
    setIsAutoScrollPaused(true); // Pause auto-scroll for 5 seconds
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center h-16">
        {/* Logo - Enhanced size and visibility */}
        <Link to="/" className="flex items-center space-x-3 mr-12">
          <Shield className={`h-10 w-10 transition-colors duration-300 ${
            showServicesDropdown || isScrolled || isNetworkEngineeringPage || isCloudIntegrationPage
              ? (isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600')
              : 'text-white'
            }`} />
          <span className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
            showServicesDropdown || isScrolled || isNetworkEngineeringPage || isCloudIntegrationPage
              ? (isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600')
              : 'text-white'
            }`}>
            Atlas Defenders
          </span>
        </Link>

        {/* Desktop Navigation - Left-oriented like UniFi */}
        <nav className="hidden md:flex items-center space-x-8 flex-1">

          {/* UniFi-style Services Dropdown */}
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className={`font-medium transition-colors duration-300 flex items-center ${showServicesDropdown || isScrolled
                ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
                : isNetworkEngineeringPage || isCloudIntegrationPage
                  ? 'text-gray-900 hover:text-gray-700'
                  : 'text-white hover:text-accent'
                }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Perfect UniFi-Style Full Width Dropdown */}
            <AnimatePresence>
              {showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-16 w-full bg-white shadow-xl z-40 overflow-hidden"
                  style={{
                    height: '320px'
                  }}
                >
                  <div className="flex h-full">
                    {/* Clean Left Sidebar - Exactly Like UniFi */}
                    <div className="w-56 bg-gray-50 border-r border-gray-200 h-full">
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
                        <nav className="space-y-1">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => setSelectedCategory(category.id)}
                              className={`w-full text-left px-3 py-2 text-sm font-medium transition-all duration-150 relative ${selectedCategory === category.id
                                ? (isOffensiveSecurityPage ? 'text-red-600 border-r-2 border-red-600' : 'text-blue-600 border-r-2 border-blue-600')
                                : (isOffensiveSecurityPage ? 'text-gray-700 hover:text-red-600 hover:border-r-2 hover:border-red-600' : 'text-gray-700 hover:text-blue-600 hover:border-r-2 hover:border-blue-600')
                                }`}
                            >
                              {category.label}
                            </button>
                          ))}
                        </nav>

                        {/* Simple Bottom Links - Like UniFi */}
                        <div className="border-t border-gray-200 pt-4 mt-8">
                          <div className="space-y-1">
                            <Link
                              to="/services"
                              className={`block text-xs transition-colors py-1 ${isOffensiveSecurityPage ? 'text-gray-500 hover:text-red-600' : 'text-gray-500 hover:text-blue-600'
                                }`}
                              onClick={() => setShowServicesDropdown(false)}
                            >
                              All Services
                            </Link>
                            <Link
                              to="/partners"
                              className={`block text-xs transition-colors py-1 ${isOffensiveSecurityPage ? 'text-gray-500 hover:text-red-600' : 'text-gray-500 hover:text-blue-600'
                                }`}
                              onClick={() => setShowServicesDropdown(false)}
                            >
                              Resources
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area with Services */}
                    <div className="flex-1 p-8 bg-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-normal text-gray-900">
                          {servicesData[selectedCategory as keyof typeof servicesData].title}
                        </h2>

                        {/* Navigation arrows for Infrastructure */}
                        {selectedCategory === 'infrastructure' && (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={prevInfrastructure}
                              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <ChevronLeft size={20} className="text-gray-600" />
                            </button>
                            <div className="flex space-x-1">
                              <div className={`w-2 h-2 rounded-full ${infrastructureIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                              <div className={`w-2 h-2 rounded-full ${infrastructureIndex === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            </div>
                            <button
                              onClick={nextInfrastructure}
                              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <ChevronRight size={20} className="text-gray-600" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-4 gap-8">
                        {selectedCategory === 'infrastructure' ? (
                          // Infrastructure - show 4 services at a time with carousel (6 total services)
                          (infrastructureIndex === 0 
                            ? servicesData.infrastructure.services.slice(0, 4) // First 4: Data Centers, Network, Cloud, Backup
                            : servicesData.infrastructure.services.slice(4, 6) // Last 2: Virtualization, Server Admin
                          ).map((service, index) => (
                              <Link
                                key={index}
                                to={service.link}
                                onClick={() => setShowServicesDropdown(false)}
                                className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                              >
                                <div className="mb-4">
                                  {React.cloneElement(service.icon, {
                                    className: `w-12 h-12 ${isOffensiveSecurityPage ? 'text-red-500' : 'text-blue-500'}`
                                  })}
                                </div>
                                <h3 className="text-base font-normal text-gray-900 mb-2">
                                  {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                  {service.subtitle}
                                </p>
                                <span className={`text-sm font-medium group-hover:underline ${isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600'
                                  }`}>
                                  Learn More →
                                </span>
                              </Link>
                            ))
                        ) : (
                          // Cybersecurity and Development (4 services each)
                          servicesData[selectedCategory as keyof typeof servicesData].services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => setShowServicesDropdown(false)}
                              className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                            >
                              <div className="mb-4">
                                {React.cloneElement(service.icon, {
                                  className: `w-12 h-12 ${isOffensiveSecurityPage ? 'text-red-500' : 'text-blue-500'}`
                                })}
                              </div>
                              <h3 className="text-base font-normal text-gray-900 mb-2">
                                {service.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-3">
                                {service.subtitle}
                              </p>
                              <span className={`text-sm font-medium group-hover:underline ${isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600'
                                }`}>
                                Learn More →
                              </span>
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Navigation Items */}
          <Link
            to="/industries"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : isNetworkEngineeringPage || isCloudIntegrationPage
                ? 'text-gray-900 hover:text-gray-700'
                : 'text-white hover:text-accent'
              }`}
          >
            Industries
          </Link>

          <Link
            to="/partners"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : isNetworkEngineeringPage || isCloudIntegrationPage
                ? 'text-gray-900 hover:text-gray-700'
                : 'text-white hover:text-accent'
              }`}
          >
            Partners
          </Link>

          <Link
            to="/about"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : isNetworkEngineeringPage || isCloudIntegrationPage
                ? 'text-gray-900 hover:text-gray-700'
                : 'text-white hover:text-accent'
              }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : isNetworkEngineeringPage || isCloudIntegrationPage
                ? 'text-gray-900 hover:text-gray-700'
                : 'text-white hover:text-accent'
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Get Consultation Button - Matching Get Started Today Style */}
        <div className="hidden md:block ml-8">
          <Link
            to="/contact"
            className={`inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-full ${isOffensiveSecurityPage && !isScrolled
              ? 'bg-white text-red-600 hover:bg-gray-50'
              : isOffensiveSecurityPage && isScrolled
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
              }`}
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-md ${showServicesDropdown || isScrolled 
            ? 'text-gray-900' 
            : isNetworkEngineeringPage 
              ? 'text-gray-900' 
              : 'text-white'
            }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                <Link
                  to="/services"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/industries"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  to="/partners"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  to="/about"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className={`block px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center mt-4 ${isOffensiveSecurityPage
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Get Consultation
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;