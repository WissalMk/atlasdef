import { motion } from 'framer-motion';
import { Users, Headphones, DollarSign } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Users,
      title: 'Highly Expert Team',
      description: 'We provide the most responsive and functional cybersecurity solutions with certified professionals.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Service',
      description: 'We provide the most responsive and functional IT support with round-the-clock availability.',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'We provide the most responsive and functional IT solutions at competitive market rates.',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="relative -mt-20 z-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100"
              >
                {/* Professional Icon Design - Exact Atek Style */}
                <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <Icon size={32} className={feature.iconColor} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;