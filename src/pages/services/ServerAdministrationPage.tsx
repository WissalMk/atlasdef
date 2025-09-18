import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Users, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp,
  Globe,
  Settings,
  Activity,
  BarChart3,
  Lock,
  Eye,
  Cpu,
  HardDrive,
  Network,
  Terminal,
  FileText,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServerAdministrationPage = () => {
  useEffect(() => {
    document.title = 'Server Administration | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('windows');

  // Server platforms and services
  const serverPlatforms = {
    windows: {
      title: 'Windows Server',
      icon: Server,
      services: [
        { name: 'Active Directory', description: 'Domain services and user management', icon: Users },
        { name: 'Exchange Server', description: 'Email and collaboration platform', icon: Database },
        { name: 'SQL Server', description: 'Database administration and optimization', icon: Database },
        { name: 'IIS Web Server', description: 'Web application hosting and management', icon: Globe },
        { name: 'WSUS/SCCM', description: 'Update management and deployment', icon: Settings },
        { name: 'Hyper-V', description: 'Virtualization platform management', icon: Server }
      ]
    },
    linux: {
      title: 'Linux Systems',
      icon: Terminal,
      services: [
        { name: 'RHEL/CentOS', description: 'Enterprise Linux administration', icon: Shield },
        { name: 'Ubuntu Server', description: 'Debian-based server management', icon: Server },
        { name: 'Apache/Nginx', description: 'Web server configuration and tuning', icon: Globe },
        { name: 'MySQL/PostgreSQL', description: 'Database server administration', icon: Database },
        { name: 'Docker/Kubernetes', description: 'Container orchestration', icon: Settings },
        { name: 'Shell Scripting', description: 'Automation and task scheduling', icon: Terminal }
      ]
    },
    cloud: {
      title: 'Cloud Platforms',
      icon: Globe,
      services: [
        { name: 'AWS EC2/RDS', description: 'Amazon Web Services management', icon: Globe },
        { name: 'Azure VMs', description: 'Microsoft Azure administration', icon: Server },
        { name: 'Google Cloud', description: 'GCP compute and storage services', icon: Database },
        { name: 'Multi-Cloud', description: 'Hybrid cloud management', icon: Network },
        { name: 'Cloud Migration', description: 'Seamless platform transitions', icon: ArrowRight },
        { name: 'Cost Optimization', description: 'Resource and billing optimization', icon: TrendingUp }
      ]
    }
  };

  // Core administration services
  const adminServices = [
    {
      icon: Users,
      title: 'User & Access Management',
      subtitle: 'Identity & Permissions',
      description: 'Comprehensive user account management with role-based access control',
      features: ['Active Directory management', 'Group policy configuration', 'Single sign-on setup', 'Multi-factor authentication']
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      subtitle: 'System Protection',
      description: 'Advanced security configurations and compliance implementation',
      features: ['Security baseline configuration', 'Patch management', 'Antivirus deployment', 'Firewall configuration']
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      subtitle: 'System Optimization',
      description: 'Real-time monitoring and performance optimization services',
      features: ['Resource utilization tracking', 'Performance bottleneck analysis', 'Capacity planning', 'Automated alerting']
    },
    {
      icon: Database,
      title: 'Backup & Recovery',
      subtitle: 'Data Protection',
      description: 'Comprehensive backup strategies and disaster recovery planning',
      features: ['Automated backup scheduling', 'Point-in-time recovery', 'Disaster recovery testing', 'Cloud backup integration']
    },
    {
      icon: Settings,
      title: 'System Automation',
      subtitle: 'Process Optimization',
      description: 'Automated deployment and configuration management',
      features: ['PowerShell/Bash scripting', 'Configuration management', 'Automated deployments', 'Task scheduling']
    },
    {
      icon: Network,
      title: 'Network Services',
      subtitle: 'Connectivity Management',
      description: 'Network service configuration and management',
      features: ['DNS/DHCP management', 'VPN configuration', 'Load balancer setup', 'Network troubleshooting']
    }
  ];

  // Service specifications
  const specifications = {
    support: {
      title: 'Support & Maintenance',
      items: [
        { label: 'Response Time', value: '< 15 minutes' },
        { label: 'Availability', value: '24/7/365' },
        { label: 'SLA Guarantee', value: '99.9% uptime' },
        { label: 'Escalation Levels', value: '3-tier support' },
        { label: 'Remote Access', value: 'Secure VPN/RDP' },
        { label: 'Documentation', value: 'Complete runbooks' }
      ]
    },
    security: {
      title: 'Security & Compliance',
      items: [
        { label: 'Patch Management', value: 'Automated monthly cycles' },
        { label: 'Vulnerability Scanning', value: 'Weekly assessments' },
        { label: 'Access Control', value: 'RBAC implementation' },
        { label: 'Audit Logging', value: 'Centralized log management' },
        { label: 'Compliance', value: 'SOX, HIPAA, PCI-DSS' },
        { label: 'Encryption', value: 'Data at rest & in transit' }
      ]
    },
    monitoring: {
      title: 'Monitoring & Analytics',
      items: [
        { label: 'System Metrics', value: 'CPU, Memory, Disk, Network' },
        { label: 'Application Monitoring', value: 'Service health checks' },
        { label: 'Log Analysis', value: 'Centralized log aggregation' },
        { label: 'Alerting', value: 'Multi-channel notifications' },
        { label: 'Reporting', value: 'Monthly performance reports' },
        { label: 'Dashboards', value: 'Real-time visualization' }
      ]
    }
  };

  // Performance metrics
  const metrics = [
    { value: 99.9, suffix: '%', label: 'Server Uptime', color: 'text-green-500' },
    { value: 15, suffix: ' min', label: 'Response Time', color: 'text-blue-500' },
    { value: 500, suffix: '+', label: 'Servers Managed', color: 'text-purple-500' },
    { value: 24, suffix: '/7', label: 'Support Coverage', color: 'text-orange-500' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Server Administration</span>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Server size={16} className="mr-2" />
                Infrastructure Management
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Server
                <span className="block text-primary">Administration</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert management of Windows, Linux, and cloud server environments. 
                24/7 monitoring, security hardening, and performance optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Server Assessment
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Service Plans
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                {/* Server Status Dashboard */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Server Status</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      All Systems Online
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Web Server 01', cpu: 45, memory: 62, status: 'online' },
                      { name: 'Database 01', cpu: 78, memory: 84, status: 'online' },
                      { name: 'App Server 01', cpu: 32, memory: 56, status: 'online' }
                    ].map((server, i) => (
                      <motion.div
                        key={server.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{server.name}</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">CPU</div>
                            <div className="font-medium">{server.cpu}%</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Memory</div>
                            <div className="font-medium">{server.memory}%</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Platform Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive server administration across Windows, Linux, and cloud platforms
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Platform Tabs */}
            <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
              {Object.entries(serverPlatforms).map(([key, platform]) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === key
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon size={18} className="mr-2" />
                    {platform.title}
                  </button>
                );
              })}
            </div>

            {/* Platform Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serverPlatforms[activeTab as keyof typeof serverPlatforms].services.map((service, index) => {
                    const Icon = service.icon;
                    
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Administration Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive server management and optimization services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminServices.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{service.title}</div>
                      <div className="text-xs text-gray-500">{service.subtitle}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed service levels and capabilities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap border-b border-gray-200 mb-8">
              {Object.entries(specifications).map(([key, spec]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === key
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {spec.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications[activeTab as keyof typeof specifications]?.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-gray-200">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-900 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Performance
            </h2>
            <p className="text-lg text-gray-600">
              Proven track record of reliable server administration
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Expert Server Administration?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get professional server management with 24/7 monitoring and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Server Assessment
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServerAdministrationPage;