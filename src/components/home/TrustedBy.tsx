import { motion } from 'framer-motion';

const TrustedBy = () => {
  const trustedCompanies = [
    { name: 'Maroc Telecom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Maroc_Telecom_logo.svg/2560px-Maroc_Telecom_logo.svg.png' },
    { name: 'Bank Al-Maghrib', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bank_Al-Maghrib_logo.svg/2560px-Bank_Al-Maghrib_logo.svg.png' },
    { name: 'Royal Air Maroc', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Royal_Air_Maroc_Logo.svg/2560px-Royal_Air_Maroc_Logo.svg.png' },
    { name: 'ONCF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ONCF_logo.svg/2560px-ONCF_logo.svg.png' },
    { name: 'OCP Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/OCP_Group_logo.svg/2560px-OCP_Group_logo.svg.png' },
    { name: 'BMCE Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BMCE_Bank_logo.svg/2560px-BMCE_Bank_logo.svg.png' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Organizations Across Morocco
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Leading companies and institutions trust Atlas Defenders to protect their digital infrastructure and ensure business continuity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 group"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-primary/5 rounded-full px-6 py-3 border border-primary/10">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-primary font-medium">Protecting 150+ organizations nationwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;