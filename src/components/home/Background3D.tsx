import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Background3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating network nodes
  const NetworkNode = ({ delay, x, y, size = 'w-3 h-3' }: { delay: number, x: string, y: string, size?: string }) => (
    <motion.div
      className={`absolute ${size} bg-accent/30 rounded-full border border-accent/50`}
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // Cybersecurity shield elements
  const SecurityShield = ({ delay, x, y, rotation = 0 }: { delay: number, x: string, y: string, rotation?: number }) => (
    <motion.div
      className="absolute w-8 h-8 opacity-20"
      style={{ left: x, top: y, transform: `rotate(${rotation}deg)` }}
      animate={{
        rotate: [rotation, rotation + 360],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    </motion.div>
  );

  // Data flow lines
  const DataFlow = ({ delay, startX, startY, endX, endY }: { delay: number, startX: string, startY: string, endX: string, endY: string }) => (
    <motion.div
      className="absolute"
      style={{ left: startX, top: startY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="200" height="100" className="overflow-visible">
        <motion.path
          d={`M 0 0 Q 100 50 200 100`}
          stroke="url(#dataGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0" />
            <stop offset="50%" stopColor="#2EC4B6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3E92CC" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );

  // Server rack representation
  const ServerRack = ({ delay, x, y }: { delay: number, x: string, y: string }) => (
    <motion.div
      className="absolute w-6 h-12 opacity-15"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0.1, 0.25, 0.1],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-primary/30 to-secondary/30 rounded-sm border border-primary/20">
        <div className="w-full h-1 bg-accent/40 mt-1 rounded-sm"></div>
        <div className="w-full h-1 bg-accent/40 mt-1 rounded-sm"></div>
        <div className="w-full h-1 bg-accent/40 mt-1 rounded-sm"></div>
      </div>
    </motion.div>
  );

  // Hexagonal network pattern
  const HexPattern = ({ delay, x, y, size = 40 }: { delay: number, x: string, y: string, size?: number }) => (
    <motion.div
      className="absolute opacity-10"
      style={{ left: x, top: y }}
      animate={{
        rotate: [0, 360],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 25,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon
          points="50,5 85,25 85,75 50,95 15,75 15,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
        />
        <polygon
          points="50,20 70,30 70,70 50,80 30,70 30,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-secondary"
        />
      </svg>
    </motion.div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-900/20 to-blue-800/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/10 to-indigo-900/20"></div>
      
      {/* Interactive mouse-following gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(46, 196, 182, 0.15), transparent 40%)`,
        }}
      />

      {/* Network nodes */}
      <NetworkNode delay={0} x="10%" y="20%" />
      <NetworkNode delay={1} x="85%" y="15%" />
      <NetworkNode delay={2} x="15%" y="70%" />
      <NetworkNode delay={3} x="90%" y="60%" />
      <NetworkNode delay={4} x="50%" y="25%" size="w-4 h-4" />
      <NetworkNode delay={5} x="25%" y="45%" />
      <NetworkNode delay={6} x="75%" y="80%" />
      <NetworkNode delay={7} x="60%" y="10%" />

      {/* Security shields */}
      <SecurityShield delay={0} x="20%" y="30%" rotation={0} />
      <SecurityShield delay={3} x="80%" y="40%" rotation={45} />
      <SecurityShield delay={6} x="40%" y="75%" rotation={90} />
      <SecurityShield delay={9} x="70%" y="20%" rotation={135} />

      {/* Data flow lines */}
      <DataFlow delay={0} startX="10%" startY="20%" endX="50%" endY="25%" />
      <DataFlow delay={2} startX="85%" startY="15%" endX="50%" endY="25%" />
      <DataFlow delay={4} startX="50%" startY="25%" endX="25%" endY="45%" />
      <DataFlow delay={6} startX="50%" startY="25%" endX="75%" endY="80%" />

      {/* Server racks */}
      <ServerRack delay={0} x="5%" y="50%" />
      <ServerRack delay={2} x="92%" y="35%" />
      <ServerRack delay={4} x="30%" y="85%" />
      <ServerRack delay={6} x="65%" y="5%" />

      {/* Hexagonal patterns */}
      <HexPattern delay={0} x="15%" y="10%" size={60} />
      <HexPattern delay={5} x="80%" y="70%" size={50} />
      <HexPattern delay={10} x="40%" y="60%" size={45} />
      <HexPattern delay={15} x="70%" y="30%" size={55} />
      <HexPattern delay={20} x="25%" y="80%" size={40} />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cybersecurity circuit patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="80" cy="20" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="20" cy="80" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="80" cy="80" r="2" fill="currentColor" className="text-accent"/>
              <path d="M20 20h60M20 80h60M20 20v60M80 20v60" stroke="currentColor" strokeWidth="0.3" className="text-secondary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
    </div>
  );
};

export default Background3D;