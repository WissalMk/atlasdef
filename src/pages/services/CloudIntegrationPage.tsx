import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Check, ArrowRight, Globe, Zap, Shield, Users, Layers, GitBranch, Cloud, RefreshCw, Database } from 'lucide-react';

// --- FINALIZED COLOR PALETTE ---
const colors = {
  darkBlue: '#003459',
  mediumBlue: '#007ea7',
  lightBlue: '#00a8e8', // Bleu Ciel
  yellow: '#fdc500',
  white: '#FFFFFF',
};

// --- 1. HERO SECTION (LIGHT THEME) ---
const HeroSection = () => {
    const dashboards = [
        { 
            src: "/Logos/AWS Dashboard.png", 
            alt: "AWS Dashboard", 
            className: "top-0 left-0 lg:w-4/5 z-10",
            yAnimate: [0, -15, 0],
            duration: 5
        },
        { 
            src: "/Logos/Google Cloud Dashboard.png", 
            alt: "GCP Dashboard", 
            className: "top-1/3 right-0 lg:w-3/4 z-20",
            yAnimate: [0, 10, 0],
            duration: 6
        },
        { 
            src: "/Logos/AZURE Dashboard.png", 
            alt: "Azure Dashboard", 
            className: "bottom-0 -left-10 lg:w-4/5 z-0",
            yAnimate: [0, -10, 0],
            duration: 7
        },
        { 
            src: "/Logos/OCI Dashboard.png", 
            alt: "OCI Dashboard", 
            className: "bottom-1/4 -right-1/4 lg:w-1/2 z-10 opacity-70",
            yAnimate: [0, 5, 0],
            duration: 4
        },
    ];

    return (
        <section style={{ backgroundColor: colors.white }} className="relative min-h-screen overflow-hidden flex items-center">
             <div className="container mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ color: colors.darkBlue }}
                            className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5"
                        >
                            Architecting Your Cloud Future.
                            <span style={{ color: colors.yellow }} className="block">
                                Securely Delivered.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            style={{ color: colors.darkBlue }}
                            className="text-lg opacity-70 max-w-xl mx-auto lg:mx-0 mb-10"
                        >
                            We integrate, optimize, and secure cloud ecosystems for enterprises, ISPs, and governments — with precision, scalability, and unwavering trust.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                to="/contact"
                                className="group relative inline-block text-base font-bold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                                style={{ backgroundColor: colors.lightBlue, color: colors.white }}
                            >
                                Start Your Cloud Journey
                            </Link>
                            <Link
                                to="/contact"
                                className="relative inline-block text-base font-bold px-8 py-4 rounded-md border-2 transition-all duration-300 hover:bg-blue-50"
                                style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}
                            >
                                Speak to a Cloud Architect
                            </Link>
                        </motion.div>
                    </div>

                    <div className="relative h-[550px] w-full hidden lg:block">
                         {dashboards.map((dash, index) => (
                            <motion.div
                                key={dash.alt}
                                className={`absolute ${dash.className}`}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ 
                                    opacity: dash.alt === "OCI Dashboard" ? 0.7 : 1, 
                                    y: 0,
                                    scale: 1,
                                 }}
                                transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.img
                                    src={dash.src}
                                    alt={dash.alt}
                                    className="rounded-lg shadow-2xl w-full"
                                    style={{ 
                                        boxShadow: `0 25px 50px -12px rgba(0, 52, 89, 0.25)`,
                                        border: `1px solid rgba(0, 168, 232, 0.1)`
                                    }}
                                    animate={{ y: dash.yAnimate }}
                                    transition={{
                                        duration: dash.duration,
                                        repeat: Infinity,
                                        repeatType: 'mirror',
                                        ease: 'easeInOut'
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 2. CAPABILITIES SECTION (LIGHT THEME - NEW DESIGN) ---
const CapabilitiesSection = () => {
    const capabilities = [
        { icon: <Cloud className="w-10 h-10" />, title: "Cloud Migration Excellence", description: "Seamless migration to AWS, Azure, GCP, OCI, or hybrid." },
        { icon: <Layers className="w-10 h-10" />, title: "Multi-Cloud Strategy", description: "Resilient, scalable, cost-optimized deployments." },
        { icon: <RefreshCw className="w-10 h-10" />, title: "Hybrid Cloud Enablement", description: "Secure, agile public-private cloud integration." },
        { icon: <Shield className="w-10 h-10" />, title: "Cloud-Native Security", description: "Zero-Trust, SOC-ready monitoring, compliance-first." },
        { icon: <GitBranch className="w-10 h-10" />, title: "Automation & DevOps", description: "CI/CD pipelines, IaC, Kubernetes/Docker." },
        { icon: <Database className="w-10 h-10" />, title: "Business Continuity", description: "Enterprise-grade disaster recovery & intelligent backups." }
    ];

    const DotPattern = ({ className }) => (
        <div 
            aria-hidden="true"
            className={`absolute top-1/2 -translate-y-1/2 w-32 h-64 ${className}`}
            style={{
                backgroundImage: `radial-gradient(${colors.mediumBlue} 1.5px, transparent 1.5px)`,
                backgroundSize: '16px 16px',
                opacity: 0.3
            }}
        />
    );

    return (
        <section style={{ backgroundColor: colors.white }} className="py-24 relative overflow-hidden">
            <DotPattern className="-left-10" />
            <DotPattern className="-right-10" />
            <div className="container mx-auto px-4 relative z-10">
                <h2 style={{ color: colors.darkBlue }} className="text-3xl lg:text-4xl font-bold text-center mb-16">Our Cloud Integration Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div 
                                className="relative inline-flex items-center justify-center h-24 w-24 mb-6 rounded-full"
                                style={{ backgroundColor: 'rgba(0, 168, 232, 0.08)'}}
                            >
                                <div style={{ color: colors.lightBlue }}>
                                    {cap.icon}
                                </div>
                            </div>
                            <h3 style={{ color: colors.darkBlue }} className="text-xl font-bold mb-3">{cap.title}</h3>
                            <p style={{ color: colors.darkBlue }} className="opacity-70 leading-relaxed">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 3. DIFFERENCE SECTION (DARK THEME) ---
const DifferenceSection = () => {
    const differences = [
        { icon: <Globe className="w-8 h-8 text-white" />, title: "Global Scale, Local Expertise", description: "Delivering for multinational giants with local insights." },
        { icon: <Zap className="w-8 h-8 text-white" />, title: "Engineered for Scale", description: "Architectures built to support millions of users without disruption." },
        { icon: <Shield className="w-8 h-8 text-white" />, title: "Security as Standard", description: "Solutions hardened against modern threats; compliance integrated." },
        { icon: <Users className="w-8 h-8 text-white" />, title: "Partnership, Not Provision", description: "Tailored solutions, full transparency, executive-level reporting." },
        { icon: <Check className="w-8 h-8 text-white" />, title: "Proven in Action", description: "Validated by industry certifications and leading client trust." }
    ];

    return (
        <section style={{ backgroundColor: colors.darkBlue }} className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">The Atlas Defenders Difference</h2>
                <div className="max-w-4xl mx-auto">
                    {differences.map((diff, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-6 mb-8"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="flex-shrink-0 p-4 rounded-full text-white" style={{ backgroundColor: colors.mediumBlue }}>
                                {diff.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{diff.title}</h3>
                                <p className="text-white opacity-80">{diff.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. TECHNOLOGIES & PARTNERSHIPS SECTION (LIGHT THEME) ---
const TechPartnershipsSection = () => {
    const logos = [
        { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
        { name: "Azure", url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
        { name: "Google Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" },
        { name: "Oracle Cloud", url: "/Logos/oci_logo.png" },
        { name: "Hostinger", url: "/Logos/hotinger_logo.png" },
    ];

    return (
        <section style={{ backgroundColor: colors.white }} className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 
                        className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4"
                        style={{ color: colors.darkBlue }}
                    >
                        Integrated with the Leading Cloud Ecosystem
                    </h2>
                    <p className="text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: colors.mediumBlue, opacity: 0.9 }}>
                        Our solutions are built on the most powerful and reliable cloud platforms in the world, ensuring scalability and performance.
                    </p>
                </div>
                <div className="flex justify-center flex-wrap gap-x-16 gap-y-12 items-center">
                    {logos.map((logo) => (
                        <motion.div
                            key={logo.name}
                            whileHover={{ scale: 1.1 }}
                            className="transition-all duration-300"
                        >
                            <img 
                                src={logo.url} 
                                alt={`${logo.name} logo`} 
                                className={`object-contain ${logo.name === 'Hostinger' ? 'h-16 lg:h-20' : 'h-10 lg:h-12'}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 5. CERTIFICATIONS SECTION (LIGHT THEME) ---
const CertificationsSection = () => {
    const certifications = [
        { name: "AWS Certified Solution Architect Professional", url: "/Certifications/AWS Certified Solution Architect Professional.png" },
        { name: "Microsoft Certified: Azure Administrator Associate", url: "/Certifications/Az 104.png" },
        { name: "Google Cloud Associate Cloud Engineer", url: "/Certifications/Associate Cloud Engineer Certification.png" },
        { name: "Google Cloud Professional Cloud Architect", url: "/Certifications/Professional Cloud Architect Certification.png" },
        { name: "Certified Kubernetes Administrator", url: "/Certifications/Certified Kubernetes Administrator.png" },
    ];

    return (
        <section style={{ backgroundColor: colors.white }} className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 
                        className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4"
                        style={{ color: colors.darkBlue }}
                    >
                        Certified Excellence
                    </h2>
                    <p className="text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: colors.mediumBlue, opacity: 0.9 }}>
                        Validated by the industry's most respected credentials, our team's expertise is the bedrock of your success.
                    </p>
                </div>
                <div className="flex justify-center flex-wrap gap-12 items-center">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.name}
                            className="text-center transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="relative h-32 w-32 mx-auto mb-4">
                                <img 
                                    src={cert.url} 
                                    alt={`${cert.name} badge`} 
                                    className="h-full w-full object-contain rounded-full shadow-lg"
                                />
                            </div>
                            <p style={{ color: colors.darkBlue }} className="font-semibold max-w-xs">{cert.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 6. TESTIMONIALS SECTION ---
const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Seamless hybrid cloud integration across AWS, Azure, and on-prem systems — delivering 40% faster transaction processing and full regulatory compliance.",
            title: "CTO, Global Bank",
            color: "#003459"
        },
        {
            quote: "HIPAA-compliant, secure cloud infrastructure for patient data — fully encrypted at rest and in transit.",
            title: "Head of IT, Public Hospital",
            color: "#007ea7"
        },
        {
            quote: "Scalable cloud platforms to support 10,000+ simultaneous students and researchers accessing virtual labs.",
            title: "CIO, National Research University",
            color: "#00a8e8"
        },
        {
            quote: "Carrier-grade cloud solutions supporting millions of concurrent users with 99.999% uptime.",
            title: "CTO, Major African ISP",
            color: "#E8A800" // Darker Yellow
        },
        {
            quote: "Flexible cloud infrastructure that scales automatically with business growth.",
            title: "IT Director, Fortune 500 Enterprise",
            color: "#005A8D"
        },
        {
            quote: "Real-time risk monitoring and zero-trust security architecture for sensitive financial data.",
            title: "CIO, International Investment Firm",
            color: "#003459"
        },
    ];

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section style={{ backgroundColor: colors.white }} className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 
                        className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4"
                        style={{ color: colors.darkBlue }}
                    >
                        Voices of Transformation
                    </h2>
                    <p className="text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: colors.mediumBlue, opacity: 0.9 }}>
                        Discover how we've empowered organizations to achieve their cloud ambitions.
                    </p>
                </div>
                <div className="relative">
                     <motion.div 
                        className="flex gap-8"
                        animate={{
                            x: ['-0%', '-100%'],
                            transition: {
                                ease: 'linear',
                                duration: 40, // Adjusted for content length
                                repeat: Infinity,
                            }
                        }}
                     >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div key={index} style={{ backgroundColor: testimonial.color }} className="flex-shrink-0 w-[380px] h-[320px] p-8 rounded-2xl shadow-xl text-white flex flex-col justify-between">
                                <p className="text-lg leading-relaxed font-light">"{testimonial.quote}"</p>
                                <div className="mt-4 border-t border-white/20 pt-4">
                                    <p className="font-bold text-lg">{testimonial.title}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


// --- MAIN PAGE COMPONENT ---
const CloudIntegrationPage = () => {
    return (
        <div style={{ backgroundColor: colors.white }}>
            <HeroSection />
            <CapabilitiesSection />
            <DifferenceSection />
            <TechPartnershipsSection />
            <CertificationsSection />
            <TestimonialsSection />
        </div>
    );
};

export default CloudIntegrationPage;
