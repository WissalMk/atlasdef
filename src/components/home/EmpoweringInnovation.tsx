import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const EmpoweringInnovation = () => {
    const blocks = [
        {
            id: 1,
            title: 'Cybersecurity Operations',
            subtitle: 'Advanced protection delivered through offensive and defensive security, SOC-as-a-Service, SIEM, and Zero Trust architecture.',
            image: '/Logos/cybersecurity_image.jpg',
            imagePosition: 'left',
            features: [
                '24/7 Security Operations Center monitoring',
                'Threat detection and incident response',
                'Vulnerability assessments and penetration testing',
                'Zero Trust architecture implementation',
                'Compliance and risk management'
            ]
        },
        {
            id: 2,
            title: 'IT Infrastructure',
            subtitle: 'From data center builds and hybrid cloud to virtualization, networking, and resilient architectures — engineered for uptime.',
            image: '/Logos/Datacenter1.jpg',
            imagePosition: 'right',
            features: [
                'Data center design and implementation',
                'Hybrid cloud and multi-cloud strategies',
                'Network architecture and optimization',
                'Virtualization and containerization',
                'High availability and disaster recovery'
            ]
        },
        {
            id: 3,
            title: 'Business Software',
            subtitle: 'Tailored ERP, CRM, ITSM, HRMS, and collaboration platforms that align with your business goals and scale as you grow.',
            image: '/Logos/erp_background_image.png',
            imagePosition: 'left',
            features: [
                'Enterprise Resource Planning (ERP) systems',
                'Customer Relationship Management (CRM)',
                'IT Service Management (ITSM) platforms',
                'Human Resource Management Systems (HRMS)',
                'Collaboration and productivity tools'
            ]
        },
        {
            id: 4,
            title: 'Custom Development',
            subtitle: 'Modern web and mobile app development — secure, scalable, and optimized for user experience and performance.',
            image: '/Logos/development_background_image.jpg',
            imagePosition: 'right',
            features: [
                'Full-stack web application development',
                'Mobile app development (iOS & Android)',
                'API development and integration',
                'Cloud-native application architecture',
                'DevOps and CI/CD pipeline implementation'
            ]
        },
        {
            id: 5,
            title: 'Training & Education',
            subtitle: 'Hands-on learning paths in cybersecurity, cloud, and systems — designed for upskilling teams with real-world expertise.',
            image: '/Logos/itsupport_background_image.jpg',
            imagePosition: 'left',
            features: [
                'Cybersecurity certification training',
                'Cloud platform expertise development',
                'Technical skills bootcamps',
                'Leadership and management training',
                'Custom curriculum development'
            ]
        },
        {
            id: 6,
            title: 'Technology Consulting',
            subtitle: 'From audits to strategy — actionable insights, architecture planning, and compliance guidance to drive innovation.',
            image: '/Logos/Technology consultation.jpg',
            imagePosition: 'right',
            features: [
                'Technology strategy and roadmap planning',
                'Security audits and compliance assessments',
                'Digital transformation consulting',
                'Architecture design and optimization',
                'Vendor selection and procurement guidance'
            ]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Sophisticated Background Elements */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/30 rounded-full blur-3xl"></div>
                </div>
                {/* Professional Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-black">Empowering Innovation </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                            & Protection
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Comprehensive solutions spanning cybersecurity, infrastructure, development, and strategic consulting —
                        designed for IT professionals and business leaders who demand excellence.
                    </p>
                </motion.div>

                {/* Service Items */}
                <div className="space-y-24">
                    {blocks.map((block, index) => (
                        <div key={block.id} className={`grid lg:grid-cols-2 gap-16 items-center ${block.imagePosition === 'right' ? '' : ''
                            }`}>
                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: block.imagePosition === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className={block.imagePosition === 'right' ? 'lg:order-2' : ''}
                            >
                                <img
                                    src={block.image}
                                    alt={block.title}
                                    className="w-full h-96 object-cover rounded-3xl transition-all duration-500 transform hover:scale-[1.03] shadow-2xl"
                                />
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                                initial={{ opacity: 0, x: block.imagePosition === 'left' ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={`space-y-6 ${block.imagePosition === 'right' ? 'lg:order-1' : ''}`}
                            >
                                <h3 className="text-3xl font-bold text-gray-900">{block.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{block.subtitle}</p>
                                <ul className="space-y-3">
                                    {block.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmpoweringInnovation;