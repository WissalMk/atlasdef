import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Gauge, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  Globe,
  Settings,
  Activity,
  BarChart3,
  Server,
  HardDrive,
  Network,
  Cpu,
  Database,
  LineChart,
  PieChart,
  Layers,
  Maximize,
  Minimize,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PerformanceOptimizationPage = () => {
  useEffect(() => {
    document.title = 'Performance Optimization | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('overview');
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  // Simulate optimization progress
  useEffect(() => {
    const interval = setInterval(() => {
      setOptimizationProgress(prev => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Performance optimization areas
  const optimizationAreas = [
    {
      icon: Cpu,
      title: 'CPU Optimization',
      subtitle: 'Processing Power',
      description: 'Optimize CPU utilization through process tuning and resource allocation',
      features: ['Process priority optimization', 'CPU affinity configuration', 'Thread pool tuning', 'Workload balancing'],
      improvement: '40% faster processing',
      color: 'text-blue-500'
    },
    {
      icon: HardDrive,
      title: 'Storage Optimization',
      subtitle: 'I/O Performance',
      description: 'Enhance storage performance through caching and I/O optimization',
      features: ['SSD caching implementation', 'RAID optimization', 'File system tuning', 'I/O queue optimization'],
      improvement: '60% faster disk access',
      color: 'text-green-500'
    },
    {
      icon: Network,
      title: 'Network Optimization',
      subtitle: 'Bandwidth & Latency',
      description: 'Optimize network performance and reduce latency across all connections',
      features: ['Bandwidth optimization', 'QoS implementation', 'Network path optimization', 'Protocol tuning'],
      improvement: '50% reduced latency',
      color: 'text-purple-500'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      subtitle: 'Query Performance',
      description: 'Optimize database queries, indexing, and overall database performance',
      features: ['Query optimization', 'Index tuning', 'Connection pooling', 'Cache optimization'],
      improvement: '70% faster queries',
      color: 'text-orange-500'
    },
    {
      icon: Globe,
      title: 'Application Optimization',
      subtitle: 'Code & Runtime',
      description: 'Optimize application code, memory usage, and runtime performance',
      features: ['Code profiling', 'Memory optimization', 'Garbage collection tuning', 'Runtime optimization'],
      improvement: '45% better response time',
      color: 'text-red-500'
    },
    {
      icon: Layers,
      title: 'System Architecture',
      subtitle: 'Infrastructure Design',
      description: 'Optimize overall system architecture for maximum efficiency',
      features: ['Load balancing', 'Caching strategies', 'Microservices optimization', 'Resource scaling'],
      improvement: '80% better scalability',
      color: 'text-indigo-500'
    }
  ];

  // Optimization process
  const optimizationProcess = [
    {
      step: '01',
      title: 'Performance Assessment',
      description: 'Comprehensive analysis of current system performance and bottlenecks',
      icon: BarChart3,
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Bottleneck Identification',
      description: 'Identify performance bottlenecks and resource constraints',
      icon: Target,
      duration: '2-3 days'
    },
    {
      step: '03',
      title: 'Optimization Strategy',
      description: 'Develop comprehensive optimization plan with prioritized improvements',
      icon: Settings,
      duration: '1 day'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute optimization improvements with minimal system disruption',
      icon: Zap,
      duration: '3-5 days'
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Validate performance improvements and ensure system stability',
      icon: CheckCircle,
      duration: '1-2 days'
    },
    {
      step: '06',
      title: 'Monitoring & Tuning',
      description: 'Continuous monitoring and fine-tuning for optimal performance',
      icon: Activity,
      duration: 'Ongoing'
    }
  ];

  // Service specifications
  const specifications = {
    overview: {
      title: 'Service Overview',
      items: [
        { label: 'Performance Improvement', value: 'Up to 80% faster' },
        { label: 'Assessment Duration', value: '1-3 days' },
        { label: 'Implementation Time', value: '1-2 weeks' },
        { label: 'Monitoring Period', value: '30 days included' },
        { label: 'Technologies Supported', value: '50+ platforms' },
        { label: 'Performance Guarantee', value: 'Measurable improvement' }
      ]
    },
    metrics: {
      title: 'Performance Metrics',
      items: [
        { label: 'Response Time', value: 'Up to 70% improvement' },
        { label: 'Throughput', value: 'Up to 60% increase' },
        { label: 'Resource Utilization', value: 'Up to 40% reduction' },
        { label: 'Error Rates', value: 'Up to 90% reduction' },
        { label: 'Scalability', value: 'Up to 80% improvement' },
        { label: 'Cost Efficiency', value: 'Up to 30% savings' }
      ]
    },
    technologies: {
      title: 'Supported Technologies',
      items: [
        { label: 'Operating Systems', value: 'Windows, Linux, Unix' },
        { label: 'Databases', value: 'SQL Server, Oracle, MySQL, PostgreSQL' },
        { label: 'Web Servers', value: 'IIS, Apache, Nginx' },
        { label: 'Application Servers', value: 'Tomcat, JBoss, WebLogic' },
        { label: 'Cloud Platforms', value: 'AWS, Azure, Google Cloud' },
        { label: 'Virtualization', value: 'VMware, Hyper-V, KVM' }
      ]
    },
    deliverables: {
      title: 'Project Deliverables',
      items: [
        { label: 'Performance Assessment Report', value: 'Detailed analysis document' },
        { label: 'Optimization Recommendations', value: 'Prioritized improvement plan' },
        { label: 'Implementation Documentation', value: 'Step-by-step procedures' },
        { label: 'Performance Benchmarks', value: 'Before/after comparisons' },
        { label: 'Monitoring Setup', value: 'Ongoing performance tracking' },
        { label: 'Knowledge Transfer', value: 'Team training and documentation' }
      ]
    }
  };

  // Performance metrics
  const performanceMetrics = [
    { value: 80, suffix: '%', label: 'Max Performance Gain', color: 'text-green-500' },
    { value: 30, suffix: '%', label: 'Cost Reduction', color: 'text-blue-500' },
    { value: 90, suffix: '%', label: 'Error Reduction', color: 'text-purple-500' },
    { value: 24, suffix: '/7', label: 'Monitoring Support', color: 'text-orange-500' }
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
              <span className="text-primary">Performance Optimization</span>
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
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap size={16} className="mr-2" />
                Performance Optimization
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Maximize System
                <span className="block text-primary">Performance</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive performance optimization services to maximize your infrastructure efficiency. 
                Achieve up to 80% performance improvements with our expert optimization strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Performance Assessment
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Case Studies
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
                {/* Performance Dashboard */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Optimization Progress</h3>
                    <div className="flex items-center text-sm text-blue-600">
                      <RefreshCw size={14} className="mr-2 animate-spin" />
                      Optimizing
                    </div>
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    {[
                      { name: 'CPU Performance', current: 85, target: 95, color: 'bg-blue-500' },
                      { name: 'Memory Usage', current: 72, target: 85, color: 'bg-green-500' },
                      { name: 'Disk I/O', current: 68, target: 90, color: 'bg-yellow-500' },
                      { name: 'Network Latency', current: 78, target: 88, color: 'bg-purple-500' }
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{metric.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">{metric.current}%</span>
                            <ArrowRight size={12} className="text-gray-400" />
                            <span className="text-sm font-semibold text-green-600">{metric.target}%</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full ${metric.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.current}%` }}
                              transition={{ duration: 1, delay: 0.2 * i }}
                            />
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full ${metric.color} opacity-30`}
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.target}%` }}
                              transition={{ duration: 1, delay: 0.2 * i }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Current</span>
                          <span>Target</span>
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

      {/* Optimization Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance Optimization Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive optimization across all critical system components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationAreas.map((area, index) => {
              const Icon = area.icon;
              
              return (
                <motion.div
                  key={area.title}
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
                      <div className="text-sm font-semibold text-gray-900">{area.title}</div>
                      <div className="text-xs text-gray-500">{area.subtitle}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {area.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Expected Improvement</div>
                    <div className={`font-semibold ${area.color}`}>{area.improvement}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optimization Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Optimization Process
            </h2>
            <p className="text-lg text-gray-600">
              Systematic approach to maximize your system performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationProcess.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      <Clock size={12} className="mr-1" />
                      {step.duration}
                    </div>
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
              Detailed optimization service capabilities and deliverables
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
              Performance Results
            </h2>
            <p className="text-lg text-gray-600">
              Proven performance optimization results across client projects
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
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Optimization Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Key advantages of professional performance optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Faster Response Times', icon: Zap, description: 'Dramatically improve application response times' },
              { title: 'Reduced Costs', icon: TrendingUp, description: 'Lower infrastructure and operational costs' },
              { title: 'Better User Experience', icon: Target, description: 'Enhanced user satisfaction and productivity' },
              { title: 'Increased Scalability', icon: Maximize, description: 'Handle more users and transactions' }
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
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive performance assessment and optimization plan tailored to your infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Performance Assessment
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

export default PerformanceOptimizationPage;