import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Database, 
  Cloud, 
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
  Server,
  HardDrive,
  Network,
  FileText,
  Zap,
  RefreshCw,
  Download,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BackupRecoveryPage = () => {
  useEffect(() => {
    document.title = 'Backup & Recovery Solutions | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('overview');

  // Backup solution types
  const backupSolutions = [
    {
      icon: Database,
      title: 'Database Backup',
      subtitle: 'Mission-Critical Data',
      description: 'Automated database backup with point-in-time recovery capabilities',
      features: ['SQL Server backup', 'MySQL/PostgreSQL backup', 'Oracle database backup', 'NoSQL database backup'],
      rto: '< 1 hour',
      rpo: '< 15 minutes'
    },
    {
      icon: Server,
      title: 'Server Backup',
      subtitle: 'Full System Protection',
      description: 'Complete server backup including OS, applications, and configurations',
      features: ['Bare metal recovery', 'Incremental backups', 'System state backup', 'Application-aware backup'],
      rto: '< 4 hours',
      rpo: '< 1 hour'
    },
    {
      icon: Cloud,
      title: 'Cloud Backup',
      subtitle: 'Hybrid Protection',
      description: 'Secure cloud-based backup with local and remote replication',
      features: ['Multi-cloud support', 'Encryption in transit', 'Geographic redundancy', 'Automated retention'],
      rto: '< 2 hours',
      rpo: '< 30 minutes'
    },
    {
      icon: FileText,
      title: 'File & Document Backup',
      subtitle: 'Data Protection',
      description: 'Comprehensive file-level backup with versioning and deduplication',
      features: ['File versioning', 'Deduplication', 'Ransomware protection', 'Selective restore'],
      rto: '< 30 minutes',
      rpo: '< 5 minutes'
    },
    {
      icon: Network,
      title: 'Virtual Machine Backup',
      subtitle: 'Virtualization Protection',
      description: 'VM-aware backup solutions for VMware, Hyper-V, and other platforms',
      features: ['Agentless backup', 'VM replication', 'Instant VM recovery', 'Cross-platform support'],
      rto: '< 1 hour',
      rpo: '< 15 minutes'
    },
    {
      icon: Globe,
      title: 'SaaS Backup',
      subtitle: 'Cloud Application Protection',
      description: 'Backup and recovery for Office 365, Google Workspace, and other SaaS platforms',
      features: ['Office 365 backup', 'Google Workspace backup', 'Salesforce backup', 'API-based backup'],
      rto: '< 2 hours',
      rpo: '< 1 hour'
    }
  ];

  // Service specifications
  const specifications = {
    overview: {
      title: 'Service Overview',
      items: [
        { label: 'Backup Frequency', value: 'Continuous to Daily' },
        { label: 'Retention Period', value: 'Customizable (7 days to 7 years)' },
        { label: 'Recovery Time Objective', value: '< 4 hours' },
        { label: 'Recovery Point Objective', value: '< 1 hour' },
        { label: 'Encryption', value: 'AES-256 encryption' },
        { label: 'Monitoring', value: '24/7 automated monitoring' }
      ]
    },
    technology: {
      title: 'Technology Stack',
      items: [
        { label: 'Primary Platform', value: 'Veeam Backup & Replication' },
        { label: 'Cloud Integration', value: 'AWS, Azure, Google Cloud' },
        { label: 'Database Support', value: 'SQL Server, Oracle, MySQL, PostgreSQL' },
        { label: 'Virtualization', value: 'VMware vSphere, Hyper-V, Nutanix' },
        { label: 'Storage', value: 'Local, NAS, SAN, Cloud storage' },
        { label: 'Deduplication', value: 'Source and target deduplication' }
      ]
    },
    compliance: {
      title: 'Compliance & Security',
      items: [
        { label: 'Data Encryption', value: 'End-to-end AES-256' },
        { label: 'Access Control', value: 'Role-based permissions' },
        { label: 'Audit Logging', value: 'Complete activity logs' },
        { label: 'Compliance', value: 'GDPR, HIPAA, SOX ready' },
        { label: 'Immutable Backups', value: 'Ransomware protection' },
        { label: 'Geographic Replication', value: 'Multi-region storage' }
      ]
    },
    sla: {
      title: 'Service Level Agreement',
      items: [
        { label: 'Backup Success Rate', value: '99.9% guaranteed' },
        { label: 'Recovery Testing', value: 'Monthly validation' },
        { label: 'Support Response', value: '< 15 minutes' },
        { label: 'Recovery Support', value: '24/7 emergency response' },
        { label: 'Documentation', value: 'Complete recovery procedures' },
        { label: 'Training', value: 'Staff training included' }
      ]
    }
  };

  // Recovery process steps
  const recoveryProcess = [
    {
      step: '01',
      title: 'Incident Detection',
      description: 'Automated monitoring detects data loss or system failure',
      icon: Eye,
      time: '< 5 minutes'
    },
    {
      step: '02',
      title: 'Assessment & Planning',
      description: 'Evaluate scope of recovery and determine optimal strategy',
      icon: Target,
      time: '< 15 minutes'
    },
    {
      step: '03',
      title: 'Recovery Execution',
      description: 'Execute recovery plan with real-time progress monitoring',
      icon: RefreshCw,
      time: '< 4 hours'
    },
    {
      step: '04',
      title: 'Validation & Testing',
      description: 'Verify data integrity and system functionality',
      icon: CheckCircle,
      time: '< 1 hour'
    }
  ];

  // Performance metrics
  const metrics = [
    { value: 99.9, suffix: '%', label: 'Backup Success Rate', color: 'text-green-500' },
    { value: 15, suffix: ' min', label: 'Recovery Response', color: 'text-blue-500' },
    { value: 4, suffix: ' hrs', label: 'Max Recovery Time', color: 'text-purple-500' },
    { value: 256, suffix: '-bit', label: 'AES Encryption', color: 'text-orange-500' }
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
              <span className="text-primary">Backup & Recovery</span>
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
                <Shield size={16} className="mr-2" />
                Data Protection
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Enterprise Backup &
                <span className="block text-primary">Disaster Recovery</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive backup and recovery solutions powered by Veeam. 
                Protect your critical data with automated backups and rapid recovery capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Backup Assessment
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Recovery Testing
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
                {/* Backup Status Dashboard */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Backup Status</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      All Backups Successful
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Database Servers', progress: 100, size: '2.4 TB', time: '02:15 AM' },
                      { name: 'File Servers', progress: 100, size: '1.8 TB', time: '02:45 AM' },
                      { name: 'Virtual Machines', progress: 95, size: '3.2 TB', time: 'In Progress' }
                    ].map((backup, i) => (
                      <motion.div
                        key={backup.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{backup.name}</span>
                          <span className="text-sm text-gray-500">{backup.time}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${backup.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{backup.progress}%</span>
                        </div>
                        <div className="text-sm text-gray-500">Size: {backup.size}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Backup Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Backup Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete data protection across all your critical systems and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backupSolutions.map((solution, index) => {
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
                  
                  <div className="flex justify-between text-xs bg-gray-50 rounded-lg p-3">
                    <div>
                      <div className="text-gray-500">RTO</div>
                      <div className="font-semibold text-gray-900">{solution.rto}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">RPO</div>
                      <div className="font-semibold text-gray-900">{solution.rpo}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Disaster Recovery Process
            </h2>
            <p className="text-lg text-gray-600">
              Proven methodology for rapid data and system recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryProcess.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      <Clock size={12} className="mr-1" />
                      {step.time}
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
              Detailed backup and recovery service capabilities
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
              Service Performance
            </h2>
            <p className="text-lg text-gray-600">
              Proven backup and recovery performance metrics
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
              Protect Your Critical Data Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait for disaster to strike. Implement comprehensive backup and recovery solutions now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Backup Assessment
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

export default BackupRecoveryPage;