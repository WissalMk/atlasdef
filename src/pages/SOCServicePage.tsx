import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Activity,
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  Eye,
  AlertTriangle,
  Clock,
  FileText,
  Zap,
  Search,
  Globe,
  Server,
  Lock,
  Target,
  Cpu,
  Network,
  Award,
  Building,
  Heart,
  Landmark,
  ShoppingCart,
  Satellite,
  Monitor,
  BarChart3,
  TrendingUp,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCServicePage = () => {
  useEffect(() => {
    document.title = '24/7 SOC as a Service | Atlas Defenders';
  }, []);


  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Brand color mappings based on actual logo dominant colors
  const brandColors = {
    'CrowdStrike': 'from-red-600 to-red-800',
    'Palo Alto Cortex XDR': 'from-orange-500 to-red-600',
    'Palo Alto Cortex XSOAR': 'from-orange-500 to-red-600',
    'Palo Alto': 'from-orange-500 to-red-600',
    'SentinelOne': 'from-purple-600 to-indigo-700',
    'Wazuh': 'from-blue-600 to-blue-800',
    'Cybereason': 'from-orange-600 to-red-700',
    'Symantec': 'from-yellow-500 to-orange-600',
    'Splunk SOAR': 'from-green-600 to-green-800',
    'Splunk': 'from-green-600 to-green-800',
    'LogRhythm': 'from-blue-700 to-indigo-800',
    'Graylog': 'from-gray-700 to-gray-900',
    'Security Onion': 'from-green-700 to-green-900',
    'Fortinet': 'from-red-600 to-red-800',
    'Cisco ASA / Firepower': 'from-blue-600 to-blue-800',
    'Cisco': 'from-blue-600 to-blue-800',
    'Sophos XG': 'from-blue-500 to-blue-700',
    'Sophos': 'from-blue-500 to-blue-700',
    'pfSense': 'from-blue-600 to-blue-800',
    'OPNsense': 'from-orange-600 to-orange-800',
    'Snort': 'from-pink-500 to-pink-700',
    'Suricata': 'from-orange-600 to-red-700',
    'Zeek': 'from-blue-600 to-blue-800',
    'Tenable Nessus': 'from-green-600 to-green-800',
    'Qualys': 'from-red-600 to-red-800',
    'OpenVAS': 'from-green-700 to-green-900',
    'Acunetix': 'from-orange-600 to-orange-800',
    'Rapid7': 'from-orange-600 to-red-700',
    'F5': 'from-gray-700 to-gray-900',
    'ModSecurity': 'from-blue-700 to-blue-900',
    'OWASP': 'from-blue-600 to-blue-800',
    'Keycloak': 'from-red-600 to-red-800',
    'Authentik': 'from-blue-600 to-blue-800',
    'Authelia': 'from-blue-700 to-indigo-800',
    'Okta': 'from-blue-600 to-blue-800',
    'Azure Active Directory': 'from-blue-600 to-blue-800',
    'CyberArk': 'from-red-600 to-red-800',
    'HashiCorp Vault': 'from-purple-600 to-purple-800',
    'HAProxy': 'from-blue-700 to-blue-900',
    'Squid Proxy': 'from-purple-600 to-purple-800',
    'MISP': 'from-blue-600 to-blue-800',
    'Open Threat Exchange (OTX)': 'from-blue-600 to-blue-800',
    'IBM SOAR': 'from-blue-700 to-blue-900',
    'IBM QRadar': 'from-blue-700 to-blue-900',
    'Shuffle': 'from-gray-800 to-black',
    'TheHive': 'from-orange-600 to-orange-800',
    'Elastic Stack': 'from-yellow-500 to-orange-600'
  };

  // Company website URLs for redirects
  const companyUrls = {
    'CrowdStrike': 'https://www.crowdstrike.com',
    'Palo Alto Cortex XDR': 'https://www.paloaltonetworks.com',
    'Palo Alto Cortex XSOAR': 'https://www.paloaltonetworks.com',
    'Palo Alto': 'https://www.paloaltonetworks.com',
    'SentinelOne': 'https://www.sentinelone.com',
    'Wazuh': 'https://wazuh.com',
    'Cybereason': 'https://www.cybereason.com',
    'Symantec': 'https://www.broadcom.com/products/cybersecurity',
    'Splunk SOAR': 'https://www.splunk.com',
    'Splunk': 'https://www.splunk.com',
    'LogRhythm': 'https://logrhythm.com',
    'Graylog': 'https://www.graylog.org',
    'Security Onion': 'https://securityonionsolutions.com',
    'Fortinet': 'https://www.fortinet.com',
    'Cisco ASA / Firepower': 'https://www.cisco.com',
    'Cisco': 'https://www.cisco.com',
    'Sophos XG': 'https://www.sophos.com',
    'Sophos': 'https://www.sophos.com',
    'pfSense': 'https://www.pfsense.org',
    'OPNsense': 'https://opnsense.org',
    'Snort': 'https://www.snort.org',
    'Suricata': 'https://suricata.io',
    'Zeek': 'https://zeek.org',
    'Tenable Nessus': 'https://www.tenable.com',
    'Qualys': 'https://www.qualys.com',
    'OpenVAS': 'https://www.openvas.org',
    'Acunetix': 'https://www.acunetix.com',
    'Rapid7': 'https://www.rapid7.com',
    'F5': 'https://www.f5.com',
    'ModSecurity': 'https://modsecurity.org',
    'OWASP': 'https://owasp.org',
    'Keycloak': 'https://www.keycloak.org',
    'Authentik': 'https://goauthentik.io',
    'Authelia': 'https://www.authelia.com',
    'Okta': 'https://www.okta.com',
    'Azure Active Directory': 'https://azure.microsoft.com/en-us/products/active-directory',
    'CyberArk': 'https://www.cyberark.com',
    'HashiCorp Vault': 'https://www.vaultproject.io',
    'HAProxy': 'https://www.haproxy.org',
    'Squid Proxy': 'http://www.squid-cache.org',
    'MISP': 'https://www.misp-project.org',
    'Open Threat Exchange (OTX)': 'https://otx.alienvault.com',
    'IBM SOAR': 'https://www.ibm.com/products/qradar-soar',
    'IBM QRadar': 'https://www.ibm.com/products/qradar-siem',
    'Shuffle': 'https://shuffler.io',
    'TheHive': 'https://thehive-project.org',
    'Elastic Stack': 'https://www.elastic.co',
    'Nginx': 'https://nginx.org',
    'Traefik': 'https://traefik.io'
  };





  // Statistics
  const stats = [
    { number: '150+', label: 'countries served' },
    { number: '70,000+', label: 'business customers' },
    { number: '4 Million', label: 'people secured' }
  ];

  // Customer testimonials
  const testimonials = [
    {
      quote: "The solid experience on the fundamentals of a SIEM engine, and the flexibility offered with the agents is what made us trust in Atlas as a long-term Strategic Partner.",
      author: "Alexandru Suditu",
      position: "Co-founder and General Manager",
      company: "Enevo Group Cyber Security"
    }
  ];

  // Industries carousel data - Industries We Protect
  const industriesCarousel = [
    {
      id: 'banking-finance',
      title: 'Banking & Finance',
      description: 'PCI-DSS compliance, fraud detection, and financial data protection for banks, credit unions, and fintech companies.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'HIPAA compliance, patient data protection, and medical device security for hospitals, clinics, and healthcare providers.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'ecommerce-cloud',
      title: 'E-Commerce & Cloud Providers',
      description: 'Customer data protection, payment security, and cloud infrastructure security for online businesses.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'government-public',
      title: 'Government & Public Sector',
      description: 'FISMA compliance, classified data protection, and cybersecurity frameworks for federal, state, and local agencies.',
      image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'critical-infrastructure',
      title: 'Critical Infrastructure',
      description: 'Industrial control systems security, SCADA protection, and operational technology security for utilities and energy.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'telecom',
      title: 'Telecom',
      description: 'Network security, subscriber data protection, and telecommunications infrastructure security for service providers.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  // Enhanced Carousel navigation functions with auto-animation
  const nextSlide = () => {
    setCurrentIndustrySlide((prev) => (prev + 1) % Math.max(1, industriesCarousel.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndustrySlide((prev) => (prev - 1 + Math.max(1, industriesCarousel.length - 1)) % Math.max(1, industriesCarousel.length - 1));
  };

  // Auto-animation effect for carousel
  useEffect(() => {
    if (!isCarouselPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Auto-advance every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, currentIndustrySlide]);

  // Load Spline viewer script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.33/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Hero Section with 3D Earth Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center overflow-hidden">
        {/* 3D Spline Earth Background */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full opacity-40"
            dangerouslySetInnerHTML={{
              __html: '<spline-viewer url="https://prod.spline.design/R62BmdPskkL638Fd/scene.splinecode" style="width: 100%; height: 100%; background: transparent;"></spline-viewer>'
            }}
          />
        </div>

        {/* Professional Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="container relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

            {/* Left Content - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >


              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">24/7 SOC as a Service</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Global Cyber Defense
                </span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-300">
                  Powered by AI & Expert Analysts
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Your digital assets deserve 24/7 attention. Atlas Defenders provides proactive, always-on security operations to detect, investigate, and respond to threats in real time — powered by certified analysts, elite tools, and industry-grade frameworks across 150+ countries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/25"
                >
                  <span>Request Free SOC Assessment</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-xl transition-all duration-300 hover:shadow-cyan-500/25"
                >
                  <span>Talk to SOC Expert</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Premium SOC1 Image with Professional Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Premium Container with Multiple Layers */}
              <div className="relative group">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl p-2 border border-gray-700/50 shadow-2xl overflow-hidden">
                  {/* Premium Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-400/5 rounded-3xl"></div>

                  {/* SOC1 Image with Professional Effects */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/Logos/soc1.png"
                      alt="Atlas Defenders SOC Command Center"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Professional Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>

                    {/* Animated Scan Lines */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-1000"></div>
                    </div>
                  </div>

                  {/* Premium Status Indicators */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-white font-semibold text-sm backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">LIVE SOC</span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="text-xs text-cyan-300 bg-cyan-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-400/30 animate-pulse">
                      REAL-TIME
                    </div>
                  </div>

                  {/* Bottom Premium Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-cyan-400">24/7</div>
                          <div className="text-xs text-gray-300">Active</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">99.9%</div>
                          <div className="text-xs text-gray-300">Uptime</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-400">150+</div>
                          <div className="text-xs text-gray-300">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Premium Particle Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500 opacity-75"></div>
                  <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-1000 opacity-75"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* What is SOC as a Service Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What is <span className="text-cyan-400">SOC as a Service</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              SOC as a Service (SOCaaS) is a fully managed cybersecurity solution delivered remotely by Atlas Defenders to detect, analyze, and respond to threats across your environment. Our SOC is staffed by certified professionals and powered by next-gen tools — so you don't need to build one in-house. <span className="text-cyan-400 font-semibold">We handle the complexity. You get peace of mind.</span>
            </p>
          </motion.div>
        </div>
      </section>



      {/* Strategic Benefits We Offer Section - Ultra Professional Light Theme */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/30 rounded-full blur-3xl"></div>
          </div>
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container relative z-10">
          {/* Premium Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Strategic Benefits
              <span className="block bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent mt-2">
                We Offer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive cybersecurity solutions designed to protect, detect, and respond to threats with enterprise-grade precision and expert-led intelligence.
            </motion.p>
          </motion.div>

          {/* Ultra Professional 3-Column Layout with Advanced Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Detection Column - Ultra Professional with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Premium Card Container with Advanced Effects */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl hover:border-cyan-300/50 transition-all duration-700 relative overflow-hidden h-full transform hover:scale-[1.02] hover:-translate-y-2">

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-transparent to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Premium Icon Section with Advanced Animation */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden"
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <Shield size={32} className="text-white relative z-10" />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Detection
                    </motion.h3>

                    <motion.p
                      className="text-cyan-600 font-semibold text-lg mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Identify threats before they strike.
                    </motion.p>
                  </motion.div>

                  {/* Premium Content List with Staggered Animation */}
                  <div className="space-y-4">
                    {[
                      "24/7 real-time monitoring by expert analysts",
                      "AI & behavioral analytics to detect anomalies",
                      "Correlation of logs from endpoints, network, and cloud",
                      "Early detection of malware, intrusions & insider threats",
                      "Threat intelligence feeds integrated for proactive alerts"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + (index * 0.1),
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <motion.div
                          className="w-5 h-5 bg-cyan-500 rounded-full mt-2 flex-shrink-0 flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "#06b6d4" }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle size={12} className="text-white" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium Accent Line with Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Response Column - Ultra Professional with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Premium Card Container with Advanced Effects */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl hover:border-cyan-300/50 transition-all duration-700 relative overflow-hidden h-full transform hover:scale-[1.02] hover:-translate-y-2">

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-transparent to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Premium Icon Section with Advanced Animation */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden"
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <AlertTriangle size={32} className="text-white relative z-10" />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Response
                    </motion.h3>

                    <motion.p
                      className="text-cyan-600 font-semibold text-lg mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Immediate action. Controlled impact.
                    </motion.p>
                  </motion.div>

                  {/* Premium Content List with Staggered Animation */}
                  <div className="space-y-4">
                    {[
                      "Instant incident containment & isolation",
                      "Automated SOAR-driven response playbooks",
                      "Expert-led investigation & mitigation",
                      "Minimized downtime & business disruption",
                      "Real-time collaboration with your internal teams"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + (index * 0.1),
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <motion.div
                          className="w-5 h-5 bg-cyan-500 rounded-full mt-2 flex-shrink-0 flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "#06b6d4" }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle size={12} className="text-white" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium Accent Line with Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Reporting & Compliance Column - Ultra Professional with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Premium Card Container with Advanced Effects */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl hover:border-cyan-300/50 transition-all duration-700 relative overflow-hidden h-full transform hover:scale-[1.02] hover:-translate-y-2">

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-transparent to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Premium Icon Section with Advanced Animation */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden"
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <FileText size={32} className="text-white relative z-10" />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Reporting & Compliance
                    </motion.h3>

                    <motion.p
                      className="text-cyan-600 font-semibold text-lg mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Clear insights. Audit-ready results.
                    </motion.p>
                  </motion.div>

                  {/* Premium Content List with Staggered Animation */}
                  <div className="space-y-4">
                    {[
                      "Executive dashboards with real-time threat visibility",
                      "Detailed incident & investigation reports",
                      "Weekly summaries & monthly performance metrics",
                      "Compliance support (ISO 27001, NIST, GDPR, etc.)",
                      "Log retention & traceability for audits"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + (index * 0.1),
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 group/item"
                      >
                        <motion.div
                          className="w-5 h-5 bg-cyan-500 rounded-full mt-2 flex-shrink-0 flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "#06b6d4" }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle size={12} className="text-white" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium Accent Line with Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </div>


        </div>
      </section>





      {/* Our Core SOC Service Section - Light Theme */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/30 rounded-full blur-3xl"></div>
          </div>
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-black">CORE </span>
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                SOC SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security operations delivered through industry-leading tools and expert analysis
            </p>
          </motion.div>

          {/* Service Items */}
          <div className="space-y-24">

            {/* 1. Managed XDR - Visual Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* XDR Image */}
                <img
                  src="/Logos/xdr_image.png"
                  alt="XDR Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">Managed XDR</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Extended Detection & Response</p>
                <ul className="space-y-3">
                  {[
                    "Real-time detection across endpoints, networks, servers & cloud",
                    "Correlation of security events to reduce alert fatigue",
                    "AI-powered threat prioritization & automation",
                    "Integration with SIEM & SOAR for faster response",
                    "Complete visibility across your digital assets"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 2. EDR - Visual Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-gray-900">EDR</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Endpoint Detection & Response</p>
                <ul className="space-y-3">
                  {[
                    "Continuous monitoring of endpoint activity",
                    "Rapid isolation of compromised machines",
                    "Behavioral analysis to detect advanced threats",
                    "Malware, ransomware, and lateral movement detection",
                    "Centralized threat intelligence enrichment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                {/* EDR Image */}
                <img
                  src="/Logos/edr_image.png"
                  alt="EDR Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
            </div>

            {/* 3. SIEM - Visual Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* SIEM Image */}
                <img
                  src="/Logos/siem_image.png"
                  alt="SIEM Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">SIEM</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Security Information & Event Management</p>
                <ul className="space-y-3">
                  {[
                    "Centralized log collection and normalization",
                    "Real-time alerting based on correlation rules",
                    "Threat hunting dashboards and forensic visibility",
                    "Compliance-focused reporting",
                    "Integrated with external threat feeds"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 4. SOAR - Visual Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-gray-900">SOAR</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Security Orchestration, Automation & Response</p>
                <ul className="space-y-3">
                  {[
                    "Automated incident response workflows",
                    "Human-in-the-loop review for critical alerts",
                    "Ticketing system integration (e.g., Jira, ServiceNow)",
                    "Accelerated decision-making based on context",
                    "Reduced response time and fatigue"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                {/* SOAR Image */}
                <img
                  src="/Logos/soar_image.png"
                  alt="SOAR Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
            </div>

            {/* 5. Threat Intelligence & Threat Hunting - Visual Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Threat Intelligence Image */}
                <img
                  src="/Logos/threatintelligence_image.png"
                  alt="Threat Intelligence Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">Threat Intelligence & Threat Hunting</h3>
                <ul className="space-y-3">
                  {[
                    "MITRE ATT&CK-based threat mapping",
                    "Continuous threat hunting using behavior analytics",
                    "Custom threat feeds & IOC enrichment",
                    "Detection of APTs & stealthy attacks",
                    "Proactive defense beyond alert-based response"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 6. Vulnerability Management - Visual Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-gray-900">Vulnerability Management & Exploit Risk</h3>
                <ul className="space-y-3">
                  {[
                    "Continuous asset scanning & risk scoring (CVSS)",
                    "Integration with tools like Qualys/OpenVAS",
                    "Exploitability analysis with remediation plans",
                    "Executive summary reports",
                    "Patch orchestration workflow"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                {/* Vulnerability Management Image */}
                <img
                  src="/Logos/vulnerability_image.png"
                  alt="Vulnerability Management Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
            </div>

            {/* 7. Log Management - Visual Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Log Management Image */}
                <img
                  src="/Logos/log_image.png"
                  alt="Log Management Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">Log Management & Data Retention</h3>
                <ul className="space-y-3">
                  {[
                    "Efficient ingestion of logs from multiple data sources",
                    "Long-term log storage for compliance (GDPR, ISO 27001)",
                    "Secure searchable logs with access controls",
                    "Anomaly detection using historical baseline",
                    "Visual dashboards for log insights"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 8. Cloud & Hybrid Security - Visual Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-gray-900">Security Monitoring of Cloud & Hybrid Environments</h3>
                <ul className="space-y-3">
                  {[
                    "Coverage for AWS, Azure, GCP, and hybrid clouds",
                    "API-based integrations with cloud security tools",
                    "Continuous monitoring of cloud misconfigurations",
                    "Alerts on privilege misuse & lateral cloud movement",
                    "Automated remediation guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                {/* Cloud Security Image */}
                <img
                  src="/Logos/monitoring_img.png"
                  alt="Cloud Security Dashboard"
                  className="w-full h-96 object-contain rounded-3xl transition-all duration-500 transform hover:scale-[1.03]"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Protect Section - Professional Dark Mode Carousel */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Enhanced Background Effects with Main Page Colors */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/2 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Industries We
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                  Protect
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Atlas Defenders provides specialized SOC-as-a-Service solutions across critical industries, ensuring compliance and protection tailored to each sector's unique requirements.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/industries"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25"
                >
                  <span>Explore Your Industry</span>
                  <ArrowRight size={20} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side Professional Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Professional Carousel Container */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndustrySlide * 35}%)` }}
                  >
                    {industriesCarousel.map((industry, index) => (
                      <div key={industry.id} className="w-1/2 flex-shrink-0 px-3">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 border border-gray-200/20 h-full"
                          onMouseEnter={() => setIsCarouselPaused(true)}
                          onMouseLeave={() => setIsCarouselPaused(false)}
                        >
                          {/* Ultra Professional Image Container with Multi-Layer Blur */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={industry.image}
                              alt={industry.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Eye-Catching Gradient Overlay - No Blur */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/60 to-orange-500/70 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/80 via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 via-transparent to-teal-500/50 opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/60 via-transparent to-violet-500/40 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

                            {/* Enhanced Industry Icon Overlay */}
                            <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 rotate-12 group-hover:rotate-0">
                              {industry.id === 'banking-finance' && <Landmark size={24} className="text-cyan-600" />}
                              {industry.id === 'healthcare' && <Heart size={24} className="text-cyan-600" />}
                              {industry.id === 'ecommerce-cloud' && <ShoppingCart size={24} className="text-cyan-600" />}
                              {industry.id === 'government-public' && <Building size={24} className="text-cyan-600" />}
                              {industry.id === 'critical-infrastructure' && <Server size={24} className="text-cyan-600" />}
                              {industry.id === 'telecom' && <Satellite size={24} className="text-cyan-600" />}
                            </div>


                          </div>

                          {/* Ultra Professional Content - Perfect Consistency */}
                          <div className="p-6 space-y-4 flex flex-col justify-between min-h-[220px]">
                            <div className="space-y-3">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300 line-clamp-2 leading-tight">
                                {industry.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                {industry.description}
                              </p>
                            </div>

                            {/* Enhanced Professional Tags */}
                            <div className="flex flex-wrap gap-2 pt-3">
                              {industry.id === 'banking-finance' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">PCI-DSS</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Fraud Detection</span>
                                </>
                              )}
                              {industry.id === 'healthcare' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">HIPAA</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Patient Data</span>
                                </>
                              )}
                              {industry.id === 'ecommerce-cloud' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Payment Security</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Cloud Security</span>
                                </>
                              )}
                              {industry.id === 'government-public' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">FISMA</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">NIST</span>
                                </>
                              )}
                              {industry.id === 'critical-infrastructure' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">SCADA</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">OT Security</span>
                                </>
                              )}
                              {industry.id === 'telecom' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Network Security</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">5G Security</span>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Progress Indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {Array.from({ length: Math.max(1, industriesCarousel.length - 1) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndustrySlide(index)}
                      className={`h-1 rounded-full transition-all duration-500 ${currentIndustrySlide === index
                        ? 'bg-cyan-400 w-8'
                        : 'bg-gray-600 hover:bg-gray-500 w-2'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ultra Professional High-Tech Navigation - Below Divs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-20"
          >
            {/* High-Tech Navigation Container */}
            <div className="flex items-center space-x-8 bg-gradient-to-r from-gray-800/80 via-gray-900/90 to-gray-800/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-700/50 shadow-2xl">

              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-cyan-600/20 hover:to-blue-600/20 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-x-1"
              >
                <ChevronLeft size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />

                {/* High-tech glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-xl transition-all duration-500"></div>
              </button>

              {/* Professional Progress Dots */}
              <div className="flex items-center space-x-3">
                {Array.from({ length: Math.max(1, industriesCarousel.length - 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndustrySlide(index)}
                    className={`relative transition-all duration-500 ${currentIndustrySlide === index
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full'
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full hover:scale-125'
                      }`}
                  >
                    {currentIndustrySlide === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-cyan-600/20 hover:to-blue-600/20 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:translate-x-1"
              >
                <ChevronRight size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />

                {/* High-tech glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-xl transition-all duration-500"></div>
              </button>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Professional Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Atlas Defenders team holds industry-leading certifications to ensure the highest level of cybersecurity expertise and professional excellence
            </p>
          </motion.div>

          {/* Professional Certification Badges - 2 Row Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* First Row - 5 Certifications */}
            <div className="flex justify-center items-center gap-8 lg:gap-12">
              {/* CompTIA Security+ */}
              <img 
                src="/Certifications/Comptia Security+.png" 
                alt="CompTIA Security+" 
                className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                onError={(e) => {
                  // Fallback for server deployment
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('Comptia Security+.png')) {
                    target.src = '/Certifications/Comptia%20Security%2B.png';
                  } else if (target.src.includes('Comptia%20Security%2B.png')) {
                    target.src = '/Certifications/Comptia_Security_Plus.png';
                  }
                }}
              />

              {/* CySA+ */}
              <img 
                src="/Certifications/Comptia Cysa+.png" 
                alt="CySA+" 
                className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                onError={(e) => {
                  // Fallback for server deployment
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('Comptia Cysa+.png')) {
                    target.src = '/Certifications/Comptia%20Cysa%2B.png';
                  } else if (target.src.includes('Comptia%20Cysa%2B.png')) {
                    target.src = '/Certifications/Comptia_CySA_Plus.png';
                  }
                }}
              />

              {/* CISSP */}
              <img src="/Certifications/CISSP.png" alt="CISSP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

              {/* CISM */}
              <img src="/Certifications/Certified Information Security Manager.png" alt="CISM" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

              {/* CISA */}
              <img src="/Certifications/Certified Information Systems Auditor.png" alt="CISA" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />
            </div>

            {/* Second Row - 2 Certifications */}
            <div className="flex justify-center items-center gap-8 lg:gap-12">
              {/* OSDA */}
              <img src="/Certifications/OSDA.svg" alt="OSDA" className="h-36 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

              {/* CDSA */}
              <img src="/Certifications/cdsa.svg" alt="CDSA" className="h-36 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />
            </div>
          </motion.div>
        </div>
      </section>











      {/* CTA Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl"></div>
          </div>
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.08) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Is Your Business <span className="text-cyan-400">Protected 24/7</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't wait for a breach to discover your blind spots. Let our SOC monitor, defend, and respond for you — 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/25"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center bg-white hover:bg-gray-50 text-cyan-600 px-8 py-4 rounded-lg border-2 border-cyan-500 hover:border-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Let's Talk Security</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SOCServicePage;