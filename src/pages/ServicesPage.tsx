import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Server,
  Building2,
  Lock,
  Wifi,
  ArrowRight,
  CheckCircle,
  Star,
  Activity,
  Globe,
  Zap,
  BarChart3,
  Eye,
  TrendingUp,
  Database,
  Cloud
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Professional IT Services | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('infrastructure');

  const services = [
    {
      id: 'infrastructure',
      icon: Server,
      title: 'Infrastructure Solutions',
      subtitle: 'Enterprise-Grade IT Infrastructure',
      description: 'Comprehensive infrastructure services from data center design to cloud integration, ensuring your business runs on reliable, scalable technology.',
      features: [
        'Next-Generation Data Centers',
        'Network Engineering & Optimization',
        'Cloud Integration (AWS, Azure, GCP)',
        'Virtualization Solutions',
        'Server Administration',
        'Performance Monitoring'
      ],
      mockupType: 'infrastructure'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Services',
      subtitle: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and compliance management to protect your digital assets.',
      features: [
        'Advanced Threat Detection',
        'Security Operations Center (SOC)',
        'Penetration Testing',
        'Vulnerability Assessments',
        'Incident Response',
        'Compliance Management'
      ],
      mockupType: 'security'
    },
    {
      id: 'firewall',
      icon: Lock,
      title: 'Firewall & Network Security',
      subtitle: 'Next-Gen Security Architecture',
      description: 'Advanced firewall solutions with next-generation features, intrusion prevention, and comprehensive network security management.',
      features: [
        'Next-Generation Firewalls (NGFW)',
        'Intrusion Prevention Systems',
        'VPN Solutions',
        'Network Access Control',
        'Security Policy Management',
        'Traffic Analysis & Monitoring'
      ],
      mockupType: 'firewall'
    }
  ];

  const DashboardMockup = ({ type }: { type: string }) => {
    if (type === 'security') {
      return (
        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="text-gray-600 text-sm">Security Monitoring</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">226415</div>
              <div className="text-xs text-gray-600">Total Events</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">33932</div>
              <div className="text-xs text-gray-600">Alerts</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">51</div>
              <div className="text-xs text-gray-600">Agents</div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Security Events Timeline</h4>
              <div className="text-xs text-gray-500">Last 24 Hours</div>
            </div>
            <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-end justify-between px-2 py-2">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-500 rounded-t"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    width: '3px'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Threat Distribution</h4>
              <div className="space-y-1">
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Malware (45%)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Intrusion (30%)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Other (25%)</span>
                </div>
              </div>
            </div>
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="30" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="40" cy="40" r="30" stroke="#3b82f6" strokeWidth="8" fill="none"
                  strokeDasharray="85 188" strokeLinecap="round" />
                <circle cx="40" cy="40" r="30" stroke="#ef4444" strokeWidth="8" fill="none"
                  strokeDasharray="57 188" strokeDashoffset="-85" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'infrastructure') {
      return (
        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <Server size={16} className="text-white" />
              </div>
              <span className="text-gray-600 text-sm">Infrastructure Monitor</span>
            </div>
            <div className="text-xs text-green-600 font-semibold">● ONLINE</div>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">CPU Usage</span>
                <span className="text-xs font-semibold text-gray-800">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Memory</span>
                <span className="text-xs font-semibold text-gray-800">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
          </div>

          {/* Network Traffic */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Network Traffic</h4>
            <div className="h-24 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-end justify-between px-2 py-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-green-500 rounded-t"
                  style={{
                    height: `${Math.random() * 60 + 20}%`,
                    width: '6px'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Active Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Active Services</h4>
            <div className="space-y-2">
              {['Web Server', 'Database', 'API Gateway', 'Load Balancer'].map((service, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{service}</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-600 font-semibold">Running</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Default firewall mockup
    return (
      <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Lock size={16} className="text-white" />
            </div>
            <span className="text-gray-600 text-sm">Firewall Control</span>
          </div>
          <div className="text-xs text-red-600 font-semibold">● PROTECTED</div>
        </div>

        {/* Threat Blocks */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-600">1,247</div>
            <div className="text-xs text-gray-600">Blocked Threats</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">99.8%</div>
            <div className="text-xs text-gray-600">Protection Rate</div>
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Traffic Analysis</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Allowed</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-gray-800 font-semibold">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Blocked</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="text-gray-800 font-semibold">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Blocks */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent Blocks</h4>
          <div className="space-y-1">
            {['192.168.1.100', '10.0.0.45', '172.16.0.23'].map((ip, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{ip}</span>
                <span className="text-red-600 font-semibold">BLOCKED</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap size={16} className="mr-2" />
                  Professional IT Services
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The Enterprise
                  <span className="block text-blue-600">IT Platform</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Unified infrastructure and security solutions for modern enterprises.
                  Comprehensive monitoring, protection, and optimization for your entire IT ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                    Start Free Trial
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Dashboard */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <DashboardMockup type="security" />
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-yellow-100 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-xl inline-flex">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${activeTab === service.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          {services.map((service) => (
            activeTab === service.id && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                    <service.icon size={32} />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                    Learn more about {service.title.toLowerCase()}
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative">
                  <DashboardMockup type={service.mockupType} />

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Enterprise Leaders</h2>
            <p className="text-xl text-gray-300">Join thousands of organizations protecting their digital assets</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Enterprise Clients', icon: Building2 },
              { number: '99.9%', label: 'Uptime SLA', icon: Activity },
              { number: '24/7', label: 'Expert Support', icon: Globe },
              { number: '1M+', label: 'Threats Blocked', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to secure your enterprise?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Get started with our comprehensive IT solutions today.
            Free trial available with full enterprise features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Start Free Trial
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;