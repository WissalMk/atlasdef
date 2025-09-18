import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Clock, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  onComplete?: () => void;
}

const Counter = ({ end, duration = 2.5, suffix = '', prefix = '', onComplete }: CounterProps) => {
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
        
        const currentCount = Math.floor(progress * (end - startCount) + startCount);
        
        setCount(currentCount);
        
        if (progress >= 1) {
          setCount(end);
          setIsComplete(true);
          onComplete?.();
        } else {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration, onComplete, isComplete]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-accent">
      {prefix}{count}{suffix}
    </span>
  );
};

const CounterSection = () => {
  const counters = [
    {
      id: 'experience',
      icon: Clock,
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Protecting organizations across Morocco'
    },
    {
      id: 'projects',
      icon: Target,
      value: 200,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful security implementations'
    },
    {
      id: 'clients',
      icon: TrendingUp,
      value: 150,
      suffix: '+',
      label: 'Clients Served',
      description: 'Trusted by leading organizations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Background Pattern - Same as your image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content (Exactly like your image) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-300 mb-4 font-medium">Company Statistics</p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Trusted by Organizations<br />
              Across Morocco
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our track record speaks for itself. We've helped hundreds of organizations strengthen their cybersecurity posture.
            </p>
            
            <Link 
              to="/contact"
              className="inline-flex items-center text-white text-lg font-medium hover:text-accent transition-colors duration-300"
            >
              Learn More 
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Right Side - Statistics Grid (Exactly like your image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counters.map((counter, index) => {
              const Icon = counter.icon;
              
              return (
                <motion.div
                  key={counter.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Icon Circle - White background with colored icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Counter Display */}
                  <div className="mb-4">
                    <Counter 
                      end={counter.value} 
                      suffix={counter.suffix}
                      duration={2.5}
                    />
                  </div>
                  
                  {/* Labels */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {counter.label}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {counter.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;