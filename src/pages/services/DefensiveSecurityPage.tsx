import { useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Shield, Eye, Zap, Users, Clock, Target, TrendingUp, ArrowRight, CheckCircle, AlertTriangle, Activity, Search, Globe, Database, Network, Lock, Cpu, HardDrive, Monitor, Server, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const DefensiveSecurityPage = () => {
  useEffect(() => {
    document.title = 'Defensive Security | Atlas Defenders';

    // Add custom CSS for advanced flip card animation
    const style = document.createElement('style');
    style.textContent = `
      /* 3D Flip Card Container */
      .flip-card {
        perspective: 1000px;
        height: 180px;
        cursor: pointer;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.3s ease;
        transform-style: preserve-3d;
      }
      
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .flip-card-front {
        background: white;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      .flip-card-back {
        transform: rotateY(180deg);
        flex-direction: column;
        gap: 16px;
        padding: 20px;
        position: relative;
        overflow: hidden;
      }
      
      /* Glassmorphism effect for gradient background */
      .flip-card-back::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        z-index: 1;
      }
      
      .flip-card-back > * {
        position: relative;
        z-index: 2;
      }
      
      /* Logo styling - Made much bigger */
      .logo-container img {
        transition: all 0.3s ease;
        max-height: 96px;
        max-width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
      }
      
      /* White logo effect on flip */
      .flip-card:hover .logo-container img {
        filter: brightness(0) invert(1) !important;
      }
      
      /* For SVG logos - force all elements to white on flip */
      .flip-card:hover .logo-container svg,
      .flip-card:hover .logo-container svg *,
      .flip-card:hover .logo-container img[src$=".svg"] {
        fill: white !important;
        color: white !important;
        stroke: white !important;
      }
      
      .flip-card:hover .logo-container svg path,
      .flip-card:hover .logo-container svg text,
      .flip-card:hover .logo-container svg rect,
      .flip-card:hover .logo-container svg circle,
      .flip-card:hover .logo-container svg polygon,
      .flip-card:hover .logo-container svg g {
        fill: white !important;
        color: white !important;
        stroke: white !important;
      }
      
      /* Premium White Discover Button */
      .discover-btn {
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.8);
        color: #1a1a1a;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
          0 4px 15px rgba(0, 0, 0, 0.15),
          0 2px 8px rgba(255, 255, 255, 0.8) inset;
        cursor: pointer;
        overflow: hidden;
      }
      
      /* Shimmer effect overlay */
      .discover-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.6),
          transparent
        );
        transition: left 0.6s ease;
      }
      
      .discover-btn:hover::before {
        left: 100%;
      }
      
      .discover-btn:hover {
        background: rgba(255, 255, 255, 1);
        border-color: rgba(255, 255, 255, 1);
        transform: translateY(-2px) scale(1.05);
        box-shadow: 
          0 8px 25px rgba(0, 0, 0, 0.25),
          0 4px 12px rgba(255, 255, 255, 0.9) inset;
        color: #000;
      }
      
      .discover-btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s ease;
      }
      
      /* Special handling for tools that should keep original colors */
      .flip-card:hover .keep-original-colors img {
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) !important;
      }
      
      .flip-card:hover .keep-original-colors svg,
      .flip-card:hover .keep-original-colors svg *,
      .flip-card:hover .keep-original-colors img[src$=".svg"] {
        fill: initial !important;
        color: initial !important;
        stroke: initial !important;
      }
      
      .flip-card:hover .keep-original-colors svg path,
      .flip-card:hover .keep-original-colors svg text,
      .flip-card:hover .keep-original-colors svg rect,
      .flip-card:hover .keep-original-colors svg circle,
      .flip-card:hover .keep-original-colors svg polygon,
      .flip-card:hover .keep-original-colors svg g {
        fill: initial !important;
        color: initial !important;
        stroke: initial !important;
      }

      /* Circuit lines animation */
      .circuit-lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        background-image: 
          linear-gradient(90deg, #00d4ff 1px, transparent 1px),
          linear-gradient(180deg, #00d4ff 1px, transparent 1px);
        background-size: 50px 50px;
        animation: circuitMove 20s linear infinite;
      }
      
      @keyframes circuitMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }

      /* Parallax effect */
      .parallax-bg {
        transform: translateZ(0);
        will-change: transform;
      }

      /* Professional 3D Neon Hexagons */
      .professional-hexagon {
        width: 180px;
        height: 160px;
        position: relative;
        display: inline-block;
        margin: 0 25px;
        perspective: 1000px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hexagon-3d-container {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        animation: hexagonFloat 6s ease-in-out infinite;
      }
      
      .professional-hexagon:hover .hexagon-3d-container {
        transform: rotateY(15deg) rotateX(10deg) scale(1.05);
      }
      
      .neon-hexagon-border {
        width: 100%;
        height: 100%;
        background: transparent;
        position: relative;
        filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
        transition: all 0.4s ease;
      }
      
      .professional-hexagon:hover .neon-hexagon-border {
        filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 60px rgba(0, 212, 255, 0.4));
      }
      
      .neon-hexagon-border::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #00d4ff, #0099cc, #00d4ff);
        background-size: 200% 200%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        animation: neonPulse 3s ease-in-out infinite;
      }
      
      .neon-hexagon-border::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        background: linear-gradient(135deg, #0a0a0a, #1a1a1a, #0a0a0a);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        z-index: 1;
      }
      
      .hexagon-content-3d {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
        color: white;
        transition: all 0.3s ease;
      }
      
      .professional-hexagon:hover .hexagon-content-3d {
        transform: translate(-50%, -50%) translateZ(20px);
      }
      
      .neon-number {
        font-size: 3.2rem;
        font-weight: 800;
        color: #00d4ff;
        line-height: 1;
        margin-bottom: 8px;
        text-shadow: 
          0 0 10px rgba(0, 212, 255, 0.8),
          0 0 20px rgba(0, 212, 255, 0.6),
          0 0 30px rgba(0, 212, 255, 0.4);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        letter-spacing: -1px;
        transition: all 0.3s ease;
      }
      
      .professional-hexagon:hover .neon-number {
        text-shadow: 
          0 0 15px rgba(0, 212, 255, 1),
          0 0 30px rgba(0, 212, 255, 0.8),
          0 0 45px rgba(0, 212, 255, 0.6);
        transform: scale(1.05);
      }
      
      .neon-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.9;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
      }
      
      .professional-hexagon:hover .neon-label {
        opacity: 1;
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      }
      
      /* Floating Animation */
      @keyframes hexagonFloat {
        0%, 100% { 
          transform: translateY(0px) rotateZ(0deg); 
        }
        25% { 
          transform: translateY(-8px) rotateZ(1deg); 
        }
        50% { 
          transform: translateY(-4px) rotateZ(0deg); 
        }
        75% { 
          transform: translateY(-12px) rotateZ(-1deg); 
        }
      }
      
      /* Neon Pulse Animation */
      @keyframes neonPulse {
        0%, 100% { 
          background-position: 0% 50%;
          opacity: 1;
        }
        50% { 
          background-position: 100% 50%;
          opacity: 0.8;
        }
      }
      
      /* Professional Dark Background */
      .professional-dark-bg {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        position: relative;
        overflow: hidden;
      }
      
      .professional-dark-bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 153, 204, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(0, 212, 255, 0.02) 0%, transparent 50%);
        background-size: 400px 400px, 600px 600px, 300px 300px;
        animation: backgroundFloat 20s ease-in-out infinite;
      }
      
      @keyframes backgroundFloat {
        0%, 100% { 
          background-position: 0% 0%, 100% 100%, 50% 50%; 
        }
        33% { 
          background-position: 30% 30%, 70% 70%, 80% 20%; 
        }
        66% { 
          background-position: 70% 10%, 30% 90%, 20% 80%; 
        }
      }
      
      /* Hexagon Shape CSS */
      .hexagon-container {
        width: 160px;
        height: 140px;
        position: relative;
        margin: 0 auto;
      }
      
      .hexagon-border {
        width: 100%;
        height: 100%;
        background: white;
        border: 4px solid #22d3ee;
        position: relative;
        clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
        -webkit-clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .hexagon-content {
        padding: 20px;
        text-align: center;
      }
      
      /* Responsive Design */
      @media (max-width: 1024px) {
        .professional-hexagon {
          width: 150px;
          height: 130px;
          margin: 0 15px;
        }
        
        .neon-number {
          font-size: 2.8rem;
        }
        
        .hexagon-shape {
          width: 140px;
          height: 120px;
        }
      }
      
      @media (max-width: 768px) {
        .professional-hexagon {
          width: 120px;
          height: 100px;
          margin: 0 10px;
        }
        
        .neon-number {
          font-size: 2.2rem;
        }
        
        .neon-label {
          font-size: 0.75rem;
        }
        
        .hexagon-shape {
          width: 120px;
          height: 100px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState('edr');

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
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
        {prefix}{count}{suffix}
      </span>
    );
  };

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

  // Technology categories with their tools
  const technologyCategories = {
    edr: {
      title: 'EDR / XDR Solutions',
      description: 'Endpoint Detection and Response / Extended Detection and Response',
      tools: [
        { name: 'CrowdStrike', logo: '/Logos/CrowdStrike_logo.svg' },
        { name: 'Palo Alto Cortex XDR', logo: '/Logos/paloalto_logo.svg' },
        { name: 'SentinelOne', logo: '/Logos/SentinelOne.svg' },
        { name: 'Wazuh', logo: '/Logos/Wazuh_Logo.svg' },
        { name: 'Cybereason', logo: '/Logos/Cyberreason.svg' },
        { name: 'Symantec', logo: '/Logos/Symantec.svg' }
      ]
    },
    soar: {
      title: 'SOAR',
      description: 'Security Orchestration, Automation, and Response',
      tools: [
        { name: 'Palo Alto Cortex XSOAR', logo: '/Logos/paloalto_logo.svg' },
        { name: 'Splunk SOAR', logo: '/Logos/splunk_logo.svg' },
        { name: 'IBM SOAR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
        { name: 'Shuffle', logo: '/Logos/shuffle_logo.svg' },
        { name: 'TheHive', logo: '/Logos/thehive_logo.svg' }
      ]
    },
    siem: {
      title: 'SIEM',
      description: 'Security Information and Event Management',
      tools: [
        { name: 'Splunk', logo: '/Logos/splunk_logo.svg' },
        { name: 'Elastic Stack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/2560px-Elasticsearch_logo.svg.png' },
        { name: 'LogRhythm', logo: '/Logos/logrythm_logo.png' },
        { name: 'IBM QRadar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
        { name: 'Graylog', logo: '/Logos/graylog_logo.svg' },
        { name: 'Security Onion', logo: '/Logos/securityonion.svg' }
      ]
    },
    firewalls: {
      title: 'Firewalls (NGFW)',
      description: 'Next-Generation Firewall Solutions',
      tools: [
        { name: 'Palo Alto', logo: '/Logos/paloalto_logo.svg' },
        { name: 'Fortinet', logo: '/Logos/Fortinet_logo.svg' },
        { name: 'Cisco ASA / Firepower', logo: '/Logos/Cisco_logo.svg' },
        { name: 'Sophos XG', logo: '/Logos/Sophos_logo.svg' },
        { name: 'pfSense', logo: '/Logos/PfSense_logo.png' },
        { name: 'OPNsense', logo: '/Logos/Opnsense_logo.svg' }
      ]
    },
    ids: {
      title: 'IDS / IPS',
      description: 'Intrusion Detection & Prevention Systems',
      tools: [
        { name: 'Snort', logo: '/Logos/snort_logo.png' },
        { name: 'Suricata', logo: '/Logos/suricata_logo.png' },
        { name: 'Zeek', logo: '/Logos/Zeek_logo.png' }
      ]
    },
    vuln: {
      title: 'Vulnerability Management',
      description: 'Vulnerability Management / Scanners',
      tools: [
        { name: 'Tenable Nessus', logo: '/Logos/nessus_logo.png' },
        { name: 'Qualys', logo: '/Logos/qualys_logo.png' },
        { name: 'OpenVAS', logo: '/Logos/openvas.svg' },
        { name: 'Acunetix', logo: '/Logos/acunetix.svg' },
        { name: 'Rapid7', logo: '/Logos/rapid7.svg' }
      ]
    },
    waf: {
      title: 'Web Application Firewalls (WAF)',
      description: 'Web Application Firewall Solutions',
      tools: [
        { name: 'F5', logo: '/Logos/F5_Logo_0.svg' },
        { name: 'ModSecurity', logo: '/Logos/modesecurity_logo.svg' },
        { name: 'OWASP', logo: '/Logos/owasp_logo.svg' },
        { name: 'Palo Alto', logo: '/Logos/paloalto_logo.svg' }
      ]
    },
    iam: {
      title: 'Identity & Access Management (IAM)',
      description: 'Identity & Access Management Solutions',
      tools: [
        { name: 'Keycloak', logo: '/Logos/keycloak.svg' },
        { name: 'Authentik', logo: '/Logos/Authentik.svg' },
        { name: 'Authelia', logo: '/Logos/authelia_logo.svg' },
        { name: 'Okta', logo: '/Logos/okta_logo.svg' },
        { name: 'Azure Active Directory', logo: '/Logos/azure_active_directory_logo.svg' }
      ]
    },
    pam: {
      title: 'Privileged Access Management (PAM)',
      description: 'Privileged Access Management Solutions',
      tools: [
        { name: 'CyberArk', logo: '/Logos/Cyberark_logo.svg' },
        { name: 'HashiCorp Vault', logo: '/Logos/hashicorpvault_logo.svg' }
      ]
    },
    proxy: {
      title: 'Proxy Servers',
      description: 'Proxy Server Solutions',
      tools: [
        { name: 'HAProxy', logo: '/Logos/haproxy.svg' },
        { name: 'Squid Proxy', logo: '/Logos/squidproxy_logo.svg' },
        { name: 'F5', logo: '/Logos/F5_Logo_0.svg' },
        { name: 'Nginx', logo: '/Logos/nginx.svg' },
        { name: 'Traefik', logo: '/Logos/traefik_logo.svg' }
      ]
    },
    threat: {
      title: 'Threat Intelligence Platforms',
      description: 'Threat Intelligence Platforms and Feeds',
      tools: [
        { name: 'MISP', logo: '/Logos/misp_logo.png' },
        { name: 'Open Threat Exchange (OTX)', logo: '/Logos/otx_logo.svg' }
      ]
    }
  };

  const defensiveServices = [
    {
      icon: Shield,
      title: 'Endpoint Protection (EDR/XDR)',
      description: 'Continuous monitoring and automated response for devices and servers.',
      features: ['Detect malware, ransomware, lateral movement', 'Isolate infected machines', 'Integrate with SIEM and SOAR']
    },
    {
      icon: Network,
      title: 'Network & Perimeter Defense',
      description: 'Stop attacks at the edge before they reach your data.',
      features: ['Intrusion detection & prevention', 'Next-gen firewall deployment', 'Encrypted traffic inspection']
    },
    {
      icon: Database,
      title: 'SIEM & Log Management',
      description: 'Centralized intelligence with real-time alerts.',
      features: ['Log collection, threat correlation', 'Anomaly detection & forensic search', 'Integrated dashboards & compliance logs']
    },
    {
      icon: Zap,
      title: 'Threat Response & Automation (SOAR)',
      description: 'Orchestrated incident response with minimal delay.',
      features: ['Automated workflows for known threats', 'Human review for high-severity alerts', 'Alert prioritization by risk']
    },
    {
      icon: Search,
      title: 'Vulnerability Management',
      description: 'Find and fix your weak spots — before attackers do.',
      features: ['Continuous scanning & CVSS scoring', 'Prioritized patch recommendations', 'Monthly executive reports']
    },
    {
      icon: Eye,
      title: 'Threat Intelligence & Hunting',
      description: 'Go beyond alerts — actively search for unknown attackers.',
      features: ['Custom threat feeds', 'Behavioral analysis', 'MITRE ATT&CK mapping']
    }
  ];

  const keyFeatures = [
    {
      feature: '24/7 Security Operations Center',
      value: 'Always-on threat monitoring and response'
    },
    {
      feature: 'Real-Time Threat Detection',
      value: 'Catch incidents before damage occurs'
    },
    {
      feature: 'AI + Human Expertise',
      value: 'Hybrid defense powered by automation and analysts'
    },
    {
      feature: 'Fast Incident Response',
      value: 'Containment in seconds, not hours'
    },
    {
      feature: 'Compliance-Ready Reporting',
      value: 'GDPR, ISO 27001, NIST, HIPAA aligned'
    },
    {
      feature: 'Tailored Protection',
      value: 'Custom defense stacks for each client\'s architecture'
    }
  ];

  const metrics = [
    { value: 11, suffix: '', label: 'Countries', icon: Globe },
    { value: 60, suffix: '+', label: 'Clients', icon: Users },
    { value: 450, suffix: '+', label: 'Technologists', icon: Shield }
  ];

  const whyChooseReasons = [
    'Elite Certified Analysts (CEH, OSCP, CRTO)',
    'Lightning-Fast Incident Response',
    'Enterprise-Grade Defense, SMB-Friendly Pricing',
    'Transparent Reporting & Forensic Detail',
    'Proven Client Success Across Industries',
    'Fully Managed or Co-Managed SOC Options'
  ];

  return (
    <>
      {/* Hero Section - CrowdStrike Inspired */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Dashboard Background */}
        <div className="absolute inset-0">
          {/* Mock Dashboard Interface */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Dashboard Grid */}
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-12 gap-4 p-8 h-full">
                {/* Top Stats Bar */}
                <div className="col-span-12 h-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/20 flex items-center px-6">
                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-mono">ACTIVE MONITORING</span>
                    </div>
                    <div className="text-blue-400 text-sm font-mono">THREATS BLOCKED: 1,847,643</div>
                    <div className="text-purple-400 text-sm font-mono">ENDPOINTS: 2,341</div>
                  </div>
                </div>

                {/* Left Panel - Threat Detection */}
                <div className="col-span-4 space-y-4">
                  <div className="h-32 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/20 p-4">
                    <div className="text-red-400 text-xs font-mono mb-2">RECENT DETECTIONS</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">Malware.Win32.Trojan</span>
                        <span className="text-red-400">BLOCKED</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">Suspicious PowerShell</span>
                        <span className="text-yellow-400">QUARANTINED</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">Lateral Movement</span>
                        <span className="text-red-400">BLOCKED</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-40 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/20 p-4">
                    <div className="text-blue-400 text-xs font-mono mb-2">VULNERABILITY SCAN</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Critical</span>
                        <span className="text-red-400">3</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">High</span>
                        <span className="text-orange-400">12</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Medium</span>
                        <span className="text-yellow-400">47</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Panel - Network Graph */}
                <div className="col-span-4 h-80 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20 p-4">
                  <div className="text-purple-400 text-xs font-mono mb-4">NETWORK TOPOLOGY</div>
                  <div className="relative h-full">
                    {/* Network nodes */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                      <line x1="75%" y1="33%" x2="50%" y2="50%" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                      <line x1="33%" y1="67%" x2="50%" y2="50%" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                      <line x1="67%" y1="75%" x2="50%" y2="50%" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Right Panel - Analytics */}
                <div className="col-span-4 space-y-4">
                  <div className="h-32 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/20 p-4">
                    <div className="text-green-400 text-xs font-mono mb-2">SYSTEM HEALTH</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">CPU Usage</span>
                        <span className="text-green-400">23%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Memory</span>
                        <span className="text-green-400">67%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Network I/O</span>
                        <span className="text-green-400">1.2 GB/s</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-40 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/20 p-4">
                    <div className="text-indigo-400 text-xs font-mono mb-2">THREAT INTELLIGENCE</div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-300">IOCs Processed: 847,291</div>
                      <div className="text-xs text-gray-300">Signatures Updated: 2h ago</div>
                      <div className="text-xs text-gray-300">ML Models: Active</div>
                      <div className="text-xs text-gray-300">Behavioral Analysis: ON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blur Overlay - Top to Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm"></div>
        </div>

        {/* Animated Data Streams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                height: '100%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container relative z-10 text-white pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-mono text-cyan-400 mb-4 tracking-wider"
            >
              ATLAS DEFENDERS™ COMPLETE NEXT-GEN MDR
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              24/7 defense. MDR you can
              <span className="block text-white mt-2">trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Stop breaches across the entire attack surface with 24/7 expert-led, AI-accelerated managed
              detection and response (MDR).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule a demo</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Red Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-3 px-6 text-sm font-semibold">
          <div className="container flex items-center justify-between">
            <span>Atlas Defenders Named a Leader — The Forrester Wave™, Managed Detection and Response Services, Q1 2025</span>
            <Link to="/contact" className="underline hover:no-underline">
              Download report
            </Link>
          </div>
        </div>
      </section>

      {/* What is Defensive Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center relative">
                  <Shield size={32} className="text-white" />
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
                At Atlas Defenders, Defensive Security means continuous protection. We deploy real-time monitoring,
                intelligent detection, and rapid response to keep your systems secure — 24/7, across all layers.
              </p>

              <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 border border-green-200">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-green-800 font-semibold">No fluff. Just layered defense that works.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features & Differentiators */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Key Features & Differentiators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security capabilities that set us apart from the competition.
            </p>
          </motion.div>

          <div className="space-y-4">
            {keyFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-4" />
                    <span className="font-semibold text-primary text-lg">{item.feature}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap size={16} className="text-accent mr-2" />
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive defensive security services designed to protect your organization from evolving cyber threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defensiveServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATLAS DEFENDERS - Professional Dark Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Professional World Map Background */}
        <div className="absolute inset-0">
          {/* Dotted World Map SVG */}
          <div className="absolute inset-0 opacity-25">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" className="w-full h-full">
              {/* World Map Dots Pattern */}
              <defs>
                <pattern id="worldDots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="0.8" fill="#00BCD4" opacity="0.4" />
                </pattern>
              </defs>

              {/* Continents as dotted shapes */}
              {/* North America */}
              <path d="M150 120 L300 100 L320 180 L280 220 L200 240 L120 200 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* South America */}
              <path d="M200 280 L280 260 L300 380 L250 420 L180 400 L160 320 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* Europe */}
              <path d="M480 80 L580 70 L600 140 L520 160 L460 140 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* Africa */}
              <path d="M460 180 L580 160 L600 320 L520 360 L440 340 L420 240 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* Asia */}
              <path d="M600 60 L900 40 L950 200 L880 240 L620 220 L580 120 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* Australia */}
              <path d="M800 320 L900 310 L920 360 L860 380 L780 370 Z" fill="url(#worldDots)" opacity="0.7" />

              {/* Connection Lines - Global Network */}
              {/* US to Europe */}
              <path d="M250 160 Q400 100 520 120" stroke="#00BCD4" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
              </path>

              {/* Europe to Asia */}
              <path d="M580 120 Q650 80 750 100" stroke="#FF6B6B" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.5s" repeatCount="indefinite" />
              </path>

              {/* US to Asia (curved) */}
              <path d="M280 180 Q500 120 720 140" stroke="#FFD93D" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="3s" repeatCount="indefinite" />
              </path>

              {/* Asia to Australia */}
              <path d="M800 200 Q850 250 860 320" stroke="#6BCF7F" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.2s" repeatCount="indefinite" />
              </path>

              {/* Location Markers with Pulse Animation */}
              <circle cx="250" cy="160" r="3" fill="#FFD93D" opacity="0.8">
                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="520" cy="120" r="3" fill="#00BCD4" opacity="0.8">
                <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="750" cy="140" r="3" fill="#FF6B6B" opacity="0.8">
                <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="860" cy="340" r="3" fill="#6BCF7F" opacity="0.8">
                <animate attributeName="r" values="3;6;3" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Subtle overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

          {/* Glowing orbs for ambient lighting */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Professional Title Section - Two Lines */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="mb-4">
                <h2 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-2" style={{ color: '#00BCD4' }}>
                  ATLAS DEFENDERS
                </h2>
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-wide" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                  Trusted by Industry Leaders
                </div>
              </div>

              {/* Subtle accent line */}
              <div className="w-24 h-1 mx-auto lg:mx-0 mt-6" style={{ backgroundColor: '#00BCD4' }}></div>
            </div>

            {/* Three hexagons - moved more to the right */}
            <div className="flex justify-center items-center -space-x-16 lg:ml-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.3,
                      type: "spring",
                      stiffness: 80
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center relative"
                    style={{ zIndex: 15 - index }}
                  >
                    {/* EXACT hexagon matching your image */}
                    <div className="relative mb-8">
                      <svg width="300" height="260" viewBox="0 0 300 260" style={{
                        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))'
                      }}>
                        {/* Outer hexagon - thick turquoise border */}
                        <path
                          d="M150 20 L240 70 Q255 77 255 95 L255 165 Q255 183 240 190 L150 240 Q150 240 150 240 L60 190 Q45 183 45 165 L45 95 Q45 77 60 70 L150 20 Z"
                          fill="white"
                          stroke="#00BCD4"
                          strokeWidth="8"
                          strokeLinejoin="round"
                        />

                        {/* Inner hexagon - thin turquoise border */}
                        <path
                          d="M150 35 L225 75 Q235 80 235 95 L235 165 Q235 180 225 185 L150 225 L75 185 Q65 180 65 165 L65 95 Q65 80 75 75 L150 35 Z"
                          fill="none"
                          stroke="#00BCD4"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Content inside hexagon - perfectly centered */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="text-5xl lg:text-6xl font-black leading-none mb-2" style={{ color: '#00BCD4' }}>
                            <Counter
                              end={metric.value}
                              suffix={metric.suffix}
                              prefix={metric.prefix || ''}
                              duration={3}
                            />
                          </div>
                          <div className="text-sm font-bold text-black uppercase tracking-wider">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Icon below hexagon - same turquoise color */}
                    <div style={{ color: '#00BCD4' }}>
                      <Icon size={40} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading security tools and platforms to deliver comprehensive protection.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(technologyCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${activeCategory === key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {technologyCategories[activeCategory as keyof typeof technologyCategories].title}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {technologyCategories[activeCategory as keyof typeof technologyCategories].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Tools Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {technologyCategories[activeCategory as keyof typeof technologyCategories].tools.map((tool, index) => {
                // Special styling logic for specific tools
                const isTheHive = tool.name === 'TheHive';
                const isOpenVAS = tool.name === 'OpenVAS';
                const isShuffle = tool.name === 'Shuffle';
                const isHAProxy = tool.name === 'HAProxy';
                const isSquidProxy = tool.name === 'Squid Proxy';
                const isTraefik = tool.name === 'Traefik';
                const isCybereason = tool.name === 'Cybereason';
                const isAcunetix = tool.name === 'Acunetix';
                const isModSecurity = tool.name === 'ModSecurity';
                const isAuthentik = tool.name === 'Authentik';

                // Special logo sizing
                const getLogoClasses = () => {
                  if (isTheHive) return "w-full h-full object-contain scale-150"; // Very big logo for TheHive
                  if (isHAProxy || isSquidProxy || isTraefik) return "w-full h-full object-contain scale-300"; // VERY VERY VERY big logos for proxy servers
                  if (isCybereason || isOpenVAS || isAcunetix || isModSecurity || isAuthentik) return "w-full h-full object-contain scale-200"; // Bigger logos for requested tools
                  return "w-full h-full object-contain";
                };

                // Special front card styling for Shuffle and specific tools
                const getFrontCardClasses = () => {
                  if (isShuffle) return "flip-card-front bg-gray-900 border-gray-700";
                  if (isModSecurity) return "flip-card-front bg-blue-50 border-blue-200";
                  if (isAuthentik) return "flip-card-front bg-blue-50 border-blue-200";
                  if (isAcunetix) return "flip-card-front bg-orange-50 border-orange-200";
                  return "flip-card-front";
                };

                // Special logo container classes for specific tools
                const getLogoContainerClasses = () => {
                  if (isShuffle) return "logo-container p-4 flex flex-col items-center justify-center h-full keep-original-colors";
                  if (isModSecurity || isAuthentik || isAcunetix) return "logo-container p-4 flex flex-col items-center justify-center h-full keep-original-colors";
                  return "logo-container p-4 flex flex-col items-center justify-center h-full";
                };

                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flip-card"
                    onClick={() => {
                      const url = companyUrls[tool.name as keyof typeof companyUrls];
                      if (url) window.open(url, '_blank');
                    }}
                  >
                    <div className="flip-card-inner">
                      <div className={getFrontCardClasses()}>
                        <div className={getLogoContainerClasses()}>
                          <div className={`${isTheHive ? 'flex-1' : 'w-full h-full'} flex items-center justify-center`}>
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className={getLogoClasses()}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="text-gray-600 font-semibold text-sm text-center">${tool.name}</div>`;
                                }
                              }}
                            />
                          </div>
                          {/* Show name below logo for specific tools */}
                          {(isTheHive || tool.name === 'HashiCorp Vault') && (
                            <div className={`font-semibold text-sm text-center mt-2 ${isShuffle ? 'text-white' : 'text-gray-700'}`}>
                              {tool.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className={`flip-card-back bg-gradient-to-br ${brandColors[tool.name as keyof typeof brandColors] || 'from-gray-600 to-gray-800'}`}
                      >
                        <div className="text-white font-bold text-lg text-center mb-2">
                          {tool.name}
                        </div>
                        <button className="discover-btn">
                          Discover
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Atlas Defenders - Palo Alto Style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Horizontal lines pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 188, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 4px'
          }}></div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        </div>

        <div className="container max-w-7xl relative z-10">
          {/* Top accent line */}
          <div className="w-32 h-1 mx-auto mb-8" style={{ backgroundColor: '#00BCD4' }}></div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider" style={{
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}>
              Why Choose Atlas Defenders?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Statistics and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver unmatched cybersecurity protection and enable better, faster security operations.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    <Counter end={99} suffix="%" duration={2.5} />
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    THREAT DETECTION RATE
                  </div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    <Counter end={24} suffix="/7" duration={2.5} />
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    SECURITY MONITORING
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
                style={{ backgroundColor: '#00BCD4' }}
              >
                Explore Services
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </motion.div>

            {/* Right Side - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whyChooseReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#00BCD4',
                    borderColor: '#00BCD4'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <Shield size={20} style={{ color: '#00BCD4' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-2">
                        ATLAS DEFENDERS
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Excellence Certified Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Security Excellence Certified
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Showcasing our commitment to excellence with industry-recognized certifications that ensure top-tier security solutions
            </p>
          </motion.div>

          {/* Professional Certification Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-12"
          >
            {/* CISSP */}
            <img src="/Certifications/CISSP.png" alt="CISSP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CISM */}
            <img src="/Certifications/Certified Information Security Manager.png" alt="CISM" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CISA */}
            <img src="/Certifications/Certified Information Systems Auditor.png" alt="CISA" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSDA */}
            <img src="/Certifications/OSDA.svg" alt="OSDA" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CySA+ */}
            <img src="/Certifications/Comptia Cysa+.png" alt="CySA+" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CDSA */}
            <img src="/Certifications/cdsa.svg" alt="CDSA" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* Security+ */}
            <img src="/Logos/security+_logo.png" alt="Security+" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="circuit-lines"></div>
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Strengthen Your Defenses?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Don't wait for a breach to happen. Get proactive protection with our comprehensive defensive security services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Your Free Security Assessment</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <span>View All Services</span>
                <Eye size={20} className="ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DefensiveSecurityPage;