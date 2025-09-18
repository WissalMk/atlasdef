import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mohamed Larbi',
    position: 'CTO',
    company: 'Maroc Telecom',
    content: 'The ROI was immediate. Within the first month, the automated scanner detected critical vulnerabilities that our manual tests had missed. It is like having a security team working 24/7.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Aisha Benali',
    position: 'IT Director',
    company: 'Bank Al-Maghrib',
    content: 'Implementation took less than a day, and the results were eye-opening. The custom rules engine helped us enforce our security policies across all applications automatically.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Karim Belhassan',
    position: 'Security Director',
    company: 'Royal Air Maroc',
    content: 'We reduced our security testing time by 70% while increasing coverage. The detailed reports and remediation guidance made it easy for our developers to fix issues quickly.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Fatima Zahra',
    position: 'CISO',
    company: 'OCP Group',
    content: 'The false positive rate is remarkably low compared to other tools we\'ve used. The AI-powered verification saves our team countless hours of manual review.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Youssef Amrani',
    position: 'Application Security Manager',
    company: 'Attijariwafa Bank',
    content: 'Perfect for our compliance needs. The automated scans help us maintain PCI DSS compliance with minimal effort. It\'s been a game-changer for our security posture.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Rachid Bennani',
    position: 'CTO',
    company: 'BMCE Bank',
    content: 'The customizable dashboard helps us prioritize vulnerabilities effectively. Our security team now focuses on strategic issues instead of routine scanning.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Laila Benkirane',
    position: 'Security Operations Manager',
    company: 'Inwi Telecom',
    content: 'As an insurance company, security is paramount. This tool\'s continuous monitoring gives us confidence that our customer data is protected around the clock.',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Omar Tazi',
    position: 'IT Security Manager',
    company: 'Saham Assurance',
    content: 'We evaluated several solutions, but this one stood out for its ease of use and comprehensive coverage. The automated weekly reports keep our management informed without overwhelming them.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);
  const row1TimeoutRef = useRef<number | null>(null);
  const row2TimeoutRef = useRef<number | null>(null);

  // Motion values to track current positions
  const row1X = useMotionValue(0);
  const row2X = useMotionValue(-50 * 16 * testimonials.slice(4).length);

  // Animation speeds (pixels per frame)
  const row1Speed = 32 / 60; // 32px/second ÷ 60fps
  const row2Speed = 32 / 60; // Same speed for both rows

  // Total distances for infinite loop
  const row1TotalDistance = 50 * 16 * testimonials.length;
  const row2TotalDistance = 50 * 16 * testimonials.slice(4).length;

  // Continuous animation using useAnimationFrame
  useAnimationFrame(useCallback(() => {
    if (!isRow1Paused) {
      const currentX1 = row1X.get();
      const newX1 = currentX1 - row1Speed;
      
      // Reset position for infinite loop
      if (newX1 <= -row1TotalDistance) {
        row1X.set(0);
      } else {
        row1X.set(newX1);
      }
    }

    if (!isRow2Paused) {
      const currentX2 = row2X.get();
      const newX2 = currentX2 + row2Speed;
      
      // Reset position for infinite loop
      if (newX2 >= 0) {
        row2X.set(-row2TotalDistance);
      } else {
        row2X.set(newX2);
      }
    }
  }, [isRow1Paused, isRow2Paused, row1X, row2X, row1Speed, row2Speed, row1TotalDistance, row2TotalDistance]));

  const handleRow1MouseEnter = () => {
    setIsRow1Paused(true);
    if (row1TimeoutRef.current) {
      clearTimeout(row1TimeoutRef.current);
    }
  };

  const handleRow1MouseLeave = () => {
    if (row1TimeoutRef.current) {
      clearTimeout(row1TimeoutRef.current);
    }
    row1TimeoutRef.current = setTimeout(() => {
      setIsRow1Paused(false);
    }, 3000);
  };

  const handleRow2MouseEnter = () => {
    setIsRow2Paused(true);
    if (row2TimeoutRef.current) {
      clearTimeout(row2TimeoutRef.current);
    }
  };

  const handleRow2MouseLeave = () => {
    if (row2TimeoutRef.current) {
      clearTimeout(row2TimeoutRef.current);
    }
    row2TimeoutRef.current = setTimeout(() => {
      setIsRow2Paused(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (row1TimeoutRef.current) {
        clearTimeout(row1TimeoutRef.current);
      }
      if (row2TimeoutRef.current) {
        clearTimeout(row2TimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section - Styled like "Trusted by Organizations WorldWide" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            What Our Clients
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
            Hear how developers, tech leads and project managers rely on Atlas Defenders to secure their applications and infrastructure
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* First Row - Right to Left */}
          <motion.div
            className="flex space-x-6 mb-6"
            style={{ x: row1X }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 select-none cursor-default"
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={handleRow1MouseEnter}
                onMouseLeave={handleRow1MouseLeave}
              >
                <div className="mb-6">
                  <p className="text-gray-700 text-base leading-relaxed font-light">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full bg-primary/20 flex items-center justify-center"><svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></div>`;
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-primary text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Left to Right */}
          <motion.div
            className="flex space-x-6"
            style={{ x: row2X }}
          >
            {[...testimonials.slice(4), ...testimonials.slice(4), ...testimonials.slice(4)].map((testimonial, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 select-none cursor-default"
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={handleRow2MouseEnter}
                onMouseLeave={handleRow2MouseLeave}
              >
                <div className="mb-6">
                  <p className="text-gray-700 text-base leading-relaxed font-light">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mr-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full bg-accent/20 flex items-center justify-center"><svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></div>`;
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-accent text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;