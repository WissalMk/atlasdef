import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Clock, Folder, Headphones, Shield, Award, Users, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { FaHourglassHalf, FaCheckCircle, FaUsers } from "react-icons/fa";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  color?: string;
  delay?: number;
  description?: string;
}

const Counter = ({ 
  end, 
  duration, 
  label, 
  suffix = '', 
  icon: Icon, 
  color = 'bg-secondary', 
  delay = 0,
  description = ''
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref: counterRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const controls = useAnimation();
  const textControls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      controls.start('visible');
      textControls.start('visible');
      
      // Add a delay before starting the counter
      const timer = setTimeout(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const updateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / (duration * 1000), 1);
          
          // Improved easing function (elastic ease-out)
          const easedProgress = percentage === 1 
            ? 1 
            : 1 - Math.pow(2, -10 * percentage) * Math.sin((percentage * 10 - 0.75) * (2 * Math.PI) / 3);
          
          const currentCount = Math.floor(easedProgress * end);
          setCount(currentCount);

          if (percentage < 1) {
            animationFrameId = requestAnimationFrame(updateCount);
          }
        };

        animationFrameId = requestAnimationFrame(updateCount);
      }, delay * 1000);

      return () => {
        clearTimeout(timer);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [inView, end, duration, delay, controls, textControls, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay * 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.1 + (delay * 0.1)
      }
    }
  };
  
  const numberVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2 + (delay * 0.1)
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.3 + (delay * 0.1)
      }
    }
  };

  return (
    <motion.div
      ref={counterRef}
      className={`flex flex-col items-center p-6 bg-primary bg-opacity-95 rounded-xl shadow-xl backdrop-blur-sm transition-all duration-500 border border-gray-800 hover:border-secondary/50 overflow-hidden relative group`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div 
        className={`absolute inset-0 ${color.replace('bg-', 'bg-')} opacity-10 blur-xl`}
        animate={{
          scale: hovered ? 1.2 : 1,
          opacity: hovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: hovered ? ['0% 0%', '200% 0%'] : '0% 0%',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      <motion.div
        className={`mb-6 p-5 rounded-full ${color} text-text-light relative z-10`}
        variants={iconVariants}
      >
        <motion.div
          animate={{
            rotate: hovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Icon size={36} />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-5xl font-bold mb-3 text-text-light flex items-baseline relative z-10"
        variants={numberVariants}
      >
        <AnimatePresence>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
        <motion.span 
          className="ml-1 text-secondary"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {suffix}
        </motion.span>
      </motion.div>
      
      <motion.p 
        className="text-text-light text-center font-medium text-lg mb-2 relative z-10"
        variants={textVariants}
      >
        {label}
      </motion.p>
      
      {description && (
        <motion.p 
          className="text-text-light/70 text-center text-sm relative z-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: hovered ? 1 : 0, 
            height: hovered ? 'auto' : 0,
            marginTop: hovered ? 8 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

const SupportDisplay = () => {
  const { ref: containerRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [blinking, setBlinking] = useState(false);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Start blinking effect after component is visible
      const timer = setTimeout(() => {
        setBlinking(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [inView, controls]);
  
  // Blinking effect for 24/7 text
  useEffect(() => {
    if (!blinking) return;
    
    const interval = setInterval(() => {
      setBlinking(prev => !prev);
      setTimeout(() => setBlinking(true), 100);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [blinking]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.5
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center p-6 bg-primary bg-opacity-95 rounded-xl shadow-xl backdrop-blur-sm transition-all duration-500 border border-gray-800 hover:border-green-500/50 overflow-hidden relative group"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 bg-green-500 opacity-10 blur-xl"
        animate={{
          scale: hovered ? 1.2 : 1,
          opacity: hovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: hovered ? ['0% 0%', '200% 0%'] : '0% 0%',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 opacity-0"
        animate={{
          opacity: [0, 0.1, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      <motion.div
        className="mb-6 p-5 rounded-full bg-green-500 text-text-light relative z-10"
        variants={iconVariants}
      >
        <motion.div
          animate={{
            rotate: hovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Headphones size={36} />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-5xl font-bold mb-3 text-text-light flex items-baseline relative z-10"
        variants={textVariants}
        animate={{
          opacity: blinking ? [1, 0.5, 1] : 1,
          textShadow: blinking ? ['0 0 0px rgba(34, 197, 94, 0)', '0 0 10px rgba(34, 197, 94, 0.8)', '0 0 0px rgba(34, 197, 94, 0)'] : '0 0 0px rgba(34, 197, 94, 0)',
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="text-green-400">24/7</span>
      </motion.div>
      
      <motion.p 
        className="text-text-light text-center font-medium text-lg mb-2 relative z-10"
        variants={textVariants}
      >
        Support Availability
      </motion.p>
      
      <motion.p 
        className="text-text-light/70 text-center text-sm relative z-10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: hovered ? 1 : 0, 
          height: hovered ? 'auto' : 0,
          marginTop: hovered ? 8 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        Our team is always ready to assist you
      </motion.p>
    </motion.div>
  );
};

const stats = [
  {
    icon: <FaHourglassHalf size={32} className="text-cyber-blue" />, // Experience
    label: "Years of Experience",
    value: 15,
    suffix: "",
    progressColor: "bg-cyber-blue",
  },
  {
    icon: <FaCheckCircle size={32} className="text-green-400" />, // Projects
    label: "Projects Delivered",
    value: 120,
    suffix: "+",
    progressColor: "bg-green-400",
  },
  {
    icon: <FaUsers size={32} className="text-navy-500" />, // Clients
    label: "Clients Satisfied",
    value: 60,
    suffix: "+",
    progressColor: "bg-navy-500",
  },
];

const AnimatedStatCard = ({ icon, label, value, suffix, progressColor, delay }) => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      let start = 0;
      const duration = 1.6; // seconds
      const startTime = performance.now();
      function animate(now) {
        const elapsed = (now - startTime) / 1000;
        const t = Math.min(elapsed / duration, 1);
        const current = Math.round(t * value);
        setCount(current);
        setProgress(t);
        if (t < 1) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center bg-white/10 rounded-2xl shadow-xl p-6 m-2 w-full max-w-xs min-w-[220px] group overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={controls}
      variants={{ visible: { opacity: 1, y: 0, scale: 1, transition: { delay } } }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.15)", borderColor: "#22d3ee" }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-2 rounded-2xl bg-cyber-blue opacity-20 blur-2xl z-0"
        animate={{ opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
      />
      {/* Icon */}
      <motion.div className="mb-3 z-10" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: delay + 0.1, type: "spring", stiffness: 200 }}>
        {icon}
      </motion.div>
      {/* Number */}
      <motion.div className="text-4xl font-extrabold text-white flex items-baseline z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.2 }}>
        {count}
        <span className="text-cyber-blue text-2xl font-bold ml-1">{suffix}</span>
      </motion.div>
      {/* Label */}
      <motion.div className="text-base text-white/80 font-medium mt-1 mb-2 z-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.3 }}>
        {label}
      </motion.div>
      {/* Progress Bar */}
      <motion.div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }}>
        <motion.div
          className={`h-full rounded-full ${progressColor}`}
          style={{ width: `${Math.round(progress * 100)}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.round(progress * 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-gradient-to-b from-navy-900/90 to-navy-800/80">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        ATLAS Defenders by the Numbers
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {stats.map((stat, i) => (
          <AnimatedStatCard key={stat.label} {...stat} delay={i * 0.18} />
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;