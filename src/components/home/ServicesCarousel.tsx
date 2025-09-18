import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'network-security',
    category: 'Security',
    title: 'Network Security',
    description: 'Advanced firewall deployment and network protection solutions',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#firewall'
  },
  {
    id: 'platform-integration',
    category: 'Technology',
    title: 'Platform Integration',
    description: 'Seamless cloud and on-premises infrastructure integration',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#cloud'
  },
  {
    id: 'it-management',
    category: 'Solution',
    title: 'IT Management',
    description: 'Comprehensive IT infrastructure management and optimization',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#virtualization'
  },
  {
    id: 'network-infrastructure',
    category: 'Technology',
    title: 'Network Infrastructure',
    description: 'Enterprise-grade network design and implementation',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#network'
  },
  {
    id: 'cloud-deployment',
    category: 'Cloud',
    title: 'AWS & Azure Deployments',
    description: 'Multi-cloud strategy and secure cloud migrations',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#cloud'
  },
  {
    id: 'real-time-monitoring',
    category: 'Monitoring',
    title: 'Real-Time Observability',
    description: 'Advanced monitoring and analytics for IT infrastructure',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#monitoring'
  },
  {
    id: 'backup-recovery',
    category: 'Backup',
    title: 'Veeam DR Plans',
    description: 'Enterprise backup and disaster recovery solutions',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services#backup'
  },
  {
    id: 'cybersecurity-soc',
    category: 'Security',
    title: 'SOC as a Service',
    description: '24/7 security operations center with advanced threat detection',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    link: '/services'
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality with faster speed
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % services.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 2800); // Reduced from 4000ms to 2800ms for faster movement
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24;
      const visibleCards = Math.floor(carouselRef.current.clientWidth / cardWidth);
      const maxScroll = Math.max(0, services.length - visibleCards);
      const targetIndex = Math.min(index, maxScroll);
      
      carouselRef.current.scrollTo({
        left: cardWidth * targetIndex,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            We Delivered Best Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Comprehensive IT and cybersecurity services designed to protect and optimize your digital infrastructure.
          </p>
        </motion.div>

        {/* Services Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows - Positioned on sides */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Desktop/Tablet View */}
          <div 
            ref={carouselRef}
            className="hidden md:flex overflow-x-auto scrollbar-hide space-x-6 pb-4 px-20"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Link to={service.link} className="block w-full h-full">
                  {/* Card Container with Shadow */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    
                    {/* Background Image - Full Color Always */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Default State: Subtle Grey Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent transition-all duration-500 group-hover:opacity-0" />
                    
                    {/* Hover State: Semi-transparent Blue Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      {/* Category Badge */}
                      <motion.div
                        className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4 w-fit border border-white/30 text-white font-inter"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.category}
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 text-white transition-all duration-300 font-poppins">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 transition-all duration-300 mb-6 font-inter leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.15 }}
                        animate={{ 
                          x: [0, 3, 0],
                          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <ArrowRight size={20} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Vertical Stack */}
          <div className="md:hidden space-y-6 px-4">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full h-80 relative group cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <Link to={service.link} className="block w-full h-full">
                  {/* Card Container with Shadow */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    
                    {/* Background Image - Full Color Always */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Default State: Subtle Grey Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent transition-all duration-500 group-hover:opacity-0" />
                    
                    {/* Hover State: Semi-transparent Blue Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      {/* Category Badge */}
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4 w-fit border border-white/30 text-white font-inter">
                        {service.category}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 font-poppins">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 transition-all duration-300 mb-4 text-sm font-inter leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight size={16} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-3 mt-8"
        >
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * 4);
                scrollToIndex(index * 4);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 4) === index 
                  ? 'bg-accent scale-125 shadow-lg shadow-accent/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm font-poppins"
          >
            View All Services
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;