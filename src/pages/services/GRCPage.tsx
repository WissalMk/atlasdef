import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    CheckCircle,
    ArrowRight,
    Users,
    Clock,
    Globe,
    Scale,
    Award,
    Target,
    BarChart3,
    FileText,
    AlertTriangle,
    Settings,
    Zap,
    Star,
    Play,
    Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GRCPage = () => {
    useEffect(() => {
        document.title = 'GRC Services - Governance, Risk & Compliance | Atlas Defenders';
    }, []);

    const [activeFeature, setActiveFeature] = useState(0);

    // Key Features
    const features = [
        {
            title: 'Enterprise Governance',
            description: 'Strategic oversight and organizational leadership frameworks for sustainable growth.',
            icon: Scale,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center'
        },
        {
            title: 'Risk Management',
            description: 'Comprehensive risk identification, assessment, and mitigation strategies.',
            icon: AlertTriangle,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center'
        },
        {
            title: 'Compliance Excellence',
            description: 'Regulatory adherence and standards implementation across all frameworks.',
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center'
        }
    ];

    // Service Cards
    const services = [
        {
            title: 'GRC Strategy & Assessment',
            description: 'Comprehensive evaluation and strategic roadmap development',
            features: ['Current State Assessment', 'Gap Analysis', 'Strategic Planning', 'ROI Analysis'],
            duration: '4-6 weeks',
            icon: Target
        },
        {
            title: 'Compliance Implementation',
            description: 'End-to-end compliance program implementation',
            features: ['Regulatory Mapping', 'Policy Development', 'Control Implementation', 'Training Programs'],
            duration: '8-12 weeks',
            icon: CheckCircle
        },
        {
            title: 'Risk Framework',
            description: 'Enterprise risk management capabilities',
            features: ['Risk Assessment', 'Risk Register', 'Mitigation Planning', 'Risk Analytics'],
            duration: '6-10 weeks',
            icon: Shield
        },
        {
            title: 'Governance Optimization',
            description: 'Board oversight and governance enhancement',
            features: ['Board Review', 'Committee Structure', 'Decision Processes', 'Performance Metrics'],
            duration: '6-8 weeks',
            icon: Scale
        }
    ];

    // Statistics
    const stats = [
        { value: '500+', label: 'Organizations Served' },
        { value: '99.7%', label: 'Compliance Success Rate' },
        { value: '50+', label: 'Regulatory Frameworks' },
        { value: '24/7', label: 'Expert Support' }
    ];

    return (
        <>
            {/* Hero Section - UniFi Style */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                <Award className="w-4 h-4 mr-2" />
                                Enterprise GRC Solutions
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Governance, Risk & 
                                <span className="text-blue-600"> Compliance</span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Transform your organization with comprehensive GRC solutions that ensure 
                                regulatory compliance, mitigate risks, and strengthen governance frameworks.
                            </p>

                            {/* Features List */}
                            <div className="space-y-4">
                                {['Strategic Governance Frameworks', 'Enterprise Risk Management', 'Regulatory Compliance'].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-center"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                                    <Play className="w-5 h-5 mr-2" />
                                    Watch Demo
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Content - Feature Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Main Feature Card */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">GRC Dashboard</h3>
                                    <div className="flex items-center text-green-600">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        <span className="text-sm font-medium">Live</span>
                                    </div>
                                </div>

                                {/* Feature Tabs */}
                                <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                                    {features.map((feature, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFeature(index)}
                                            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                                activeFeature === index
                                                    ? 'bg-white text-blue-600 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            {feature.title.split(' ')[0]}
                                        </button>
                                    ))}
                                </div>

                                {/* Active Feature Content */}
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden">
                                        <img
                                            src={features[activeFeature].image}
                                            alt={features[activeFeature].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            {features[activeFeature].title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {features[activeFeature].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">99.7%</div>
                                        <div className="text-sm text-gray-600">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive GRC Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our integrated approach covers all aspects of governance, risk management, 
                            and compliance to provide complete organizational resilience.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            {service.duration}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                                        Learn More
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your GRC Strategy?
                        </h2>
                        
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Join hundreds of organizations that trust Atlas Defenders for their 
                            governance, risk management, and compliance needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
                            >
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            
                            <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                                <Download className="w-5 h-5 mr-2" />
                                Download Brochure
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 pt-8 border-t border-blue-500">
                            <p className="text-blue-200 mb-6">Trusted by industry leaders</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                                {['Fortune 500', 'Global Banks', 'Healthcare', 'Government', 'Technology'].map((item) => (
                                    <div key={item} className="text-white font-medium">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default GRCPage;