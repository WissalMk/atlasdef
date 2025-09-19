import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Zap, Code, Users, Briefcase, BarChart, Award, Layers,
  LayoutTemplate, Globe, Server, GraduationCap, LifeBuoy, Database, BarChart2,
  CheckCircle, XCircle, ChevronDown, ChevronLeft, ChevronRight, Star, Quote
} from 'lucide-react';

// Helper for Section Titles
const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{children}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const TechnologyGrid = ({ technologies }) => {
  return (
    <div className="space-y-12">
      {Object.entries(technologies).map(([category, logos], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Category Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-blue-600 mr-4"></div>
            {category}
            <div className="w-8 h-0.5 bg-blue-600 ml-4"></div>
          </h3>

          {/* Technology Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
            {logos.map((logo, logoIndex) => (
              <motion.div
                key={logoIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: logoIndex * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 border border-gray-100">
                  <img
                    src={logo}
                    alt="Technology logo"
                    className="max-h-12 max-w-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Accordion for feature groups
const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => (
  <div className="border-t border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-3 text-blue-600" />
        <span className="font-semibold">{title}</span>
      </div>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
    >
      <div className="pb-4 pl-8">
        {children}
      </div>
    </motion.div>
  </div>
);

// Testimonials Component with World Map Background
const TestimonialsCarousel = () => {
  const [currentPair, setCurrentPair] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Solutions",
      website: "techstart.com",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "Excellent job on the template, and good technical support. I appreciate your flexibility and ability to work with me to make sure my issues were resolved on a spot. Kudos!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "FinanceFlow Inc",
      website: "financeflow.net",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "The customer support is amazing! I emailed and within 5 minutes, support jumped straight in and 20 minutes later my site was working perfectly! Thank you so much"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthHub Agency",
      website: "growthhub.com",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "Outstanding service and professional team. The SEO optimization boosted our traffic significantly. Their technical expertise is truly impressive and reliable."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      company: "InnovateNow",
      website: "innovatenow.io",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "Atlas Defenders built us a custom web application that perfectly fits our business needs. The database security measures are enterprise-grade and reliable."
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Operations Manager",
      company: "SecureLogistics",
      website: "securelogistics.net",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "Their attention to security details is unmatched. The DDoS protection saved us during a major attack, and their 24/7 monitoring gives us complete confidence."
    },
    {
      id: 6,
      name: "James Miller",
      position: "IT Director",
      company: "HealthTech Solutions",
      website: "healthtech.com",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2",
      text: "Compliance was critical for our healthcare platform. Atlas Defenders delivered a HIPAA-compliant solution with advanced encryption and access controls."
    }
  ];

  // Group testimonials in pairs
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  // Auto-advance every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % testimonialPairs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialPairs.length]);

  return (
    <div className="relative max-w-6xl mx-auto">



      {/* Testimonials Content */}
      <div className="relative z-10">
        <motion.div
          key={currentPair}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonialPairs[currentPair]?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Avatar and Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.website}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialPairs.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentPair ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WebDevelopmentPage = () => {
  const [openGroupId, setOpenGroupId] = useState(null);

  const handleAccordionClick = (groupId) => {
    setOpenGroupId(prevGroupId => (prevGroupId === groupId ? null : groupId));
  };

  const packages = [
    {
      id: 1,
      title: 'Starter CMS',
      oldPrice: '7,000 Dhs',
      newPrice: '5,500 Dhs',
      promo: 'Limited-time offer',
      isPopular: false,
      featureGroups: [
        {
          id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: WordPress, WooCommerce, Shopify', included: true },
            { name: 'Pages Included: Up to 5 pages', included: true },
            { name: 'Theme / Design: Premium pre-built theme installation', included: true },
          ]
        },
        {
          id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 1 year', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
          ]
        },
        {
          id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Basic website management training', included: true },
            { name: 'Support: 15 days post-delivery', included: true },
          ]
        },
        {
          id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Basic', included: true },
            { name: 'Performance Optimization', included: false },
          ]
        },
        {
          id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup', included: false },
            { name: 'CDN (Content Delivery Network)', included: false },
            { name: 'Load Balancer', included: false },
          ]
        },
        {
          id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF)', included: false },
            { name: 'Anti-DDoS Protection', included: false },
            { name: 'Reverse Proxy Server', included: false },
            { name: 'Database Security', included: false },
            { name: 'Vulnerability Analysis', included: false },
            { name: 'Identity & Access Management (IAM)', included: false },
            { name: 'Secret Management', included: false },
            { name: 'Protection Against Common Attacks', included: false },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Professional Secure CMS',
      oldPrice: '15,000 Dhs',
      newPrice: '12,500 Dhs',
      promo: 'Save 2,500 Dhs!',
      isPopular: true,
      featureGroups: [
        {
          id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: WordPress, WooCommerce, Shopify', included: true },
            { name: 'Pages Included: Up to 10 pages', included: true },
            { name: 'Theme / Design: Premium pre-built theme installation', included: true },
          ]
        },
        {
          id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 1 year', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
          ]
        },
        {
          id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Comprehensive website management training', included: true },
            { name: 'Support: 2 months post-delivery', included: true },
          ]
        },
        {
          id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Advanced', included: true },
            { name: 'Performance Optimization: Basic optimization', included: true },
          ]
        },
        {
          id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup: Automated backups', included: true },
            { name: 'CDN (Content Delivery Network)', included: true },
            { name: 'Load Balancer', included: false },
          ]
        },
        {
          id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF)', included: true },
            { name: 'Anti-DDoS Protection', included: true },
            { name: 'Reverse Proxy Server', included: true },
            { name: 'Database Security: Basic database security', included: true },
            { name: 'Vulnerability Analysis', included: false },
            { name: 'Identity & Access Management (IAM)', included: false },
            { name: 'Secret Management', included: false },
            { name: 'Protection Against Common Attacks', included: false },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Professional Custom Website',
      newPrice: 'Starting from 15,000 Dhs',
      promo: 'Intro price',
      isPopular: false,
      featureGroups: [
        {
          id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: Custom-built platform', included: true },
            { name: 'Pages Included: Up to 15 pages', included: true },
            { name: 'Theme / Design: Fully custom design & development', included: true },
          ]
        },
        {
          id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 3 years', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
          ]
        },
        {
          id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Full website management training', included: true },
            { name: 'Support: 2–3 months post-delivery', included: true },
          ]
        },
        {
          id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Advanced', included: true },
            { name: 'Performance Optimization: Advanced optimization', included: true },
          ]
        },
        {
          id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup: Automated backups', included: true },
            { name: 'CDN (Content Delivery Network)', included: true },
            { name: 'Load Balancer', included: true },
          ]
        },
        {
          id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF)', included: true },
            { name: 'Anti-DDoS Protection', included: true },
            { name: 'Reverse Proxy Server', included: true },
            { name: 'Database Security: Advanced database security', included: true },
            { name: 'Vulnerability Analysis: Basic vulnerability analysis', included: true },
            { name: 'Identity & Access Management (IAM)', included: false },
            { name: 'Secret Management', included: false },
            { name: 'Protection Against Common Attacks', included: false },
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Business Custom Website',
      newPrice: 'Custom Quote',
      promo: 'Contact for full TCO',
      isPopular: false,
      featureGroups: [
        {
          id: 1, title: 'Platform & Design', icon: LayoutTemplate, features: [
            { name: 'Platform / CMS: Custom-built platform', included: true },
            { name: 'Pages Included: Fully custom, project-based', included: true },
            { name: 'Theme / Design: Fully custom, enterprise-grade', included: true },
          ]
        },
        {
          id: 2, title: 'Domain & Hosting', icon: Globe, features: [
            { name: 'Domain Name: Free for 3 years', included: true },
            { name: 'Hosting: Free for 1 year', included: true },
          ]
        },
        {
          id: 3, title: 'Training & Support', icon: GraduationCap, features: [
            { name: 'Training: Full enterprise training', included: true },
            { name: 'Support: As per project scope', included: true },
          ]
        },
        {
          id: 4, title: 'SEO Optimization', icon: BarChart2, features: [
            { name: 'SEO Optimization: Advanced', included: true },
            { name: 'Performance Optimization: Enterprise-grade', included: true },
          ]
        },
        {
          id: 5, title: 'Backup & Reliability', icon: Database, features: [
            { name: 'Backup: High-availability backup & disaster recovery', included: true },
            { name: 'CDN (Content Delivery Network)', included: true },
            { name: 'Load Balancer', included: true },
          ]
        },
        {
          id: 6, title: 'Security Features', icon: ShieldCheck, features: [
            { name: 'Free SSL/TLS Certificates for 1 year', included: true },
            { name: 'Web Application Firewall (WAF): Enterprise-grade', included: true },
            { name: 'Anti-DDoS Protection: Enterprise-grade', included: true },
            { name: 'Reverse Proxy Server: Enterprise-grade', included: true },
            { name: 'Database Security: Enterprise-grade', included: true },
            { name: 'Vulnerability Analysis: Enterprise-level', included: true },
            { name: 'Identity & Access Management (IAM): Integrated', included: true },
            { name: 'Secret Management: Integrated', included: true },
            { name: 'Protection Against SQL Injection, XSS, CSRF, etc.', included: true },
          ]
        }
      ]
    }
  ];

  const technologies = {
    "Front-end Development": ["/Logos/react.svg", "/Logos/nextjs.svg", "/Logos/vue.svg", "/Logos/nuxt.svg", "/Logos/angular.svg", "/Logos/svelte.svg", "/Logos/typescript.svg", "/Logos/javascript.svg"],
    "Build Tools & Standards": ["/Logos/vite.svg", "/Logos/webpack.svg", "/Logos/babel.svg", "/Logos/eslint.svg", "/Logos/prettier.svg", "/Logos/html5.svg", "/Logos/css3.svg"],
    "UI/UX & Styling": ["/Logos/tailwindcss.svg", "/Logos/bootstrap.svg", "/Logos/material-ui.svg", "/Logos/sass.svg", "/Logos/figma.svg", "/Logos/adobe-xd.svg", "/Logos/sketch.svg"],
    "Back-end Development": ["/Logos/nodejs.svg", "/Logos/laravel.svg", "/Logos/django.svg", "/Logos/fastapi.svg", "/Logos/springboot.svg", "/Logos/dotnet.svg", "/Logos/php.svg", "/Logos/python.svg"],
    "Database Management": ["/Logos/mysql.svg", "/Logos/postgresql.svg", "/Logos/mongodb.svg", "/Logos/redis.svg", "/Logos/elasticsearch.svg", "/Logos/oracle.svg", "/Logos/sql-server.svg", "/Logos/sqlite.svg"],
    "DevOps & Automation": ["/Logos/docker.svg", "/Logos/kubernetes.svg", "/Logos/jenkins.svg", "/Logos/gitlab-ci.svg", "/Logos/github-actions.svg", "/Logos/terraform.svg", "/Logos/ansible.svg"],
    "Cloud & Hosting": ["/Logos/aws.svg", "/Logos/azure.svg", "/Logos/google-cloud.svg", "/Logos/digitalocean.svg", "/Logos/vercel.svg", "/Logos/netlify.svg", "/Logos/cloudflare.svg"],
    "Web Servers & Security": ["/Logos/nginx.svg", "/Logos/apache.svg", "/Logos/cloudflare.svg", "/Logos/ssl.svg", "/Logos/lets-encrypt.svg", "/Logos/owasp.svg", "/Logos/waf.svg", "/Logos/ddos-protection.svg"],
    "CMS & E-commerce": ["/Logos/wordpress.svg", "/Logos/woocommerce.svg", "/Logos/shopify.svg", "/Logos/magento.svg", "/Logos/drupal.svg", "/Logos/strapi.svg", "/Logos/contentful.svg"]
  };

  return (
    <div className="bg-white text-gray-700 font-sans">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <path fill="#3B82F6" d="M0,0H980C850,280,750,550,900,900H0V0Z" />
          </svg>
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center w-full">
            <motion.div className="w-full lg:w-3/5 xl:w-1/2 text-white text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight text-white"> Build Secure, Scalable & High-Performance Web Platforms </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 mb-8 font-light"> 15+ years delivering custom web apps, e-commerce, and enterprise portals with security built in. </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105"> Start My Project </button>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-2/5 xl:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A team of professionals collaborating on a project" className="w-full max-w-md lg:max-w-full h-auto rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Choose the right plan for your business. All our packages are designed for security, performance, and scalability."> Our Web Development Packages </SectionTitle>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative rounded-xl shadow-lg flex flex-col ${pkg.isPopular ? 'border-2 border-blue-600' : 'border border-gray-200'}`}>
                {pkg.isPopular && (
                  <div className="absolute -top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                )}
                <div className="p-8 bg-white rounded-t-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    {pkg.oldPrice && <span className="text-lg text-gray-400 line-through mr-2">{pkg.oldPrice}</span>}
                    <span className="text-3xl font-bold text-gray-900">{pkg.newPrice}</span>
                  </div>
                  <p className="bg-blue-100 text-blue-700 text-sm font-semibold rounded-full px-3 py-1 self-start mb-4">{pkg.promo}</p>
                </div>
                <div className="flex-grow bg-gray-50 p-6">
                  {pkg.featureGroups.map((group) => (
                    <AccordionItem
                      key={group.id}
                      title={group.title}
                      icon={group.icon}
                      isOpen={openGroupId === group.id}
                      onClick={() => handleAccordionClick(group.id)}
                    >
                      <ul className="space-y-3 text-sm">
                        {group.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            {feature.included ? (
                              <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                            )}
                            <span className={!feature.included ? 'text-gray-500' : 'text-gray-800'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))}
                </div>
                <div className="p-8 bg-white rounded-b-xl mt-auto">
                  <button className={`w-full text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Partner with a team that prioritizes security and performance at every stage of development."> Why Choose Atlas Defenders </SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <ShieldCheck size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Security-First Engineering</h3> <p className="text-gray-600">Every website and application we build is production-hardened from day one, incorporating best practices for threat mitigation.</p> </div> </div>
            <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <Award size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise-Grade SLAs & Compliance</h3> <p className="text-gray-600">We deliver solutions that meet stringent requirements, mapping to PCI, GDPR, and HIPAA standards as needed for your industry.</p> </div> </div>
            <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <Users size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Stack & Certified People</h3> <p className="text-gray-600">Our senior engineers hold top certifications (OSCP, CCNP, AWS/Azure) and are experts in modern, reliable technologies.</p> </div> </div>
            <div className="flex items-start"> <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mr-6"> <BarChart size={32} /> </div> <div> <h3 className="text-xl font-bold text-gray-800 mb-2">From SME to Telecom</h3> <p className="text-gray-600">Our architecture scales to meet the demands of any business, from agile startups to carrier-grade enterprise customers.</p> </div> </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="We leverage a vast ecosystem of modern, robust, and secure technologies to build powerful web solutions.">
            Our Technology Ecosystem
          </SectionTitle>
          <TechnologyGrid technologies={technologies} />
        </div>
      </section>

      {/* News and Updates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">NEWS AND UPDATES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Latest News and Blogs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SEO Article */}
            <motion.article
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
                  alt="SEO keyboard keys"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  SEO GUIDE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What is SEO? An explanation for beginners</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Search Engine Optimization (SEO) is the practice of improving your website's visibility in search engine results. It involves optimizing content, technical elements, and user experience to rank higher on Google and other search engines.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>

            {/* WAF Article */}
            <motion.article
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
                  alt="Web security and firewall"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  SECURITY
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What is WAF? Web Application Firewall explained</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A Web Application Firewall (WAF) is a security layer that filters, monitors, and blocks HTTP traffic between web applications and the internet. It protects against common attacks like SQL injection, XSS, and DDoS.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>

            {/* SSL/TLS Article */}
            <motion.article
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
                  alt="SSL certificate and security"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ENCRYPTION
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">SSL/TLS Certificates: Why your website needs them</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  SSL (Secure Sockets Layer) and TLS (Transport Layer Security) certificates encrypt data between your website and visitors. They're essential for security, SEO rankings, and building user trust with the padlock icon.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Additional Educational Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div
              className="bg-blue-50 rounded-lg p-6 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">CDN Benefits</h4>
              <p className="text-gray-600 text-sm">Content Delivery Networks speed up your website by serving content from servers closest to your visitors.</p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-lg p-6 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Database Security</h4>
              <p className="text-gray-600 text-sm">Protecting your data with encryption, access controls, and regular security audits to prevent breaches.</p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-lg p-6 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">DDoS Protection</h4>
              <p className="text-gray-600 text-sm">Distributed Denial of Service protection keeps your website online during malicious traffic attacks.</p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-lg p-6 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Load Balancing</h4>
              <p className="text-gray-600 text-sm">Distributes incoming traffic across multiple servers to ensure optimal performance and reliability.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        {/* World Map Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80')`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-800 bg-opacity-85"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Satisfied Clients are Saying!</h2>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Professional working on laptop"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                {/* Blue accent square */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-lg"></div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-blue-600 mr-4"></div>
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">GET IN TOUCH</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Send us a Message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="Website URL"
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
