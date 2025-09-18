import { motion } from 'framer-motion';
import { Network, Shield, Wifi, Server, Cloud, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'network',
    icon: Network,
    title: 'Network Configuration',
    description: 'Expert implementation of Cisco, Juniper, Fortinet, and HP Aruba network solutions.',
    link: '/services#network'
  },
  {
    id: 'firewall',
    icon: Shield,
    title: 'Firewall & Security',
    description: 'Comprehensive protection with Fortinet, Palo Alto, Sophos, and Cisco security architectures.',
    link: '/services#firewall'
  },
  {
    id: 'wireless',
    icon: Wifi,
    title: 'Wireless Solutions',
    description: 'High-performance wireless networks with enterprise-grade access points and controllers.',
    link: '/services#wireless'
  },
  {
    id: 'virtualization',
    icon: Server,
    title: 'Virtualization Solutions',
    description: 'Robust virtualization platforms including Proxmox, XCP-ng, VMware ESXi, and Hyper-V.',
    link: '/services#virtualization'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless integration with Azure, AWS, Google Cloud, and Oracle Cloud Infrastructure.',
    link: '/services#cloud'
  },
  {
    id: 'monitoring',
    icon: LineChart,
    title: 'Monitoring & Observability',
    description: 'Comprehensive visibility with Zabbix, Grafana, Prometheus, and other monitoring tools.',
    link: '/services#monitoring'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { icon: Icon, title, description, link } = service;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-text-muted mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group-hover:translate-x-1 duration-300">
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2 className="mb-4">Our Comprehensive Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide a wide range of IT and cybersecurity services to help organizations protect their digital assets and optimize their infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;