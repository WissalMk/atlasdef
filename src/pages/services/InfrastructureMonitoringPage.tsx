import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  BarChart3, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp,
  Globe,
  Settings,
  Database,
  Lock,
  Server,
  HardDrive,
  Network,
  Cpu,
  Zap,
  AlertTriangle,
  Bell,
  Gauge,
  LineChart,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureMonitoringPage = () => {
  useEffect(() => {
    document.title = 'Infrastructure Monitoring | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('overview');
  const [activeMetric, setActiveMetric] = useState('cpu');

  // Real-time metrics simulation
  const [metrics, setMetrics] = useState({
    cpu: Math.floor(Math.random() * 30) + 20,
    memory: Math.floor(Math.random() * 25) + 45,
    disk: Math.floor(Math.random() * 20) + 15,
    network: Math.floor(Math.random() * 40) + 30
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 20,
        memory: Math.floor(Math.random() * 25) + 45,
        disk: Math.floor(Math.random() * 20) + 15,
        network: Math.floor(Math.random() * 40) + 30
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Monitoring solutions
  const monitoringSolutions = [
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      subtitle: 'Live System Metrics',
      description: 'Continuous monitoring of all infrastructure components with real-time alerting',
      features: ['CPU, Memory, Disk monitoring', 'Network performance tracking', 'Application health checks', 'Custom threshold alerts'],
      tools: ['Zabbix', 'Prometheus', 'Grafana', 'Nagios']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      subtitle: 'Data-Driven Insights',
      description: 'Advanced analytics and reporting for capacity planning and optimization',
      features: ['Historical trend analysis', 'Capacity planning reports', 'Performance baselines', 'Predictive analytics'],
      tools: ['Grafana', 'Kibana', 'Splunk', 'DataDog']
    },
    {
      icon: Bell,
      title: 'Intelligent Alerting',
      subtitle: 'Proactive Notifications',
      description: 'Smart alerting system with escalation policies and notification channels',
      features: ['Multi-channel notifications', 'Alert escalation policies', 'Intelligent noise reduction', 'Custom alert rules'],
      tools: ['PagerDuty', 'Slack', 'Email', 'SMS']
    },
    {
      icon: Database,
      title: 'Database Monitoring',
      subtitle: 'Database Performance',
      description: 'Specialized monitoring for database systems with query performance analysis',
      features: ['Query performance monitoring', 'Database health checks', 'Replication monitoring', 'Backup status tracking'],
      tools: ['SQL Monitor', 'MySQL Monitor', 'PostgreSQL Monitor', 'Oracle Monitor']
    },
    {
      icon: Network,
      title: 'Network Monitoring',
      subtitle: 'Network Performance',
      description: 'Comprehensive network monitoring including bandwidth, latency, and device health',
      features: ['Bandwidth utilization', 'Network device monitoring', 'Latency tracking', 'SNMP monitoring'],
      tools: ['PRTG', 'SolarWinds', 'LibreNMS', 'Cacti']
    },
    {
      icon: Globe,
      title: 'Application Monitoring',
      subtitle: 'Application Performance',
      description: 'End-to-end application performance monitoring with user experience tracking',
      features: ['Application response times', 'Error rate monitoring', 'User experience tracking', 'API monitoring'],
      tools: ['New Relic', 'AppDynamics', 'Dynatrace', 'Pingdom']
    }
  ];

  // Monitoring specifications
  const specifications = {
    overview: {
      title: 'Monitoring Overview',
      items: [
        { label: 'Monitoring Frequency', value: 'Every 30 seconds' },
        { label: 'Data Retention', value: '2 years historical data' },
        { label: 'Alert Response Time', value: '< 5 minutes' },
        { label: 'Dashboard Updates', value: 'Real-time refresh' },
        { label: 'Supported Platforms', value: '50+ technologies' },
        { label: 'Uptime Monitoring', value: '99.9% availability' }
      ]
    },
    metrics: {
      title: 'Metrics & KPIs',
      items: [
        { label: 'System Metrics', value: 'CPU, Memory, Disk, Network' },
        { label: 'Application Metrics', value: 'Response time, throughput, errors' },
        { label: 'Business Metrics', value: 'Custom KPIs and SLAs' },
        { label: 'Security Metrics', value: 'Failed logins, security events' },
        { label: 'Performance Metrics', value: 'Latency, availability, capacity' },
        { label: 'Custom Metrics', value: 'Business-specific indicators' }
      ]
    },
    alerting: {
      title: 'Alerting & Notifications',
      items: [
        { label: 'Alert Channels', value: 'Email, SMS, Slack, Teams' },
        { label: 'Escalation Policies', value: 'Multi-tier escalation' },
        { label: 'Alert Suppression', value: 'Intelligent noise reduction' },
        { label: 'Maintenance Windows', value: 'Scheduled alert suppression' },
        { label: 'Alert Correlation', value: 'Root cause analysis' },
        { label: 'Custom Webhooks', value: 'Integration with ITSM tools' }
      ]
    },
    reporting: {
      title: 'Reporting & Analytics',
      items: [
        { label: 'Report Frequency', value: 'Daily, Weekly, Monthly' },
        { label: 'Report Formats', value: 'PDF, Excel, Web dashboard' },
        { label: 'Custom Reports', value: 'Tailored business reports' },
        { label: 'Trend Analysis', value: 'Historical performance trends' },
        { label: 'Capacity Planning', value: 'Growth projection reports' },
        { label: 'SLA Reporting', value: 'Service level compliance' }
      ]
    }
  };

  // Performance metrics
  const performanceMetrics = [
    { value: 99.9, suffix: '%', label: 'Monitoring Uptime', color: 'text-green-500' },
    { value: 30, suffix: ' sec', label: 'Collection Interval', color: 'text-blue-500' },
    { value: 5, suffix: ' min', label: 'Alert Response', color: 'text-purple-500' },
    { value: 50, suffix: '+', label: 'Supported Platforms', color: 'text-orange-500' }
  ];

  // Metric details for the interactive dashboard
  const metricDetails = {
    cpu: { name: 'CPU Usage', unit: '%', color: 'text-blue-500', bgColor: 'bg-blue-500' },
    memory: { name: 'Memory Usage', unit: '%', color: 'text-green-500', bgColor: 'bg-green-500' },
    disk: { name: 'Disk Usage', unit: '%', color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
    network: { name: 'Network Usage', unit: '%', color: 'text-purple-500', bgColor: 'bg-purple-500' }
  };

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
              <span className="text-primary">Infrastructure Monitoring</span>
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
                <Activity size={16} className="mr-2" />
                Infrastructure Monitoring
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive
                <span className="block text-primary">Infrastructure Monitoring</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Real-time monitoring and analytics for your entire IT infrastructure. 
                Proactive alerting, performance optimization, and comprehensive reporting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Monitoring Setup
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Live Demo
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
                {/* Live Monitoring Dashboard */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Live System Metrics</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Live Data
                    </div>
                  </div>
                  
                  {/* Metric Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(metrics).map(([key, value]) => {
                      const detail = metricDetails[key as keyof typeof metricDetails];
                      return (
                        <motion.div
                          key={key}
                          className={`bg-white rounded-lg p-4 border border-gray-200 cursor-pointer transition-all ${
                            activeMetric === key ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setActiveMetric(key)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{detail.name}</span>
                            <span className={`text-lg font-bold ${detail.color}`}>{value}{detail.unit}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full ${detail.bgColor}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">
                        {metricDetails[activeMetric as keyof typeof metricDetails].name} Trend
                      </span>
                      <span className="text-xs text-gray-500">Last 24 hours</span>
                    </div>
                    <div className="h-16 flex items-end space-x-1">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 ${metricDetails[activeMetric as keyof typeof metricDetails].bgColor} rounded-t opacity-70`}
                          style={{ 
                            height: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monitoring Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Monitoring Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive monitoring across all layers of your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringSolutions.map((solution, index) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={solution.title}
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
                      <div className="text-sm font-semibold text-gray-900">{solution.title}</div>
                      <div className="text-xs text-gray-500">{solution.subtitle}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3">
                    <div className="text-xs text-gray-500 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-1">
                      {solution.tools.map((tool, i) => (
                        <span key={i} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Monitoring Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed monitoring capabilities and service levels
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
                  {specifications[activeTab as keyof typeof specifications].items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
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
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Performance
            </h2>
            <p className="text-lg text-gray-600">
              Proven monitoring service performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Monitoring Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Key advantages of comprehensive infrastructure monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Proactive Issue Detection', icon: Eye, description: 'Identify problems before they impact users' },
              { title: 'Performance Optimization', icon: TrendingUp, description: 'Optimize resource utilization and performance' },
              { title: 'Reduced Downtime', icon: Target, description: 'Minimize service interruptions and outages' },
              { title: 'Cost Optimization', icon: Gauge, description: 'Optimize infrastructure costs through insights' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
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
              Start Monitoring Your Infrastructure
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get complete visibility into your infrastructure with our comprehensive monitoring solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Monitoring Setup
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

export default InfrastructureMonitoringPage;