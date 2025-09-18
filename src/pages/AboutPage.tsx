import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle as CircleCheck, GraduationCap, Users, Clock, Globe } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Atlas Defenders';
  }, []);

  const teamMembers = [
    {
      name: 'Omar Benali',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'With over 15 years of experience in cybersecurity, Omar founded Atlas Defenders to help organizations in Morocco and across North Africa strengthen their digital security posture.'
    },
    {
      name: 'Leila Amrani',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Leila brings 12+ years of network security expertise with a focus on cloud architecture and advanced security implementations for enterprise clients.'
    },
    {
      name: 'Karim El-Fassi',
      position: 'Security Solutions Director',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Karim specializes in designing comprehensive security architectures for organizations across various industries with a focus on compliance and risk management.'
    },
    {
      name: 'Nadia Tazi',
      position: 'Cloud Infrastructure Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Nadia is an expert in cloud infrastructure with deep experience in multi-cloud environments, focusing on secure cloud deployments and migrations.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in everything we do, ensuring that all solutions are designed with security as the foundation.'
    },
    {
      icon: CircleCheck,
      title: 'Integrity',
      description: 'We operate with transparency and honesty, providing clients with accurate information and realistic assessments.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'We invest in ongoing education and certification to stay ahead of evolving threats and technologies.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We view ourselves as an extension of our clients\' teams, working collaboratively to achieve security goals.'
    },
    {
      icon: Clock,
      title: 'Responsiveness',
      description: 'We understand the critical nature of security issues and respond rapidly to client needs and emerging threats.'
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'We bring global security standards with deep understanding of local business environments and challenges.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-6"
          >
            About Atlas Defenders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Leading IT and cybersecurity services provider in Morocco,
            protecting organizations with enterprise-grade security solutions.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-text-muted mb-4">
                Founded in 2014, Atlas Defenders emerged from a vision to bring enterprise-grade IT security solutions to organizations across Morocco and North Africa. With cybersecurity threats growing in sophistication and frequency, we recognized the need for specialized expertise to help local businesses protect their digital assets.
              </p>
              <p className="text-text-muted mb-4">
                What began as a small team of security consultants has grown into a comprehensive IT and cybersecurity services provider with expertise across network infrastructure, cloud security, and advanced threat protection. Today, we serve clients ranging from large enterprises to government agencies, educational institutions, and small businesses.
              </p>
              <p className="text-text-muted">
                Our deep understanding of the local business environment, combined with global security expertise, allows us to develop tailored solutions that address the unique challenges faced by organizations in our region.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Atlas Defenders team meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-text-muted">
                To protect and strengthen organizations' digital infrastructure through expert cybersecurity services, 
                enabling businesses to operate securely in an increasingly connected world. We aim to be a trusted 
                security partner that helps clients navigate complex security challenges with confidence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-text-muted">
                To be the leading cybersecurity provider in North Africa, known for our technical excellence, 
                client-focused approach, and commitment to protecting digital assets. We envision a future where 
                organizations of all sizes have access to enterprise-grade security solutions that enable 
                innovation and growth without compromise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              These principles guide how we work with clients, partners, and each other, shaping our approach to cybersecurity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-text-muted">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              Meet the experienced professionals leading Atlas Defenders and driving our mission forward.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.position}</p>
                  <p className="text-text-muted">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              We maintain a wide range of industry certifications to ensure we deliver the highest standards of technical expertise.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['CISSP', 'CEH', 'CISM', 'CCNA', 'AWS Solutions Architect', 'Azure Security Engineer', 'CCNP', 'Fortinet NSE', 'Palo Alto PCNSE', 'CompTIA Security+', 'ITIL', 'ISO 27001'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
              >
                <p className="font-medium text-primary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            Ready to Work with Atlas Defenders?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Contact us today to discuss how we can help secure your organization's digital infrastructure
            and protect your most valuable assets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="btn bg-accent hover:bg-accent/90 text-white">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;