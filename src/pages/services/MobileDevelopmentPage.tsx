import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Settings,
  Database,
  Palette,
  Server,
  Globe,
  Download,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileDevelopmentPage = () => {
  useEffect(() => {
    document.title = 'Mobile Development | Atlas Defenders';
  }, []);

  const [currentTechSlide, setCurrentTechSlide] = useState(0);

  // Core capabilities
  const capabilities = [
    {
      icon: Smartphone,
      title: 'Cross-Platform App Development',
      description: 'Build once, deploy everywhere. Create apps that work seamlessly across iOS and Android platforms with shared codebase.'
    },
    {
      icon: Monitor,
      title: 'Native iOS & Android Apps',
      description: 'Platform-specific applications leveraging native features for optimal performance and user experience.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design for Mobile',
      description: 'Intuitive and engaging mobile interfaces designed for touch interactions and mobile-first experiences.'
    },
    {
      icon: Server,
      title: 'Mobile API Development',
      description: 'Robust backend APIs optimized for mobile applications with efficient data synchronization and offline capabilities.'
    },
    {
      icon: Download,
      title: 'App Store Deployment & Optimization',
      description: 'Complete app store submission process with ASO (App Store Optimization) for maximum visibility and downloads.'
    },
    {
      icon: Database,
      title: 'Mobile Backend Integration',
      description: 'Seamless integration with cloud services, databases, and third-party APIs for comprehensive mobile solutions.'
    }
  ];

  // Technologies organized by category
  const technologies = {
    crossPlatform: [
      { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/2560px-Google-flutter-logo.png' },
      { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
      { name: 'Xamarin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Xamarin-logo.svg/2560px-Xamarin-logo.svg.png' }
    ],
    native: [
      { name: 'Swift', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/2560px-Swift_logo.svg.png' },
      { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/2048px-Kotlin_Icon.png' },
      { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' },
      { name: 'Objective-C', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/2048px-Apple_logo_grey.svg.png' }
    ],
    backend: [
      { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/2560px-Firebase_Logo.svg.png' },
      { name: 'AWS Mobile Hub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
      { name: 'GraphQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png' },
      { name: 'REST APIs', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/2048px-JavaScript-logo.png' }
    ]
  };

  // Why choose us differentiators
  const differentiators = [
    'Cross-platform expertise reducing development costs by 40%',
    'Native performance optimization for smooth user experiences',
    'App Store optimization for maximum visibility and downloads',
    'Offline-first architecture for reliable mobile experiences',
    'Push notification and real-time sync capabilities',
    'Comprehensive testing across multiple devices and OS versions'
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
      case 'crossPlatform': return 'Cross-Platform';
      case 'native': return 'Native Development';
      case 'backend': return 'Backend & APIs';
      default: return category;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Mobile Development"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-indigo-900/90"></div>
        </div>

        {/* Floating Mobile Elements */}
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
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-12 bg-accent/30 rounded-lg border border-accent/50"></div>
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
              Mobile Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Modern Mobile Experiences That Scale Across Platforms
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Smartphone size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Mobile App Development
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Atlas Defenders creates powerful mobile applications that engage users and drive business growth. 
                Our team specializes in both cross-platform and native development, delivering apps that perform 
                flawlessly across all devices while providing exceptional user experiences.
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
              Comprehensive mobile development services from concept to app store deployment
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-purple-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-purple-600 transition-colors duration-300">
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
              Modern mobile development technologies for iOS, Android, and cross-platform solutions
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
                      index === currentTechSlide ? 'bg-purple-600' : 'bg-gray-300'
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
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm">
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
              Our mobile development expertise delivers apps that users love and businesses rely on
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
                  <span className="text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {differentiator}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              Mobile App Success Stories
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our mobile applications consistently deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Apps Developed', icon: Smartphone },
              { value: '4.8★', label: 'Average App Rating', icon: Star },
              { value: '2M+', label: 'Total Downloads', icon: Download },
              { value: '95%', label: 'Client Satisfaction', icon: Users }
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
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Launch Your Mobile App?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your idea into a powerful mobile application that engages users 
                and drives business growth across all platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-purple-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free App Quote
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

export default MobileDevelopmentPage;