import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Zap, 
  Settings, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  TrendingUp,
  Users,
  Database,
  Server,
  Globe,
  Activity,
  RefreshCw,
  Layers,
  Container,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsPage = () => {
  useEffect(() => {
    document.title = 'DevOps & CI/CD | Atlas Defenders';
  }, []);

  const [currentTechSlide, setCurrentTechSlide] = useState(0);

  // Core capabilities
  const capabilities = [
    {
      icon: Settings,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure provisioning and management using code-based approaches for consistency and scalability.'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Setup',
      description: 'Implement automated continuous integration and deployment pipelines for faster, more reliable software delivery.'
    },
    {
      icon: Shield,
      title: 'Automated Testing & Deployment',
      description: 'Comprehensive automated testing strategies with secure, reliable deployment processes across all environments.'
    },
    {
      icon: Container,
      title: 'Containerization & Orchestration',
      description: 'Docker containerization with Kubernetes orchestration for scalable, portable application deployment.'
    },
    {
      icon: Activity,
      title: 'Environment Configuration & Monitoring',
      description: 'Standardized environment setup with comprehensive monitoring and alerting for optimal performance.'
    },
    {
      icon: Database,
      title: 'Cloud Infrastructure Management',
      description: 'Multi-cloud infrastructure management with cost optimization and security best practices.'
    }
  ];

  // Technologies organized by category
  const technologies = {
    cicd: [
      { name: 'Jenkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/2560px-Jenkins_logo.svg.png' },
      { name: 'GitHub Actions', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GitHub_logo.svg/2560px-GitHub_logo.svg.png' },
      { name: 'GitLab CI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png' },
      { name: 'CircleCI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/2048px-Circleci-icon-logo.svg.png' }
    ],
    containers: [
      { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png' },
      { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2048px-Kubernetes_logo_without_workmark.svg.png' },
      { name: 'Helm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Helm_Logo.svg/2560px-Helm_Logo.svg.png' },
      { name: 'OpenShift', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/2560px-OpenShift-LogoType.svg.png' }
    ],
    iac: [
      { name: 'Terraform', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/2560px-Terraform_Logo.svg.png' },
      { name: 'Ansible', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/2560px-Ansible_logo.svg.png' },
      { name: 'CloudFormation', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
      { name: 'Pulumi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pulumi_Logo.svg/2560px-Pulumi_Logo.svg.png' }
    ],
    monitoring: [
      { name: 'Prometheus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2048px-Prometheus_software_logo.svg.png' },
      { name: 'Grafana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/2560px-Grafana_logo.svg.png' },
      { name: 'ELK Stack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/2560px-Elasticsearch_logo.svg.png' },
      { name: 'Datadog', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Datadog_logo.svg/2560px-Datadog_logo.svg.png' }
    ]
  };

  // Why choose us differentiators
  const differentiators = [
    '80% faster deployment cycles with automated CI/CD pipelines',
    'Zero-downtime deployments with blue-green deployment strategies',
    'Infrastructure cost reduction up to 40% through optimization',
    'Comprehensive monitoring and alerting for proactive issue resolution',
    'Security-first approach with automated vulnerability scanning',
    'Multi-cloud expertise for vendor-agnostic solutions'
  ];

  // Auto-rotate technology slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechSlide(prev => (prev + 1) % Object.keys(technologies).length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const techCategories = Object.keys(technologies);
  const currentCategory = techCategories[currentTechSlide];

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'cicd': return 'CI/CD Tools';
      case 'containers': return 'Containerization';
      case 'iac': return 'Infrastructure as Code';
      case 'monitoring': return 'Monitoring & Observability';
      default: return category;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="DevOps CI/CD"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-teal-900/85 to-blue-900/90"></div>
        </div>

        {/* Floating DevOps Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-6 border-2 border-accent/50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent/70 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 text-white pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-0.5 bg-accent mr-4"></div>
              <span className="text-lg font-medium text-accent tracking-wide uppercase">
                Development Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              DevOps & CI/CD
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Speed Up Your Software Delivery Without Compromising Quality
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get a Free Quote</span>
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
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center">
                  <GitBranch size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced DevOps & CI/CD Solutions
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Atlas Defenders transforms your software delivery process with modern DevOps practices and automated 
                CI/CD pipelines. We help organizations achieve faster deployment cycles, improved reliability, 
                and enhanced collaboration between development and operations teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
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
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps services to streamline your development and deployment processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-green-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
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
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading DevOps tools and platforms for efficient software delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Category Indicators */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {techCategories.map((category, index) => (
                  <div
                    key={category}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTechSlide ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Technology Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {getCategoryTitle(currentCategory)}
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {technologies[currentCategory as keyof typeof technologies].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-sm">
                        {tech.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Defenders */}
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
              Why Choose Atlas Defenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our DevOps expertise accelerates your development lifecycle while maintaining quality and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((differentiator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-center">
                  <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 font-medium group-hover:text-green-600 transition-colors duration-300">
                    {differentiator}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              DevOps Transformation Results
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Measurable improvements in deployment speed, reliability, and team productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '80%', label: 'Faster Deployments', icon: Zap },
              { value: '99.9%', label: 'Deployment Success Rate', icon: CheckCircle },
              { value: '40%', label: 'Cost Reduction', icon: TrendingUp },
              { value: '24/7', label: 'Automated Monitoring', icon: Activity }
            ].map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Icon size={28} className="text-accent" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {metric.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <GitBranch size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Accelerate Your Software Delivery?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your development process with our expert DevOps and CI/CD solutions. 
                Achieve faster deployments without compromising quality or security.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-green-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your DevOps Assessment
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View All Development Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DevOpsPage;