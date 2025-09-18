import { motion } from 'framer-motion';

const WaveTransition = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Wave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-24 lg:h-28"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(15, 44, 89, 0.1)" />
              <stop offset="50%" stopColor="rgba(46, 196, 182, 0.1)" />
              <stop offset="100%" stopColor="rgba(62, 146, 204, 0.1)" />
            </linearGradient>
          </defs>
          
          {/* Animated Wave Path */}
          <motion.path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Secondary Wave for Depth */}
          <motion.path
            d="M0,80 C360,40 720,100 1080,80 C1200,70 1320,90 1440,80 L1440,120 L0,120 Z"
            fill="rgba(248, 249, 250, 0.8)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveTransition;