import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Server,
  Award,
  Target,
  BarChart3,
  Database,
  Network,
  Settings,
  Zap,
  Star,
  Play,
  Download,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Cloud,
  Activity,
  FileText,
  Phone,
  Calendar,
  Building,
  Heart,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataCenterPage = () => {
  useEffect(() => {
    document.title = 'Next-Generation Data Centers - Modernize Your Infrastructure | Atlas Defenders';
    
    // Force logo and text colors but keep background transparent initially
    const forceNavColors = () => {
      const header = document.querySelector('header');
      if (header) {
        // Force logo to be blue always
        const logoElements = header.querySelectorAll('.h-8.w-8, .text-xl.font-bold');
        logoElements.forEach(element => {
          element.classList.remove('text-white');
          element.classList.add('text-blue-600');
        });
        
        // Force all navigation links to be dark always
        const navLinks = header.querySelectorAll('nav a:not([class*="bg-gradient"]), nav button:not([class*="bg-gradient"])');
        navLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-gray-900');
        });
        
        // Only add white background when scrolled (let the header component handle this naturally)
        // Don't force background color - let the normal scroll behavior work
      }
    };

    // Apply colors immediately and keep them applied
    forceNavColors();
    
    // Keep colors applied even when header component tries to change them
    const interval = setInterval(forceNavColors, 200);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
      // Reset colors when leaving the page
      const header = document.querySelector('header');
      if (header) {
        const logoElements = header.querySelectorAll('.h-8.w-8, .text-xl.font-bold');
        logoElements.forEach(element => {
          element.classList.remove('text-blue-600');
        });
        
        const navLinks = header.querySelectorAll('nav a, nav button');
        navLinks.forEach(link => {
          link.classList.remove('text-gray-900');
        });
      }
    };
  }, []);

  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeWhyChoose, setActiveWhyChoose] = useState(0);
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);

  // Animated Counter Hook
  const useAnimatedCounter = (end: number, duration: number = 2000, decimals: number = 0) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = startValue + (end - startValue) * easeOutQuart;
        
        setCount(Number(currentCount.toFixed(decimals)));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, decimals, isVisible]);

    return { count, setIsVisible };
  };

  // Interactive Tabs Data with detailed services
  const interactiveTabs = [
    {
      title: 'Installation',
      services: [
        {
          title: 'Rack Installation & Cabling',
          features: [
            'Professional rack installation',
            'Structured cabling: Cat5e/Cat6/Cat6a/Fiber',
            'Horizontal & vertical cable management',
            'Power Distribution Unit (PDU) setup',
            'Cable labeling and documentation'
          ],
          images: ['/Logos/rack.jpg', '/Logos/structured cabling.jpg']
        },
        {
          title: 'Wireless & Access Point (AP) Installation',
          features: [
            'AP installation (Wi-Fi 6/6E/7 ready)',
            'PoE (Power over Ethernet) deployment',
            'Site survey & signal optimization',
            'Enterprise-grade coverage and configuration',
            'Integration with RADIUS / 802.1X authentication',
            'Guest & internal segmentation'
          ],
          images: ['/Logos/network_configuration.jpg', '/Logos/cabling.jpg']
        },
        {
          title: 'Data Center Rack & Power Setup',
          features: [
            'Dual-power supply design and setup',
            'Smart PDU configuration',
            'Rack grounding and surge protection',
            'UPS and failover system integration'
          ],
          images: ['/Logos/Datacenter1.jpg', '/Logos/server cabling.jpg']
        },
        {
          title: 'Access Control Systems',
          features: [
            'Door access with RFID & biometric readers',
            'Centralized identity & access management',
            'Integration with surveillance and alerting',
            'Logs for compliance and forensic auditing'
          ],
          images: ['/Logos/Datacenter2.jpg', '/Logos/structured cabling 2.jpg']
        },
        {
          title: 'Video Surveillance Systems',
          features: [
            'IP-based camera deployment (PTZ, 360°, Bullet)',
            'NVR/DVR configuration',
            'Integration with SOC/SIEM platforms',
            'Real-time and recorded video analytics'
          ],
          images: ['/Logos/monitoring_img.png', '/Logos/cabling 2.jpg']
        },
        {
          title: 'Audio & Paging Systems',
          features: [
            'Overhead paging and sound distribution',
            'Rack-mounted amplifiers and mixers',
            'Alert & announcement system integration'
          ],
          images: ['/Logos/structured cabling 3.jpg', '/Logos/cabling.jpg']
        }
      ]
    },
    {
      title: 'Network Design',
      services: [
        {
          title: 'Enterprise Network Architecture',
          features: [
            'Network topology design and optimization',
            'VLAN segmentation and security zones',
            'Redundancy and failover planning',
            'Bandwidth optimization and QoS',
            'Network monitoring and analytics'
          ],
          image: '/Logos/network_configuration.jpg'
        },
        {
          title: 'Security & Firewall Configuration',
          features: [
            'Next-generation firewall deployment',
            'Network access control (NAC)',
            'VPN and remote access solutions',
            'Intrusion detection and prevention',
            'Security policy management'
          ],
          image: '/Logos/Datacenter1.jpg'
        },
        {
          title: 'Wireless & Mobility Solutions',
          features: [
            'Enterprise Wi-Fi design and deployment',
            'Wireless controller configuration',
            'Mobile device management (MDM)',
            'Guest network implementation',
            'Wireless security optimization'
          ],
          image: '/Logos/Datacenter2.jpg'
        }
      ]
    },
    {
      title: 'Server Administration',
      services: [
        {
          title: 'Windows Server Management',
          features: [
            'Active Directory design and implementation',
            'Windows Server deployment and configuration',
            'Group Policy management',
            'Exchange Server administration',
            'SharePoint deployment and management'
          ],
          image: '/Logos/Datacenter2.jpg'
        },
        {
          title: 'Linux Server Administration',
          features: [
            'Red Hat and Ubuntu server deployment',
            'Container orchestration with Kubernetes',
            'Web server configuration (Apache, Nginx)',
            'Database administration (MySQL, PostgreSQL)',
            'Shell scripting and automation'
          ],
          image: '/Logos/Datacenter1.jpg'
        },
        {
          title: 'Virtualization & Hypervisors',
          features: [
            'VMware vSphere implementation',
            'Hyper-V deployment and management',
            'Virtual machine optimization',
            'High availability clustering',
            'Disaster recovery planning'
          ],
          image: '/Logos/network_configuration.jpg'
        }
      ]
    },
    {
      title: 'Cloud Architecture',
      services: [
        {
          title: 'Hybrid Cloud Solutions',
          features: [
            'AWS and Azure integration',
            'Hybrid cloud architecture design',
            'Cloud migration strategy',
            'Multi-cloud management',
            'Cost optimization and monitoring'
          ],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
        }
      ]
    },
    {
      title: 'Backup',
      services: [
        {
          title: 'Disaster Recovery Solutions',
          features: [
            'Automated backup systems',
            'Disaster recovery planning',
            'Data replication and synchronization',
            'Recovery time optimization',
            'Compliance and audit reporting'
          ],
          image: '/Logos/Datacenter1.jpg'
        }
      ]
    },
    {
      title: 'Infrastructure Monitoring',
      services: [
        {
          title: 'Proactive Monitoring Systems',
          features: [
            'Real-time performance monitoring',
            'Predictive analytics and alerting',
            'Automated incident response',
            'Capacity planning and optimization',
            'Custom dashboards and reporting'
          ],
          image: '/Logos/monitoring_img.png'
        }
      ]
    },
    {
      title: 'Zero Trust',
      services: [
        {
          title: 'Zero Trust Security Framework',
          features: [
            'Identity and access management',
            'Network micro-segmentation',
            'Continuous security monitoring',
            'Multi-factor authentication',
            'Security policy automation'
          ],
          image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop'
        }
      ]
    }
  ];

  // Reset progress when tab changes manually
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // What We Deliver Services
  const deliverables = [
    { title: 'Virtualization & Hyperconverged Infrastructure', subtitle: 'VMware, Nutanix, Proxmox', icon: Server },
    { title: 'Windows & Linux Server Administration', subtitle: 'Enterprise server management', icon: Monitor },
    { title: 'Cloud-Ready & Hybrid Architecture', subtitle: 'Seamless cloud integration', icon: Cloud },
    { title: 'Network Design & Firewall Configuration', subtitle: 'Secure network infrastructure', icon: Network },
    { title: 'Rack, Cabling & Power Planning', subtitle: 'Physical infrastructure design', icon: Zap },
    { title: 'Infrastructure Monitoring & Automation', subtitle: 'Proactive system management', icon: Activity },
    { title: 'Backup & Disaster Recovery Solutions', subtitle: 'Business continuity planning', icon: Database },
    { title: 'Zero Trust Security & Access Control', subtitle: 'Advanced security framework', icon: Shield }
  ];

  // Technology Stack
  const techStacks = [
    {
      category: 'Virtualization',
      technologies: ['VMware', 'Nutanix', 'Hyper-V', 'Proxmox']
    },
    {
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto']
    },
    {
      category: 'Automation',
      technologies: ['Ansible', 'Terraform', 'Zabbix', 'PRTG']
    },
    {
      category: 'Operating Systems',
      technologies: ['Windows Server', 'Red Hat', 'Ubuntu', 'Debian']
    },
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'GCP']
    },
    {
      category: 'Network Hardware',
      technologies: ['Ubiquiti', 'MikroTik', 'Aruba', 'Meraki']
    }
  ];

  // Certifications
  const certifications = [
    'VCP-DCV (VMware Certified Professional – Data Center Virtualization)',
    'NCP-MCI (Nutanix Certified Professional – Multicloud Infrastructure)',
    'CCNA, JNCIA, Fortinet NSE 4–8, PCNSE',
    'RHCSA, LPIC, AZ-800/801, AWS Certified Architect',
    'GCP Associate / Pro Architect, ITIL, ISO 27001 / 22301'
  ];

  // Next-Gen Services
  const nextGenServices = [
    {
      title: 'Virtualization & Compute Infrastructure',
      features: [
        'Server provisioning and clustering (vSphere, AHV, KVM)',
        'Centralized compute resource pools',
        'High availability and fault tolerance'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      title: 'Network Architecture & Security',
      features: [
        'LAN/WAN design with segmentation',
        'Firewall and ACL configuration (FortiGate, Palo Alto, pfSense)',
        'VPN setup and zero-trust network models'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Monitoring & Automation',
      features: [
        'Real-time network monitoring (Zabbix, PRTG)',
        'Infrastructure-as-Code (Ansible, Terraform)',
        'Log collection and alerting systems (Syslog, Graylog)'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      title: 'Cloud & Hybrid Deployments',
      features: [
        'Integration with AWS, Azure, GCP',
        'Hybrid solutions (e.g., Azure Stack, vCloud Director)',
        'Identity Federation & SSO (AD, ADFS, Keycloak)'
      ],
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop'
    },
    {
      title: 'Rack Deployment & Cabling',
      features: [
        'Physical setup, labeling, and patch panel design',
        'Power planning and cooling (PDU, UPS)',
        'Wireless deployment (Access Points, Controllers)'
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
    }
  ];

  // Why Choose Atlas Defenders - Interactive Content
  const whyChooseUsData = [
    {
      id: 0,
      title: 'Expert Engineering',
      subtitle: 'Certified engineers with multi-vendor expertise',
      description: 'Our team of certified professionals brings decades of combined experience across all major infrastructure platforms and technologies.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      features: [
        'Industry-certified professionals with extensive hands-on experience',
        'Multi-vendor expertise across leading technology platforms',
        'Continuous training and certification maintenance programs',
        'Deep technical knowledge in emerging technologies'
      ]
    },
    {
      id: 1,
      title: 'Hybrid Expertise',
      subtitle: 'Experience in private, public, and hybrid environments',
      description: 'Seamless integration across on-premises, cloud, and hybrid infrastructures with proven methodologies and best practices.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      features: [
        'Proven track record in complex hybrid deployments',
        'Cloud-native and traditional infrastructure expertise',
        'Seamless migration and integration strategies',
        'Cost optimization across multi-cloud environments'
      ]
    },
    {
      id: 2,
      title: 'Tailored Solutions',
      subtitle: 'Scalable designs tailored to your industry',
      description: 'Custom-engineered solutions that align with your specific business requirements, compliance needs, and growth objectives.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      features: [
        'Industry-specific compliance and regulatory expertise',
        'Scalable architectures that grow with your business',
        'Custom integration with existing systems and workflows',
        'Performance optimization for your specific use cases'
      ]
    },
    {
      id: 3,
      title: 'Security First',
      subtitle: 'Secure-by-default implementations',
      description: 'Comprehensive security frameworks integrated from the ground up, ensuring your infrastructure is protected against evolving threats.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      features: [
        'Zero-trust security architecture implementation',
        'Advanced threat detection and response systems',
        'Compliance with industry security standards',
        'Regular security assessments and vulnerability management'
      ]
    },
    {
      id: 4,
      title: 'Complete Documentation',
      subtitle: 'Post-deployment documentation and training',
      description: 'Comprehensive documentation and knowledge transfer ensuring your team can effectively manage and maintain your infrastructure.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      features: [
        'Detailed technical documentation and runbooks',
        'Comprehensive training programs for your technical staff',
        'Best practices guides and troubleshooting procedures',
        'Ongoing knowledge transfer and skill development'
      ]
    },
    {
      id: 5,
      title: 'Ongoing Support',
      subtitle: 'Comprehensive support and maintenance',
      description: 'Proactive monitoring, maintenance, and support services ensuring optimal performance and minimal downtime for your critical systems.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      features: [
        '24/7 monitoring and proactive issue resolution',
        'Predictive maintenance and performance optimization',
        'Rapid response times for critical incidents',
        'Regular health checks and system updates'
      ]
    }
  ];

  // Industries We Serve - Complete Data with Relevant Images
  const industriesData = [
    {
      name: 'Finance & Banking',
      icon: Building,
      description: 'Comprehensive data center solutions for financial institutions with SOX compliance, real-time transaction processing, fraud detection systems, and regulatory reporting infrastructure. Our secure environments ensure 99.99% uptime for critical banking operations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop', // Financial data/charts
      badges: ['SOX Compliance', 'PCI DSS Level 1'],
      gradient: 'from-blue-500/40 via-indigo-600/30 to-purple-700/40'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'HIPAA-compliant data centers designed for hospitals, clinics, and healthcare providers. Secure patient data storage, medical imaging systems, electronic health records (EHR), and telemedicine infrastructure with end-to-end encryption.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop', // Medical equipment/hospital
      badges: ['HIPAA Compliant', 'HITECH Act'],
      gradient: 'from-emerald-500/40 via-teal-600/30 to-cyan-700/40'
    },
    {
      name: 'E-Commerce & Cloud Providers',
      icon: ShoppingCart,
      description: 'Scalable cloud infrastructure for e-commerce platforms, payment processing systems, inventory management, and customer data protection. High-performance computing resources with auto-scaling capabilities for peak traffic periods.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop', // E-commerce/online shopping
      badges: ['PCI DSS', 'ISO 27001'],
      gradient: 'from-orange-500/40 via-red-600/30 to-pink-700/40'
    },
    {
      name: 'Government & Public Sector',
      icon: Shield,
      description: 'FedRAMP-authorized data centers for federal, state, and local government agencies. FISMA-compliant infrastructure supporting classified data processing, citizen services, emergency response systems, and inter-agency communications.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=800&fit=crop', // Government building/security
      badges: ['FedRAMP Authorized', 'FISMA Compliant'],
      gradient: 'from-slate-600/40 via-gray-700/30 to-zinc-800/40'
    },
    {
      name: 'Critical Infrastructure',
      icon: Zap,
      description: 'Hardened data centers for power grids, water treatment facilities, transportation systems, and telecommunications networks. NERC CIP compliance, industrial control systems (ICS/SCADA), and 24/7 monitoring for national security.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=800&fit=crop', // Power plant/industrial infrastructure
      badges: ['NERC CIP', 'ICS Security'],
      gradient: 'from-yellow-500/40 via-orange-600/30 to-red-700/40'
    },
    {
      name: 'Education & Research',
      icon: GraduationCap,
      description: 'Academic data centers supporting universities, research institutions, and K-12 schools. FERPA-compliant student information systems, research computing clusters, distance learning platforms, and collaborative research networks.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=800&fit=crop', // University/education
      badges: ['FERPA Compliant', 'Research Grade'],
      gradient: 'from-green-500/40 via-emerald-600/30 to-teal-700/40'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      description: 'Secure data centers for law firms, consulting companies, accounting firms, and professional service providers. Client confidentiality protection, document management systems, secure communications, and compliance reporting.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop', // Professional office/business
      badges: ['Attorney-Client Privilege', 'Professional Standards'],
      gradient: 'from-purple-500/40 via-indigo-600/30 to-blue-700/40'
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Settings,
      description: 'Industrial-grade data centers for manufacturing operations, supply chain management, IoT sensor networks, predictive maintenance systems, and quality control processes. Integration with ERP, MES, and automation systems.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=800&fit=crop', // Manufacturing/industrial
      badges: ['Industry 4.0', 'IoT Security'],
      gradient: 'from-gray-500/40 via-slate-600/30 to-zinc-700/40'
    }
  ];

  // Auto-advance carousel with pause on hover/interaction
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (isCarouselPaused) return; // Don't auto-advance when paused

    const interval = setInterval(() => {
      setCurrentIndustryIndex((prev) => (prev + 1) % industriesData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [industriesData.length, isCarouselPaused]);

  // Navigation functions
  const nextIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev + 1) % industriesData.length);
  };

  const prevIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev - 1 + industriesData.length) % industriesData.length);
  };

  const goToIndustry = (index: number) => {
    setCurrentIndustryIndex(index);
  };

  // Animated Stat Card Component
  const AnimatedStatCard = ({ 
    endValue, 
    suffix = '', 
    label, 
    duration = 2000, 
    decimals = 0 
  }: {
    endValue: number;
    suffix?: string;
    label: string;
    duration?: number;
    decimals?: number;
  }) => {
    const { count, setIsVisible } = useAnimatedCounter(endValue, duration, decimals);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        onViewportEnter={() => setIsVisible(true)}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
          {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
        </div>
        <div className="text-blue-200">{label}</div>
      </motion.div>
    );
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="flex min-h-screen">
          {/* Left Content */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-16 py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modernize Your Infrastructure with
                <span className="text-blue-600"> Next-Gen Data Centers</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Enterprise-ready, highly available, and scalable solutions — built for the cloud era.
              </p>

              {/* Email Input and Button */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap">
                    Get Started
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    Request Infrastructure Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to a Solution Architect
                  </Link>
                </div>
              </div>


            </motion.div>
          </div>

          {/* Right Curved Image Section */}
          <div className="flex-1 relative">
            {/* Curved overlay that creates the smooth curve */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderRadius: '0 0 0 100px'
              }}
            >
              {/* Data center image */}
              <div className="relative w-full h-full">
                <img
                  src="/Logos/Datacenter1.jpg"
                  alt="Modern Data Center Infrastructure"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    // Fallback to external image if local image fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop";
                  }}
                />
                
                {/* Gradient overlay to match reference */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/50 to-indigo-700/60"></div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>


              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 2.5. INTERACTIVE SERVICES SHOWCASE - UniFi Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data center solutions with enterprise-grade reliability and performance.
            </p>
          </div>

          {/* Tab Navigation - UniFi Style */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {interactiveTabs.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => handleTabClick(index)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {tab.title}

              </button>
            ))}
          </div>

          {/* Dynamic Section Header */}
          <div className="text-center mb-20">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {interactiveTabs[activeTab].title}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {activeTab === 0 
                  ? "We engineer and execute end-to-end infrastructure installations with military-grade precision, ensuring every cable, rack, and system is deployed to exceed enterprise standards."
                  : activeTab === 1
                  ? "Comprehensive network design with redundancy, segmentation, and scalability built-in for enterprise-grade performance."
                  : activeTab === 2
                  ? "Complete server lifecycle management from deployment to maintenance, ensuring optimal performance and security."
                  : activeTab === 3
                  ? "Seamless integration between on-premises and cloud environments with optimized performance and cost efficiency."
                  : activeTab === 4
                  ? "Comprehensive backup and disaster recovery solutions ensuring business continuity and data protection."
                  : activeTab === 5
                  ? "Real-time monitoring and alerting systems with predictive analytics for proactive infrastructure management."
                  : "Advanced security architecture with zero trust principles, ensuring comprehensive protection across all infrastructure layers."
                }
              </p>
            </motion.div>
          </div>

          {/* Dynamic Services Content - Two Images + Content Layout */}
          <div className="space-y-24">
            {interactiveTabs[activeTab].services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center group ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Images Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full h-[500px]">
                    {/* First Image - Background/Base - Tall Rectangle */}
                    <div className="absolute top-0 left-0 w-3/5 h-5/6 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-1 hover:scale-105 hover:rotate-1 transition-all duration-700 cursor-pointer">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={service.images ? service.images[0] : service.image}
                          alt={`${service.title} - Image 1`}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110"
                        />
                      </div>
                      {/* Individual Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Second Image - Overlapping/Stacked - Tall Rectangle - Individual hover */}
                    <div className="absolute bottom-0 right-0 w-3/5 h-5/6 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-purple-50 to-blue-100 p-1 hover:scale-105 hover:-rotate-2 transition-all duration-700 cursor-pointer">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={service.images ? service.images[1] : service.image}
                          alt={`${service.title} - Image 2`}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:contrast-110"
                        />
                      </div>
                      {/* Individual Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    {activeTab === 0 ? (
                      // Installation tab - use specific titles for each service
                      index === 0 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Structured Rack &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Cabling <span className="text-blue-600">Implementation</span>
                          </h2>
                        </>
                      ) : index === 1 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Wireless Architecture &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Access Point <span className="text-blue-600">Deployment</span>
                          </h2>
                        </>
                      ) : index === 2 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Power & Redundancy
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Systems <span className="text-blue-600">Integration</span>
                          </h2>
                        </>
                      ) : index === 3 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Smart Access Control &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Identity <span className="text-blue-600">Management</span>
                          </h2>
                        </>
                      ) : index === 4 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Video Surveillance &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Analytics <span className="text-blue-600">Integration</span>
                          </h2>
                        </>
                      ) : (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Enterprise
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Audio <span className="text-blue-600">Systems</span>
                          </h2>
                        </>
                      )
                    ) : (
                      // Other tabs - keep the original "Disciplined Design Practices"
                      <>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          Disciplined
                        </h2>
                        <h2 className="text-4xl font-bold mb-6">
                          Design <span className="text-blue-600">Practices</span>
                        </h2>
                      </>
                    )}
                  </div>

                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 3. OUR TECHNOLOGY PARTNERS - Professional Dark Design with Cursor Light */}
      <section 
        className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Cursor Following Blue Light Effect */}
        <div 
          className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
          style={{
            left: 'var(--mouse-x, 50%)',
            top: 'var(--mouse-y, 50%)',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-5xl font-bold text-white leading-tight mb-6">
                    Our Technology
                  </h2>
                  <h2 className="text-5xl font-bold text-blue-400 leading-tight mb-8">
                    Partners
                  </h2>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Enhance your infrastructure security with seamless integration across 7 popular 
                  technology platforms. Our solution fits effortlessly into your existing workflows 
                  for comprehensive coverage and ease of use.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Keep the infrastructure software you already have and get more ROI from your 
                  technology investments now and in the future.
                </p>
                
                <p className="text-sm text-blue-300 font-medium">
                  This is a representative sample of our 350+ technology integrations.
                </p>
              </motion.div>

              {/* Right Technology Partners Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-8">
                  {/* Row 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">AWS</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">Git</span>
                    </div>
                  </motion.div>

                  {/* Row 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">JFrog</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">Oracle</span>
                    </div>
                  </motion.div>

                  {/* Row 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">IBM</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center h-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">GCP</span>
                    </div>
                  </motion.div>
                </div>

                {/* Additional floating elements for extra professional effect */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-pulse delay-1000"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </section>

      {/* 4. OUR INFRASTRUCTURE CERTIFICATIONS - Ultra Modern Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our Infrastructure
              </h2>
              <h2 className="text-5xl font-bold text-blue-600 mb-8">
                Certifications
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our expert team holds industry-leading infrastructure certifications, ensuring advanced 
                data center deployment and enterprise-grade security capabilities.
              </p>
            </motion.div>
          </div>

          {/* Modern Certification Badges Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            {/* VCP-DCV Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">VCP</span>
                  <div className="text-white/80 text-xs">DCV</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* NCP-MCI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">NCP</span>
                  <div className="text-white/80 text-xs">MCI</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* OSCP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">OSCP</span>
                  <div className="text-white/80 text-xs">Offensive</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* OSEP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">OSEP</span>
                  <div className="text-white/80 text-xs">Evasion</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* OSWP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">OSWP</span>
                  <div className="text-white/80 text-xs">Wireless</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* CCNA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-slate-500 via-gray-600 to-slate-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Network className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">CCNA</span>
                  <div className="text-white/80 text-xs">Cisco</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>

            {/* AWS Certified Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-4 border-white/50">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs">AWS</span>
                  <div className="text-white/80 text-xs">Certified</div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>
          </div>

          {/* Additional Professional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/50 shadow-xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <span className="font-semibold text-blue-600">Continuous Excellence:</span> Our team maintains active certifications 
                across virtualization, cloud platforms, networking, and cybersecurity domains.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="bg-blue-100 px-3 py-1 rounded-full">VMware Certified</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">Nutanix Expert</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">AWS Solutions Architect</span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">Offensive Security</span>
                <span className="bg-cyan-100 px-3 py-1 rounded-full">Network Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 6. WHY CHOOSE ATLAS DEFENDERS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Why Choose
              </h2>
              <h2 className="text-4xl font-bold mb-6">
                Atlas <span className="text-blue-600">Defenders?</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise and commitment to delivering exceptional infrastructure solutions.
            </p>
          </div>

          {/* Interactive Services Layout - Exact Style from Reference */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Left Sidebar Menu */}
              <div className="lg:col-span-2 space-y-3 flex flex-col">
                {whyChooseUsData.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveWhyChoose(item.id)}
                    className={`relative w-full text-left p-5 rounded-xl shadow-lg transition-all duration-500 group overflow-hidden transform hover:scale-105 hover:-translate-y-1 ${
                      activeWhyChoose === item.id 
                        ? 'bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 shadow-2xl shadow-blue-500/25' 
                        : 'bg-white hover:bg-gradient-to-b hover:from-blue-900 hover:via-blue-950 hover:to-slate-900 hover:shadow-2xl hover:shadow-blue-500/25'
                    }`}
                  >
                    {/* Background shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <span className={`text-lg font-bold transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-white' 
                            : 'text-gray-900 group-hover:text-white'
                        }`}>
                          {item.title}
                        </span>
                        <div className={`text-sm mt-1 transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-blue-100' 
                            : 'text-gray-500 group-hover:text-blue-100'
                        }`}>
                          {item.subtitle}
                        </div>
                      </div>
                      
                      <div className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                        activeWhyChoose === item.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-100 group-hover:bg-white/20'
                      }`}>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-white' 
                            : 'text-gray-600 group-hover:text-white'
                        }`} />
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeWhyChoose === item.id && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                      />
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </motion.button>
                ))}
              </div>

              {/* Right Content Area - Dynamic */}
              <div className="lg:col-span-3 flex">
                <motion.div
                  key={activeWhyChoose}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 rounded-2xl overflow-hidden shadow-2xl w-full flex flex-col justify-between"
                  style={{ minHeight: 'calc(6 * 5rem + 5 * 0.75rem)' }} // 6 items * height + 5 gaps
                >


                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                    {/* Top Section */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3"
                      >
                        <h3 className="text-4xl font-bold text-white leading-tight">
                          {whyChooseUsData[activeWhyChoose].title}
                        </h3>
                        <p className="text-cyan-300 text-base font-semibold">
                          {whyChooseUsData[activeWhyChoose].subtitle}
                        </p>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-blue-100 text-lg leading-relaxed"
                      >
                        {whyChooseUsData[activeWhyChoose].description}
                      </motion.p>
                    </div>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="space-y-4"
                    >
                      <h4 className="text-xl font-semibold text-white mb-4">Key Benefits:</h4>
                      <ul className="space-y-4">
                        {whyChooseUsData[activeWhyChoose].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                            className="flex items-start text-gray-200"
                          >
                            <div className="w-3 h-3 bg-cyan-400 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Bottom CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="pt-8 border-t border-white/20 flex justify-center"
                    >
                      <Link
                        to="/contact"
                        className="group relative inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-white/25 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        {/* Button content */}
                        <div className="relative z-10 flex items-center space-x-3">
                          <span className="transition-all duration-300 group-hover:text-blue-600">
                            Get Started Today
                          </span>
                          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-white to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
                      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE - Professional Carousel Design */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  Industries We
                </h2>
                <h2 className="text-5xl font-bold text-blue-600 mb-6">
                  Serve
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Atlas Defenders provides specialized data center solutions across critical industries, ensuring 
                compliance and protection tailored to each sector's unique requirements.
              </p>
              
              <Link
                to="/industries"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore Your Industry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Right Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {/* Industry Cards Carousel - With Drag Support */}
              <div className="relative overflow-hidden rounded-3xl">
                <motion.div 
                  className="flex cursor-pointer hover:cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{
                    left: -((industriesData.length - 1) * 340),
                    right: 0
                  }}
                  dragElastic={0.2}
                  dragMomentum={false}
                  onDragStart={() => {
                    // Disable auto-advance while dragging
                  }}
                  onDragEnd={(event, info) => {
                    const threshold = 50;
                    const velocity = info.velocity.x;
                    const offset = info.offset.x;

                    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
                      if (offset > 0 || velocity > 500) {
                        if (currentIndustryIndex > 0) {
                          setCurrentIndustryIndex(currentIndustryIndex - 1);
                        }
                      } else if (offset < 0 || velocity < -500) {
                        if (currentIndustryIndex < industriesData.length - 1) {
                          setCurrentIndustryIndex(currentIndustryIndex + 1);
                        }
                      }
                    }
                  }}
                  animate={{ 
                    x: -currentIndustryIndex * 340
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 40,
                    mass: 1
                  }}
                  whileDrag={{ 
                    scale: 0.98
                  }}
                >
                  {industriesData.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <motion.div 
                        key={industry.name}
                        className="min-w-[320px] h-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl relative group hover:scale-105 transition-all duration-500 border border-gray-100 mr-5"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Image - More Visible */}
                        <img 
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-cover opacity-90 pointer-events-none"
                        />
                        
                        {/* Blue Gradient Blur at Top - Lighter */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-600/50 via-blue-700/30 to-transparent backdrop-blur-sm"></div>
                        
                        {/* Industry-specific gradient overlay - Much Lighter */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}></div>
                        
                        {/* Bottom dark gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white pointer-events-none">
                          <div className="flex items-center mb-3">
                            <Icon className="w-6 h-6 mr-3 text-white" />
                            <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                          </div>
                          <p className="text-white/90 mb-4 text-sm leading-relaxed">
                            {industry.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {industry.badges.map((badge, badgeIndex) => (
                              <span 
                                key={badgeIndex}
                                className="bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {industriesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToIndustry(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndustryIndex === index 
                        ? 'bg-blue-600 shadow-sm scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows - Better Positioning */}
              <button
                onClick={prevIndustry}
                className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextIndustry}
                className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT SUCCESS SNAPSHOT - With Animated Counters */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-8 max-w-4xl mx-auto">
              "Atlas Defenders transformed our legacy infrastructure into a resilient,
              high-performing private cloud."
            </blockquote>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">40+</div>
                <div className="text-blue-200">Datacenter Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Countries Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-blue-200">Infrastructure Availability SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA SECTION - With Cursor Following Light Effect */}
      <section 
        className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Cursor Following Blue Light Effect */}
        <div 
          className="absolute pointer-events-none opacity-40 transition-opacity duration-300"
          style={{
            left: 'var(--mouse-x, 50%)',
            top: 'var(--mouse-y, 50%)',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build the Backbone of Your Digital Future
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to modernize your infrastructure? Our experts are here to design and implement
              the perfect data center solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <Calendar className="w-5 h-5 transition-all duration-300 group-hover:text-blue-600" />
                  <span className="transition-all duration-300 group-hover:text-blue-600">
                    Book a Free Infrastructure Strategy Call
                  </span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-white to-indigo-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </Link>

              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-blue-500/20"
              >
                <Settings className="w-5 h-5 mr-3 transition-all duration-300" />
                Explore Our Managed Services
              </Link>
            </div>

            {/* Contact Information */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-6 text-lg">
                Need immediate assistance? Our solution architects are standing by.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:+1-800-ATLAS-DEF"
                  className="group inline-flex items-center text-white hover:text-blue-300 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">1-800-ATLAS-DEF</span>
                </a>
                <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
                <a
                  href="mailto:datacenter@atlasdefenders.com"
                  className="group inline-flex items-center text-white hover:text-blue-300 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">datacenter@atlasdefenders.com</span>
                </a>
              </div>
            </div>

            {/* Additional floating elements for extra professional effect */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DataCenterPage;