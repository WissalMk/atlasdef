import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Settings,
  Database,
  Globe,
  Layers,
  Briefcase,
  UserCheck,
  DollarSign,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseSoftwarePage = () => {
  useEffect(() => {
    document.title = 'Enterprise Software (ERP, CRM, HRMS) | Atlas Defenders';
  }, []);

  const [currentTechSlide, setCurrentTechSlide] = useState(0);

  // Core capabilities
  const capabilities = [
    {
      icon: Building,
      title: 'ERP Implementation & Customization',
      description: 'Complete ERP system implementation with custom modules tailored to your business processes and industry requirements.'
    },
    {
      icon: Users,
      title: 'CRM Solutions Integration',
      description: 'Customer relationship management systems that streamline sales, marketing, and customer service operations.'
    },
    {
      icon: UserCheck,
      title: 'HRMS Platforms Setup',
      description: 'Human resource management systems for employee lifecycle management, payroll, and performance tracking.'
    },
    {
      icon: Settings,
      title: 'Automation & Workflow Optimization',
      description: 'Business process automation and workflow optimization to eliminate manual tasks and improve efficiency.'
    },
    {
      icon: Database,
      title: 'API Integration with Business Systems',
      description: 'Seamless integration between different business systems for unified data flow and process automation.'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Advanced reporting and analytics capabilities for data-driven decision making and business insights.'
    }
  ];

  // Solutions organized by category
  const solutions = {
    erp: [
      { name: 'Oracle ERP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
      { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png' },
      { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Odoo_logo.svg/2560px-Odoo_logo.svg.png' },
      { name: 'Sage', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Sage_Group_logo.svg/2560px-Sage_Group_logo.svg.png' },
      { name: 'Microsoft Dynamics 365', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' }
    ],
    crm: [
      { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png' },
      { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png' },
      { name: 'Zoho CRM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Zoho_logo.svg/2560px-Zoho_logo.svg.png' },
      { name: 'Microsoft Dynamics CRM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' }
    ],
    hrms: [
      { name: 'BambooHR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/BambooHR_logo.svg/2560px-BambooHR_logo.svg.png' },
      { name: 'Zenefits', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zenefits_logo.svg/2560px-Zenefits_logo.svg.png' },
      { name: 'Freshteam', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Freshworks_logo.svg/2560px-Freshworks_logo.svg.png' },
      { name: 'Workday', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Workday_logo.svg/2560px-Workday_logo.svg.png' }
    ]
  };

  // Why choose us differentiators
  const differentiators = [
    'End-to-end implementation with 99% project success rate',
    'Industry-specific customizations and best practices',
    'Seamless data migration with zero data loss guarantee',
    'Comprehensive training and change management support',
    'Post-implementation support and continuous optimization',
    'Multi-system integration expertise for unified operations'
  ];

  // Auto-rotate technology slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechSlide(prev => (prev + 1) % Object.keys(solutions).length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const solutionCategories = Object.keys(solutions);
  const currentCategory = solutionCategories[currentTechSlide];

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'erp': return 'ERP Solutions';
      case 'crm': return 'CRM Platforms';
      case 'hrms': return 'HRMS Systems';
      default: return category;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Enterprise Software"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-red-900/85 to-pink-900/90"></div>
        </div>

        {/* Floating Enterprise Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-8 border border-accent/50 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-accent/60 rounded-sm"></div>
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
              Enterprise Software
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Digital Core for Smarter, Agile, and Scalable Business Operations
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                  <Building size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Enterprise Software Solutions
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Atlas Defenders specializes in implementing and customizing enterprise software solutions that transform 
                business operations. From ERP and CRM to HRMS platforms, we deliver integrated systems that streamline 
                processes, improve efficiency, and drive digital transformation across your organization.
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
              Comprehensive enterprise software services for complete business transformation
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-orange-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-orange-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-orange-600 transition-colors duration-300">
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

      {/* Solutions We Implement */}
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
              Solutions We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading enterprise software platforms for comprehensive business management
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Category Indicators */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {solutionCategories.map((category, index) => (
                  <div
                    key={category}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTechSlide ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Solutions Carousel */}
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

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {solutions[currentCategory as keyof typeof solutions].map((solution, index) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img 
                          src={solution.logo} 
                          alt={`${solution.name} logo`}
                          className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-sm">
                        {solution.name}
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
              Our enterprise software expertise ensures successful implementations that drive business growth
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
                  <span className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors duration-300">
                    {differentiator}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
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
              Enterprise Implementation Success
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Proven results in enterprise software implementations across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Implementations', icon: Building },
              { value: '99%', label: 'Success Rate', icon: Target },
              { value: '60%', label: 'Efficiency Gain', icon: TrendingUp },
              { value: '50%', label: 'Cost Reduction', icon: DollarSign }
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
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Building size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Transform Your Business Operations?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Implement enterprise software solutions that streamline operations, improve efficiency, 
                and drive digital transformation across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-orange-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Enterprise Solution Quote
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

export default EnterpriseSoftwarePage;