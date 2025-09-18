import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Diagonal Lines Background - CrowdStrike Style with Home Page Colors */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white"
          >
            Ready to enhance your organization's security posture?
          </motion.h2>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button - Using Secondary Color */}
            <Link
              to="/contact"
              className="group inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/services"
              className="group inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold text-base transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Our team of experts is ready to help you identify vulnerabilities and implement robust security solutions tailored to your organization's needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;