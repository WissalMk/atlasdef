import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Manual navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 7);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 7) % 7);
  };

  // Auto-switch slides every 5 seconds - only start after images are loaded
  useEffect(() => {
    if (!imagesLoaded || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 7);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded, isPaused]);

  // Preload all images for smooth transitions with optimizations
  useEffect(() => {
    const imageUrls = [
      "/Logos/cybersecurity_image.jpg",
      "/Logos/edr_image.png", 
      "/Logos/offensive_image.png",
      "/Logos/Datacenter1.jpg",
      "/Logos/itsupport_background_image.jpg",
      "/Logos/erp_background_image.png",
      "/Logos/development_background_image.jpg"
    ];

    const preloadImages = async () => {
      const imagePromises = imageUrls.map((url, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          
          // Add loading optimizations
          img.loading = 'eager'; // Load immediately
          img.decoding = 'async'; // Decode asynchronously
          
          // Set a timeout to prevent hanging
          const timeout = setTimeout(() => {
            console.warn(`Image loading timeout: ${url}`);
            resolve(null); // Resolve anyway to continue
          }, 10000); // 10 second timeout
          
          img.onload = () => {
            clearTimeout(timeout);
            console.log(`✅ Loaded: ${url}`);
            resolve(img);
          };
          
          img.onerror = (error) => {
            clearTimeout(timeout);
            console.warn(`❌ Failed to load: ${url}`, error);
            resolve(null); // Resolve with null instead of rejecting
          };
          
          img.src = url;
        });
      });

      try {
        const results = await Promise.all(imagePromises);
        const loadedCount = results.filter(img => img !== null).length;
        console.log(`🎯 Preloaded ${loadedCount}/${imageUrls.length} images`);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Image preloading error:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  const slides = [
    {
      badge: "Cyber Defense Services",
      title: "Strengthen Your",
      titleHighlight: "Infrastructure",
      titleEnd: "Before the Attack Comes.",
      description: "We design and deploy next-generation security solutions — from firewalls and Zero Trust to EDR, XDR, and SIEM — building resilient infrastructures that stop threats before they strike.",
      cta: "Ready to Fortify Your Cyber Defense Stack?",
      image: "/Logos/cybersecurity_image.jpg",
      alt: "Cybersecurity",
      theme: "cyan",
      badgeColor: "text-cyan-400",
      titleHighlightColor: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      overlayColor: "from-black via-black/40 to-transparent"
    },
    {
      badge: "24/7 SOC Services",
      title: "Always Watching.",
      titleHighlight: "Always Protecting",
      titleEnd: "— 24/7.",
      description: "Our global Security Operations Center (SOC) monitors your systems around the clock — detecting attacks, stopping breaches, and keeping your business one step ahead.",
      cta: "Start 24/7 Protection Today",
      image: "/Logos/edr_image.png",
      alt: "EDR Security",
      theme: "cyan",
      badgeColor: "text-cyan-400",
      titleHighlightColor: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      overlayColor: "from-black via-black/40 to-transparent"
    },
    {
      badge: "Offensive Security Services",
      title: "Think You're Safe?",
      titleHighlight: "Let's Put It",
      titleEnd: "to the Test.",
      description: "Atlas Defenders simulates real-world attacks to uncover your vulnerabilities before malicious actors do. From red teaming to advanced penetration testing — we break in before they can.",
      cta: "Challenge Your Defenses",
      image: "/Logos/offensive_image.png",
      alt: "Offensive Security",
      theme: "red",
      badgeColor: "text-red-400",
      titleHighlightColor: "text-red-400",
      buttonColor: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
      overlayColor: "from-black via-red-900/30 to-transparent"
    },
    {
      badge: "Next-Gen Data Centers",
      title: "Build Your Next-Gen Data Center Today",
      titleHighlight: "Designed.",
      titleEnd: "Secured.",
      description: "Atlas Defenders builds modern, secure, and scalable data center infrastructures — from virtualization and automation to intelligent power, advanced cooling, and zero-trust network architecture. Designed to evolve. Built to last.",
      cta: "Talk to a Data Center Architect",
      image: "/Logos/Datacenter1.jpg",
      alt: "Next-Gen Data Center",
      theme: "purple",
      badgeColor: "text-purple-400",
      titleHighlightColor: "text-purple-400",
      buttonColor: "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500",
      overlayColor: "from-black via-purple-900/25 to-transparent"
    },
    {
      badge: "IT Support Services",
      title: "Reliable IT Support.",
      titleHighlight: "Onsite or Remote.",
      titleEnd: "Anytime You Need.",
      description: "From setting up your new hires to troubleshooting daily issues — our dedicated IT experts keep your business running smoothly with fast, friendly, and professional support.",
      cta: "Request IT Support Now",
      image: "/Logos/itsupport_background_image.jpg",
      alt: "IT Support Services",
      theme: "emerald",
      badgeColor: "text-emerald-400",
      titleHighlightColor: "text-emerald-400",
      buttonColor: "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500",
      overlayColor: "from-black via-emerald-900/25 to-transparent"
    },
    {
      badge: "Business Applications",
      title: "Power Your Enterprise with",
      titleHighlight: "Intelligent Business",
      titleEnd: "Platforms.",
      description: "From ERP and CRM to ITSM, HRMS, and Collaboration Platforms — Atlas Defenders implements intelligent, scalable business applications tailored to optimize your operations, streamline workflows, and accelerate digital transformation.",
      cta: "Explore Business Solutions",
      image: "/Logos/erp_background_image.png",
      alt: "Business Applications",
      theme: "orange",
      badgeColor: "text-orange-400",
      titleHighlightColor: "text-orange-400",
      buttonColor: "bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-500 hover:via-amber-500 hover:to-yellow-500",
      overlayColor: "from-black via-orange-900/25 to-transparent"
    },
    {
      badge: "Development Services",
      title: "From Code to Product —",
      titleHighlight: "We Build",
      titleEnd: "It All.",
      description: "We develop fast, secure, and scalable applications — from cutting-edge websites to high-performance mobile apps. Whether you need a business platform, customer portal, or enterprise-grade software, our team transforms your vision into digital reality.",
      cta: "Start Your Project Now",
      image: "/Logos/development_background_image.jpg",
      alt: "Development Services",
      theme: "indigo",
      badgeColor: "text-indigo-400",
      titleHighlightColor: "text-indigo-400",
      buttonColor: "bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:via-blue-500 hover:to-sky-500",
      overlayColor: "from-black via-indigo-900/25 to-transparent"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    })
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.9
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          {/* Left side - Pure black background */}
          <div className="w-1/2 bg-black"></div>
          
          {/* Right side - Animated Images */}
          <div className="w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="absolute inset-0"
              >
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                {/* Dynamic gradient overlay based on slide theme */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlayColor}`}></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Additional blur effect in the middle */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      {/* Main Content with Smooth Transitions */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }}
                  className="space-y-6"
                >
                  {/* Service Category Badge */}
                  <motion.div
                    variants={{
                      enter: { opacity: 0, y: 20 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`${slides[currentSlide].badgeColor} text-sm font-semibold uppercase tracking-widest`}>
                      {slides[currentSlide].badge}
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    variants={{
                      enter: { opacity: 0, y: 30 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -30 }
                    }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white"
                  >
                    {slides[currentSlide].title}{" "}
                    <span className={slides[currentSlide].titleHighlightColor}>{slides[currentSlide].titleHighlight}</span>
                    <br />
                    {slides[currentSlide].titleEnd}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={{
                      enter: { opacity: 0, y: 20 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    variants={{
                      enter: { opacity: 0, y: 20, scale: 0.9 },
                      center: { opacity: 1, y: 0, scale: 1 },
                      exit: { opacity: 0, y: -20, scale: 0.9 }
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-4"
                  >
                    <Link 
                      to="/contact"
                      className={`inline-block ${slides[currentSlide].buttonColor} text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105`}
                    >
                      {slides[currentSlide].cta}
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - Space for image (handled by absolute positioning) */}
            <div className="lg:col-span-5">
              {/* This space allows the image to show through */}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Navigation Arrows */}
      {imagesLoaded && (
        <>
          {/* Previous Arrow */}
          <motion.button
            onClick={goToPrevSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative">
              {/* Main Button */}
              <div className="relative w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <svg 
                  className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </motion.button>

          {/* Next Arrow */}
          <motion.button
            onClick={goToNextSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative">
              {/* Main Button */}
              <div className="relative w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <svg 
                  className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </motion.button>

          {/* Slide Indicators */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                <div className="relative">
                  {/* Active Indicator */}
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white shadow-lg shadow-white/50' 
                      : 'bg-white/30 group-hover:bg-white/60'
                  }`}></div>
                  
                  {/* Glow Effect for Active */}
                  {currentSlide === index && (
                    <div className="absolute inset-0 bg-white rounded-full scale-150 opacity-50"></div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </>
      )}

      {/* CrowdStrike-Style Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-6 border-t-4 border-blue-600">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                  Live Security Monitor
                </span>
              </div>
              <span className="text-gray-800 font-medium">
                Advanced Threat Detection: Protecting Against SOPHISTICATED CYBER ATTACKS
              </span>
            </div>
            <Link 
              to="/services" 
              className="text-blue-600 hover:text-blue-800 font-bold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center"
            >
              Learn More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;