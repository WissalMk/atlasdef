import React, { useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Network, ArrowRight, Zap, Users, CheckCircle, Globe, Shield, Database, Monitor, Lock, Server, Wifi, Cloud, Settings, Eye, Layers, Router, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const NetworkEngineeringPage = () => {
  // State for UniFi-style expandable services grid
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // UniFi-style Services Data with icons and descriptions
  const unifiServices = [
    // Row 1
    [
      {
        id: 'network-architecture',
        icon: <Layers className="w-12 h-12 text-blue-600" />,
        title: 'Network Architecture',
        subtitle: 'Enterprise Design',
        description: 'Build secure, scalable, and high-performance networks that grow with your business.',
        features: [
          'VXLAN & EVPN fabric design',
          'VRF & VLAN segmentation',
          'Hierarchical network models',
          'Redundancy & failover planning'
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'wireless-solutions',
        icon: <Wifi className="w-12 h-12 text-blue-600" />,
        title: 'Wireless Solutions',
        subtitle: 'Wi-Fi 6/6E/7',
        description: 'Deliver fast, reliable, and secure wireless across offices, campuses, and large venues.',
        features: [
          'Wi-Fi 6/6E/7 deployment',
          'RF planning & optimization',
          'WPA3 enterprise security',
          'IoT device integration'
        ],
        image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cloud-networking',
        icon: <Cloud className="w-12 h-12 text-blue-600" />,
        title: 'Cloud Networking',
        subtitle: 'Hybrid Connectivity',
        description: 'Connect your on-premises and cloud workloads with speed and security.',
        features: [
          'AWS Direct Connect',
          'Azure ExpressRoute',
          'Multi-cloud architectures',
          'Hybrid network design'
        ],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'network-security',
        icon: <Shield className="w-12 h-12 text-blue-600" />,
        title: 'Network Security',
        subtitle: 'Zero Trust',
        description: 'Protect your infrastructure, data, and users against advanced threats.',
        features: [
          'SASE implementation',
          'Network access control',
          'Microsegmentation',
          'DDoS mitigation'
        ],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    // Row 2
    [
      {
        id: 'sd-wan',
        icon: <Router className="w-12 h-12 text-blue-600" />,
        title: 'SD-WAN',
        subtitle: 'Intelligent Routing',
        description: 'Keep branches, remote workers, and partners securely connected.',
        features: [
          'Software-defined WAN',
          'MPLS & internet hybrid',
          'Application-aware routing',
          'Centralized policy management'
        ],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'network-monitoring',
        icon: <Eye className="w-12 h-12 text-blue-600" />,
        title: 'Network Monitoring',
        subtitle: '24/7 Visibility',
        description: 'Boost network performance, reduce downtime, and simplify operations.',
        features: [
          'Real-time monitoring',
          'Performance analytics',
          'Automated alerting',
          'Capacity planning'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'data-center',
        icon: <Server className="w-12 h-12 text-blue-600" />,
        title: 'Data Center',
        subtitle: 'Fabric Design',
        description: 'Handle large-scale, mission-critical routing for enterprises and ISPs.',
        features: [
          'Spine-leaf architecture',
          'BGP route reflection',
          'Load balancing',
          'High availability design'
        ],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'automation',
        icon: <Settings className="w-12 h-12 text-blue-600" />,
        title: 'Network Automation',
        subtitle: 'DevOps Integration',
        description: 'Transition to new technologies without downtime or disruption.',
        features: [
          'Infrastructure as Code',
          'Ansible automation',
          'CI/CD pipelines',
          'Configuration management'
        ],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  useEffect(() => {
    document.title = 'Network Engineering | Atlas Defenders';

    // Add Ubiquiti-inspired premium CSS
    const style = document.createElement('style');
    style.textContent = `
      .ubiquiti-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      .ubiquiti-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        border-color: #3b82f6;
      }
      .logo-hover {
        transition: all 0.3s ease;
        filter: opacity(1);
      }
      .logo-hover:hover {
        filter: opacity(1);
        transform: scale(1.05);
      }
      .hero-text {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        letter-spacing: -0.025em;
      }
      .btn-primary {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        border: none;
        border-radius: 12px;
        padding: 16px 32px;
        font-weight: 600;
        color: white;
        transition: all 0.3s ease;
        box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.4);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Counter component for metrics
  const Counter = ({ end, duration = 2.5, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startCount = 0;

        const updateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
          setCount(currentCount);

          if (progress >= 1) {
            setCount(end);
          } else {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      }
    }, [isInView, end, duration]);

    return (
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
    );
  };

  // Networking Services Data
  const networkingServices = [
    {
      title: 'Network Architecture & Design',
      businessValue: 'Build secure, scalable, and high-performance networks that grow with your business.',
      keyTechnologies: 'VXLAN, EVPN, VRF, VLAN segmentation, HSRP/VRRP/GLBP, EtherChannel, STP/RSTP/MSTP, hierarchical design models.'
    },
    {
      title: 'Wireless Networking Solutions',
      businessValue: 'Deliver fast, reliable, and secure wireless across offices, campuses, and large venues.',
      keyTechnologies: 'Wi-Fi 6/6E/7, RF planning & optimization, WPA3 security, 802.1X, QoS for voice/video, wireless OTT & IoT integration.'
    },
    {
      title: 'Unified Communications & Collaboration',
      businessValue: 'Enable crystal-clear voice, video, and messaging for teams anywhere.',
      keyTechnologies: 'VoIP, SIP trunking, Microsoft Teams, Cisco Webex, Zoom UC, SRST, QoS traffic prioritization.'
    },
    {
      title: 'WAN, Remote Connectivity & ISP Solutions',
      businessValue: 'Keep branches, remote workers, and partners securely connected.',
      keyTechnologies: 'SD-WAN, MPLS L2/L3 VPN, DMVPN/FlexVPN, OSPF/BGP/EIGRP, QoS over WAN, CDN integration, ZTNA.'
    },
    {
      title: 'Cloud & Hybrid Networking',
      businessValue: 'Connect your on-premises and cloud workloads with speed and security.',
      keyTechnologies: 'AWS Direct Connect, Azure ExpressRoute, OCI FastConnect, hybrid architectures, IPSec VPN to cloud.'
    },
    {
      title: 'Network Optimization & Automation',
      businessValue: 'Boost network performance, reduce downtime, and simplify operations.',
      keyTechnologies: 'QoS design, CoPP, NetFlow/SNMP, Zabbix, Ansible/Python automation, traffic engineering, Segment Routing.'
    },
    {
      title: 'Security-Driven Networking',
      businessValue: 'Protect your infrastructure, data, and users against threats.',
      keyTechnologies: 'SASE, secure SD-WAN, NAC (802.1X), IPSec/MACsec, firewalls, IDS/IPS, DDoS mitigation, microsegmentation.'
    },
    {
      title: 'Advanced Routing & Carrier-Grade Services',
      businessValue: 'Handle large-scale, mission-critical routing for enterprises and ISPs.',
      keyTechnologies: 'BGP (iBGP/eBGP, route reflectors), advanced OSPF, MPLS VPNs, VRF-lite, LISP, convergence tuning.'
    },
    {
      title: 'Migration & Upgrade Services',
      businessValue: 'Transition to new technologies without downtime or disruption.',
      keyTechnologies: 'Multi-vendor migrations, data center fabric cutovers, IPv4–IPv6 transition, high-speed core upgrades.'
    },
    {
      title: 'Business Continuity & Disaster Recovery',
      businessValue: 'Ensure your network stays online during failures or disasters.',
      keyTechnologies: 'Redundant links, HA routing/switching, DR site failover, compliance (ISO, PCI-DSS, GDPR).'
    }
  ];

  // Technologies We Use
  const networkingTechnologies = [
    { name: 'Cisco', logo: '/Logos/Cisco_logo.svg', tagline: 'Certified Expertise' },
    { name: 'Juniper', logo: '/Logos/Juniper_Networks_logo.svg', tagline: 'Proven at Scale' },
    { name: 'Fortinet', logo: '/Logos/Fortinet_logo.svg', tagline: 'Security First' },
    { name: 'Palo Alto', logo: '/Logos/paloalto_logo.svg', tagline: 'Next-Gen Security' },
    { name: 'Huawei', logo: '/Logos/huawei_logo.svg', tagline: 'Global Infrastructure' },
    { name: 'Aruba', logo: '/Logos/Aruba_Networks_logo.svg', tagline: 'Wireless Excellence' },
    { name: 'UniFi', logo: '/Logos/unifi.svg', tagline: 'Enterprise Wireless' },
    { name: 'TP-Link', logo: '/Logos/TPLINK_Logo.svg', tagline: 'Enterprise Ready' },
    { name: 'Sophos', logo: '/Logos/Sophos_logo.svg', tagline: 'Secure Networks' },
    { name: 'F5', logo: '/Logos/F5_Logo_0.svg', tagline: 'Application Delivery' },
    { name: 'pfSense', logo: '/Logos/PfSense_logo.png', tagline: 'Open Source Power' },
    { name: 'Zabbix', logo: 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png', tagline: 'Network Monitoring' }
  ];

  // Networking Certifications
  const networkingCertifications = [
    { name: 'CCNA', logo: '/Logos/Cisco_logo.svg', type: 'Associate' },
    { name: 'CCNP Enterprise', logo: '/Logos/Cisco_logo.svg', type: 'Professional' },
    { name: 'CCNP Security', logo: '/Logos/Cisco_logo.svg', type: 'Security' },
    { name: 'JNCIA', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Associate' },
    { name: 'JNCIS', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Specialist' },
    { name: 'JNCIP', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Professional' },
    { name: 'PCSNE', logo: '/Logos/paloalto_logo.svg', type: 'Palo Alto' },
    { name: 'NSE 4', logo: '/Logos/Fortinet_logo.svg', type: 'Fortinet' },
    { name: 'NSE 7', logo: '/Logos/Fortinet_logo.svg', type: 'Expert' }
  ];

  // Client Testimonials - Attractive Atlas Defenders Reviews
  const testimonials = [
    {
      quote: "Atlas Defenders transformed our office network completely! Our internet is now lightning fast, video calls never drop, and our team can work seamlessly from anywhere. They made everything so simple and reliable. Highly recommend their networking services!",
      name: "Michael Chen",
      role: "CEO, TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Amazing experience with Atlas Defenders! They set up our entire office network in just two days. Everything works perfectly - WiFi reaches every corner, our systems are secure, and their support team is always there when we need them. Professional and reliable!",
      name: "Sarah Rodriguez",
      role: "Operations Manager, Creative Agency", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Outstanding network security setup! Atlas Defenders protected our business from cyber threats while keeping everything user-friendly. Our data is safe, our network is fast, and we have peace of mind. They truly care about their clients' success.",
      name: "David Thompson",
      role: "Business Owner, Retail Chain",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Best networking company we've worked with! They upgraded our entire infrastructure and now everything runs smoothly. No more connection issues, faster file sharing, and excellent customer service. Atlas Defenders exceeded all our expectations!",
      name: "Emily Johnson",
      role: "IT Manager, Healthcare Group",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Incredible wireless network setup! Atlas Defenders gave us seamless WiFi coverage throughout our 3-story building. The installation was quick, professional, and now our productivity has increased significantly. Fantastic team and service!",
      name: "James Wilson",
      role: "Founder, Marketing Firm",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Atlas Defenders made our remote work dreams come true! They set up secure VPN access and cloud connectivity that works flawlessly. Our team can collaborate from anywhere with confidence. Professional, efficient, and highly skilled!",
      name: "Lisa Martinez",
      role: "HR Director, Consulting Firm",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  // Star Rating Component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-white/30'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Modern Smooth Carousel Testimonial Component
  const GradientTestimonials = ({ testimonials }: { testimonials: Array<{ quote: string, name: string, role: string, avatar: string, rating: number }> }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance testimonials with smooth animation
    useEffect(() => {
      if (!isHovered) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(interval);
      }
    }, [testimonials.length, isHovered]);

    // Calculate visible testimonials (show 3 at a time on desktop)
    const getVisibleTestimonials = () => {
      const visible = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visible.push({ ...testimonials[index], originalIndex: index });
      }
      return visible;
    };

    return (
      <div className="py-16 overflow-hidden">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from businesses who trust Atlas Defenders with their network infrastructure.
          </p>
        </motion.div>

        {/* Testimonial Carousel Container */}
        <div 
          className="max-w-7xl mx-auto px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop View - 3 Cards Sliding */}
          <div className="hidden md:block">
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.8
                  }}
                  className="grid grid-cols-3 gap-6 absolute inset-0"
                >
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.originalIndex}-${currentIndex}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="relative"
                    >
                      {/* Gradient Card */}
                      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                        {/* 5-Star Rating */}
                        <StarRating rating={testimonial.rating} />

                        {/* Quote Text */}
                        <div className="mb-6 flex-grow">
                          <p className="text-white text-sm leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        {/* Author Section */}
                        <div className="flex flex-col items-center text-center mt-auto">
                          {/* Avatar */}
                          <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-white/30">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=ffffff&size=56`;
                              }}
                            />
                          </div>

                          {/* Name and Role */}
                          <div>
                            <h4 className="text-white font-semibold text-base mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-white/80 text-xs">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile View - Single Card */}
          <div className="md:hidden">
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.8
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl h-full flex flex-col">
                    <StarRating rating={testimonials[currentIndex].rating} />
                    <div className="mb-8 flex-grow">
                      <p className="text-white text-sm leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-auto">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-3 border-white/30">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=6366f1&color=ffffff&size=64`;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-white/80 text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? 'bg-blue-600 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>


        </div>
      </div>
    );
  };

  // Zabbix-Style Interactive Section Component
  const ZabbixStyleSection = () => {
    const [activeItem, setActiveItem] = useState('expert-certifications');

    const menuItems = [
      {
        id: 'expert-certifications',
        title: 'CCNP, JNCIP, NSE4-7 & PCSNE Certified',
        description: 'Our team holds professional networking certifications including CCNP Enterprise, JNCIP, NSE4-7, and PCSNE. With decades of combined experience in enterprise networking, we deliver solutions that work flawlessly from day one.',
        link: 'View All Services →',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Network engineer working on advanced routing and switching equipment'
      },
      {
        id: 'zero-downtime',
        title: '99.999% Uptime Network Designs',
        description: 'We architect networks with redundancy at every layer - from dual ISP connections to HSRP/VRRP failover. Our designs ensure your business never stops, with proven track records of zero unplanned downtime.',
        link: 'View All Services →',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'High-availability data center with redundant network infrastructure'
      },
      {
        id: 'comprehensive-services',
        title: 'Complete Network Lifecycle Management',
        description: 'From initial design and deployment to ongoing monitoring and optimization, we handle every aspect of your network infrastructure. SD-WAN, wireless, security, cloud connectivity - all under one roof.',
        link: 'View All Services →',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Comprehensive network operations center monitoring global infrastructure'
      },
      {
        id: 'proven-results',
        title: 'Proven Results & Rapid ROI',
        description: 'Our clients see immediate improvements: 40% reduction in network costs, 300% performance gains, and seamless scalability. We deliver measurable business value, not just technical solutions.',
        link: 'View All Services →',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Business meeting showing network performance improvements and ROI metrics'
      }
    ];

    const currentItem = menuItems.find(item => item.id === activeItem) || menuItems[0];

    return (
      <div className="grid lg:grid-cols-2 gap-0 h-[70vh]">
        {/* Left Content Panel - Menu */}
        <div className="bg-white p-6 flex flex-col justify-center border-r border-gray-200">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Atlas Defenders</span> in Networking
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Backed by years of experience, certified expertise, and proven results, we deliver networking solutions that drive your business forward with reliability and performance.
            </p>
          </motion.div>

          {/* Interactive Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeItem === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                onClick={() => setActiveItem(item.id)}
                whileHover={{ x: 4 }}
              >
                {/* Blue accent line for active item */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transition-all duration-300 ${
                  activeItem === item.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                <div className={`pl-6 py-4 ${activeItem === item.id ? 'pl-8' : ''} transition-all duration-300`}>
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    activeItem === item.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <Link 
                          to="/services" 
                          className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors cursor-pointer inline-flex items-center"
                        >
                          {item.link}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              {/* Professional overlay for depth and sophistication */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-gray-900/30" />
              
              {/* Subtle brand accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  // Professional Networking Certification Card Component with Advanced Animations
  const NetworkingCertificationCard = ({ cert, index }: { cert: { name: string, logo: string, type: string }, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Certification logo mapping for networking certifications
    const getCertLogo = (certName: string) => {
      const logoMap: { [key: string]: string } = {
        // Cisco Certifications
        'CCNA': '/Certifications/CCNA.png',
        'CCNP Enterprise': '/Certifications/CCNP.png',
        'CCNP Security': '/Certifications/CCNP_SECURITY.png',
        
        // Juniper Certifications
        'JNCIA': '/Certifications/Jncia-junos.png',
        'JNCIS': '/Certifications/JNCIS-ENT.png',
        'JNCIP': '/Certifications/JNCIP-ENT.png',
        
        // Palo Alto Certifications
        'PCSNE': '/Certifications/PCSNE.png',
        
        // Fortinet Certifications
        'NSE 4': '/Certifications/FCP.png',
        'NSE 7': '/Certifications/FCP.png'
      };
      return logoMap[certName] || cert.logo;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{ 
          scale: 1.1, 
          y: -4,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.3
          }
        }}
        viewport={{ once: true }}
        className="cursor-pointer group"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo Image - Clean and Simple */}
          <motion.div 
            className="w-24 h-24 flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15 
              }
            }}
          >
            <motion.img
              src={getCertLogo(cert.name)}
              alt={`${cert.name} certification`}
              className="max-w-full max-h-full object-contain transition-all duration-300"
              whileHover={{
                filter: 'brightness(1.05) saturate(1.1)',
                transition: { duration: 0.3 }
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = cert.logo;
              }}
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.08 + 0.2
            }}
          >
            {/* Certification Name */}
            <motion.div 
              className="text-sm font-semibold tracking-wide text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
            >
              {cert.name}
            </motion.div>
            
            {/* Certification Type */}
            <motion.div 
              className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
            >
              {cert.type}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Hero Section - NETGEAR Style */}
      <section className="relative bg-white min-h-screen flex items-center overflow-hidden">


        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Brand/Service Name - Exact NETGEAR Style */}
              <div className="space-y-1">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
                  atlas <span className="font-bold text-blue-600">Network</span>
                </h1>
                <div className="text-3xl font-light text-gray-700 -mt-2">Engineering</div>
              </div>

              {/* Headlines - Exact NETGEAR Style */}
              <div className="space-y-2 mt-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Serious <span className="text-blue-600">performance</span>.
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Seriously <span className="text-blue-600">reliable</span>.
                </h2>
              </div>

              {/* Description - Your Exact Content */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg mt-6">
                From enterprise LANs to ISP backbones — Atlas Defenders designs, deploys, and optimizes networks that are fast, secure, and built for scale.
              </p>

              {/* Buttons - Exact NETGEAR Style */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-sm tracking-wider rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  START YOUR PROJECT
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-wider rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  LEARN MORE
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Multiple Network Images Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative flex flex-col gap-4">
                {/* Main Large Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Enterprise Network Infrastructure"
                      className="w-full h-64 object-cover rounded-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                </motion.div>

                {/* Secondary Smaller Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative ml-auto w-3/4"
                >
                  <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Cybersecurity Monitoring Dashboard - EDR/XDR Analytics"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-2xl"></div>
                  </div>
                </motion.div>

                {/* Background Decorative Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 — Why Global Leaders Choose Us - Light Zabbix Style */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ZabbixStyleSection />
        </div>
      </section>

      {/* EXACT UniFi-Style Expandable Services Grid */}
      <section className="py-20 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Enterprise <span className="text-blue-600">Network Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Click any service to explore detailed capabilities and features.
            </p>
          </motion.div>

          {/* EXACT UniFi Grid Layout */}
          <div className="space-y-3">
            {unifiServices.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-3">
                {row.map((service) => {
                  const isExpanded = expandedCard === service.id;
                  const isRowExpanded = row.some(s => expandedCard === s.id);
                  const shouldShrink = isRowExpanded && !isExpanded;

                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        layout: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className={`
                        relative bg-white border border-gray-200 cursor-pointer
                        transition-all duration-300 ease-in-out overflow-hidden
                        hover:shadow-sm hover:border-gray-300
                        ${isExpanded ? 'shadow-sm border-gray-300' : ''}
                        ${shouldShrink ? 'opacity-40' : 'opacity-100'}
                      `}
                      style={{
                        borderRadius: '6px',
                        minHeight: isExpanded ? '280px' : '180px',
                        flex: isExpanded ? '1.8' : shouldShrink ? '0.8' : '1',
                        minWidth: shouldShrink ? '180px' : '200px',
                        maxWidth: isExpanded ? 'none' : shouldShrink ? '220px' : '300px',
                        transition: 'all 0.3s ease-in-out'
                      }}
                      onClick={() => handleCardClick(service.id)}
                    >
                      {!isExpanded ? (
                        /* EXACT UniFi Collapsed Card */
                        <div className="p-5 text-center h-full flex flex-col justify-between">
                          <div className="flex-1 flex flex-col justify-center space-y-3">
                            {/* Icon - Exact UniFi Style */}
                            <div className="flex justify-center">
                              <div className="w-14 h-14 flex items-center justify-center">
                                {React.cloneElement(service.icon, { 
                                  className: "w-10 h-10 text-gray-700",
                                  strokeWidth: 1.2 
                                })}
                              </div>
                            </div>
                            
                            {/* Title - Exact UniFi Typography */}
                            <h3 className="text-base font-semibold text-gray-900 leading-tight px-1">
                              {service.title}
                            </h3>
                            
                            {/* Subtitle - Exact UniFi Style */}
                            <p className="text-xs text-blue-600 font-medium">
                              {service.subtitle}
                            </p>
                            
                            {/* Description - Exact UniFi Style */}
                            <p className="text-xs text-gray-600 leading-relaxed px-1">
                              {service.description}
                            </p>
                          </div>
                          
                          {/* Professional Enterprise Arrow Button */}
                          <div className="mt-4 flex justify-center">
                            <div className="group relative">
                              {/* Main Button */}
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-pointer border-2 border-gray-800 hover:border-blue-600 hover:bg-blue-50">
                                <svg className="w-3.5 h-3.5 text-gray-800 hover:text-blue-600 transition-all duration-300 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                </svg>
                              </div>
                              
                              {/* Glow Effect */}
                              <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                              
                              {/* Pulse Ring */}
                              <div className="absolute inset-0 w-8 h-8 border-2 border-gray-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                              
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 w-8 h-8 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* EXACT UniFi Expanded Card */
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="grid lg:grid-cols-5 gap-6 p-6"
                            style={{ minHeight: '240px' }}
                          >
                            {/* Left Section - Professional Image (More Space) */}
                            <div className="lg:col-span-2">
                              <div className="h-full bg-gray-50 rounded border border-gray-200 overflow-hidden">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="h-full flex items-center justify-center p-6">
                                          <div class="text-center">
                                            <div class="w-16 h-16 text-gray-700 mx-auto mb-3 flex items-center justify-center">
                                              ${service.icon.props.children || ''}
                                            </div>
                                            <h4 class="text-sm font-semibold text-gray-900 mb-1">${service.title}</h4>
                                            <p class="text-xs text-blue-600 font-medium">${service.subtitle}</p>
                                          </div>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                              </div>
                            </div>

                            {/* Right Section - Details (3 columns) */}
                            <div className="lg:col-span-3 flex flex-col justify-between">
                              <div>
                                {/* Header */}
                                <div className="mb-4">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>

                                {/* Features List - Exact UniFi Style */}
                                <div className="space-y-2">
                                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Key Capabilities
                                  </h4>
                                  <ul className="space-y-1">
                                    {service.features.map((feature, index) => (
                                      <li key={index} className="flex items-start text-xs text-gray-600">
                                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Bottom Actions - Close Button Only */}
                              <div className="flex items-center justify-end mt-4 pt-3 border-t border-gray-100">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedCard(null);
                                  }}
                                  className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Technologies We Use */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-leading networking vendors and tools that power enterprise infrastructure worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {networkingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="ubiquiti-card p-6 text-center group relative overflow-hidden cursor-pointer"
                onClick={() => {
                  const companyUrls: { [key: string]: string } = {
                    'Cisco': 'https://www.cisco.com',
                    'Juniper': 'https://www.juniper.net',
                    'Fortinet': 'https://www.fortinet.com',
                    'Palo Alto': 'https://www.paloaltonetworks.com',
                    'Huawei': 'https://www.huawei.com',
                    'Aruba': 'https://www.arubanetworks.com',
                    'UniFi': 'https://www.ui.com',
                    'TP-Link': 'https://www.tp-link.com',
                    'Sophos': 'https://www.sophos.com',
                    'F5': 'https://www.f5.com',
                    'pfSense': 'https://www.pfsense.org',
                    'Zabbix': 'https://www.zabbix.com'
                  };
                  const url = companyUrls[tech.name];
                  if (url) {
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className={`logo-hover ${tech.name === 'UniFi' ? 'max-h-12' : 'max-h-10'} max-w-full object-contain`}
                    title={`Visit ${tech.name} website`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-slate-600 font-semibold text-sm">${tech.name}</div>`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Global Certifications in Networking Excellence */}
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
              Global Certifications in Networking Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our team maintains the highest standards of professional excellence through comprehensive networking certification programs from industry-leading vendors
            </p>
          </motion.div>

          {/* Networking Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 px-4"
          >
            {networkingCertifications.map((cert, index) => (
              <NetworkingCertificationCard key={`${cert.name}-${index}`} cert={cert} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5 — What Our Clients Say */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* New Gradient Card Testimonials */}
          <GradientTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Call to Action Section - Matching Your Image Style */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't wait for network issues to impact your business. Get proactive network solutions with our comprehensive enterprise networking services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Book a Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Contact us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NetworkEngineeringPage;