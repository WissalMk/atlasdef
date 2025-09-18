import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartPulse, LandPlot, Building, ArrowRight, CheckCircle, Shield, Users, Zap, ChevronLeft, ChevronRight, Landmark, Heart, ShoppingCart, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const industries = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise',
    subtitle: 'Fortune 500 & Large Corporations',
    description: 'Comprehensive security solutions for large organizations with complex infrastructure needs and regulatory requirements.',
    features: ['Zero-Trust Architecture', 'Advanced Threat Protection', 'Compliance Management', '24/7 SOC Services'],
    clients: '50+',
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'bg-blue-50',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'sme',
    icon: Building,
    title: 'SMEs',
    subtitle: 'Small & Medium Enterprises',
    description: 'Tailored, cost-effective security packages for growing businesses that need enterprise-grade protection.',
    features: ['Managed Security', 'Cloud Protection', 'Endpoint Security', 'Security Training'],
    clients: '80+',
    color: 'from-emerald-600 to-teal-700',
    bgColor: 'bg-emerald-50',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'Universities & Schools',
    description: 'Specialized solutions for educational institutions to protect student data and research while maintaining accessibility.',
    features: ['Student Data Protection', 'Research Security', 'Campus Networks', 'BYOD Management'],
    clients: '25+',
    color: 'from-purple-600 to-violet-700',
    bgColor: 'bg-purple-50',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    subtitle: 'Hospitals & Medical Centers',
    description: 'HIPAA-compliant security for protecting sensitive patient information and ensuring system availability.',
    features: ['HIPAA Compliance', 'Medical Device Security', 'Patient Data Protection', 'Critical System Uptime'],
    clients: '15+',
    color: 'from-red-600 to-pink-700',
    bgColor: 'bg-red-50',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'government',
    icon: LandPlot,
    title: 'Government',
    subtitle: 'Public Sector & Agencies',
    description: 'High-security solutions for government agencies and public sector organizations with critical infrastructure.',
    features: ['Critical Infrastructure', 'Nation-State Defense', 'Secure Communications', 'Compliance Frameworks'],
    clients: '10+',
    color: 'from-orange-600 to-amber-700',
    bgColor: 'bg-orange-50',
    image: 'https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  }
];

const FloatingElement = ({ delay, children, className = "" }: { delay: number, children: React.ReactNode, className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const Industries = () => {
  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Enhanced Carousel navigation functions with auto-animation
  const nextSlide = () => {
    setCurrentIndustrySlide((prev) => (prev + 1) % Math.max(1, industries.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndustrySlide((prev) => (prev - 1 + Math.max(1, industries.length - 1)) % Math.max(1, industries.length - 1));
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsCarouselPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentOffset = e.clientX - dragStart;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsCarouselPaused(false);
    
    const threshold = 50;
    if (dragOffset > threshold && currentIndustrySlide > 0) {
      prevSlide();
    } else if (dragOffset < -threshold && currentIndustrySlide < industries.length - 2) {
      nextSlide();
    }
    
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Auto-animation effect for carousel
  useEffect(() => {
    if (!isCarouselPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Auto-advance every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, currentIndustrySlide]);

  return (
    <section 
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }}
    >
      {/* Cursor Following Cyan-Blue Light Effect (Same as Data Center Page) */}
      <div 
        className="absolute pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, rgba(34, 211, 238, 0.3) 30%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Enhanced Background Effects with Home Page Colors (Cyan/Blue) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/2 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Industries We
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Protect
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Atlas Defenders provides specialized SOC-as-a-Service solutions across critical industries, ensuring compliance and protection tailored to each sector's unique requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/industries"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25"
              >
                <span>Explore Your Industry</span>
                <ArrowRight size={20} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Professional Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional Carousel Container */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className={`flex transition-transform duration-1000 ease-in-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                  style={{ 
                    transform: `translateX(calc(-${currentIndustrySlide * 35}% + ${isDragging ? dragOffset : 0}px))` 
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                >
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    
                    return (
                      <div key={industry.id} className="w-1/2 flex-shrink-0 px-3">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 border border-gray-200/20 h-full"
                          onMouseEnter={() => setIsCarouselPaused(true)}
                          onMouseLeave={() => setIsCarouselPaused(false)}
                        >
                          {/* Ultra Professional Image Container with Cyan/Blue Effects */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={industry.image}
                              alt={industry.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Professional Gradient Overlay with Home Page Colors */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/70 via-blue-600/60 to-cyan-700/70 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 via-cyan-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/50 via-transparent to-blue-600/50 opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>


                          </div>

                          {/* Ultra Professional Content - Perfect Consistency */}
                          <div className="p-6 space-y-4 flex flex-col justify-between min-h-[220px]">
                            <div className="space-y-3">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300 line-clamp-2 leading-tight">
                                {industry.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                {industry.description}
                              </p>
                            </div>

                            {/* Enhanced Professional Tags with Home Page Colors */}
                            <div className="flex flex-wrap gap-2 pt-3">
                              {industry.id === 'enterprise' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Zero Trust</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Enterprise SOC</span>
                                </>
                              )}
                              {industry.id === 'sme' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Managed Security</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Cost-Effective</span>
                                </>
                              )}
                              {industry.id === 'education' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Student Data</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">BYOD Security</span>
                                </>
                              )}
                              {industry.id === 'healthcare' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">HIPAA</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Patient Data</span>
                                </>
                              )}
                              {industry.id === 'government' && (
                                <>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Critical Infrastructure</span>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200">Nation-State Defense</span>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Professional Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: Math.max(1, industries.length - 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndustrySlide(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${currentIndustrySlide === index
                      ? 'bg-cyan-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ultra Professional High-Tech Navigation - Below Divs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-20"
        >
          {/* High-Tech Navigation Container */}
          <div className="flex items-center space-x-8 bg-gradient-to-r from-gray-800/80 via-gray-900/90 to-gray-800/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-700/50 shadow-2xl">

            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-cyan-600/20 hover:to-blue-600/20 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-x-1"
            >
              <ChevronLeft size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />

              {/* High-tech glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-xl transition-all duration-500"></div>
            </button>

            {/* Professional Progress Dots */}
            <div className="flex items-center space-x-3">
              {Array.from({ length: Math.max(1, industries.length - 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndustrySlide(index)}
                  className={`relative transition-all duration-500 ${currentIndustrySlide === index
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full hover:scale-125'
                    }`}
                >
                  {currentIndustrySlide === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-cyan-600/20 hover:to-blue-600/20 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:translate-x-1"
            >
              <ChevronRight size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />

              {/* High-tech glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-xl transition-all duration-500"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;