import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const Counter = ({ end, duration = 2.5, suffix = '', prefix = '', decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isComplete) {
      let startTime: number;
      const startCount = 0;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * (end - startCount) + startCount;
        
        setCount(decimals > 0 ? parseFloat(currentCount.toFixed(decimals)) : Math.floor(currentCount));
        
        if (progress >= 1) {
          setCount(end);
          setIsComplete(true);
        } else {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration, decimals, isComplete]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
};

// Professional SVG Icons for Enterprise Appeal
const ProjectsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

const SatisfactionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="m16 11 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const CertificationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="2"/>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
  </svg>
);

const SecurityShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.1"/>
  </svg>
);

const ProfessionalStats = () => {
  const stats = [
    {
      number: 95,
      suffix: '%',
      label: 'support coverage in U.S. & Canada'
    },
    {
      number: 9,
      suffix: 'M+',
      label: 'total devices supported'
    },
    {
      number: 24,
      suffix: '/7/365',
      label: 'seamless technology support'
    },
    {
      number: 8,
      suffix: 'M+',
      label: 'service desk contacts per year'
    },
    {
      number: 85,
      suffix: '%',
      label: 'incident resolution from the first call'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Clean Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #1e293b 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>



      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Matching Industries Section Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Trusted by Organizations
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
              WorldWide
            </span>
          </h2>
        </motion.div>

        {/* Clean Professional Stats Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - 3 Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {stats.slice(0, 3).map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Animated Number - Smaller Size */}
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500 group-hover:text-blue-600 transition-colors duration-500">
                    <Counter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                </div>

                {/* Professional Label */}
                <h3 className="text-sm md:text-base text-gray-700 font-medium leading-tight">
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 Stats Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {stats.slice(3, 5).map((stat, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index + 3) * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Animated Number - Smaller Size */}
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500 group-hover:text-blue-600 transition-colors duration-500">
                    <Counter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                </div>

                {/* Professional Label */}
                <h3 className="text-sm md:text-base text-gray-700 font-medium leading-tight">
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalStats;