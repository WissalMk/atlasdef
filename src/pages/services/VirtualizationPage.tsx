import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, HardDrive, Cpu, ArrowRight, Zap, Users, Clock, CheckCircle, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const VirtualizationPage = () => {
  useEffect(() => {
    document.title = 'Virtualization Solutions | Atlas Defenders';
  }, []);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Counter component for metrics
  const Counter = ({ end, duration = 2.5, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startCount = 0;

        const updateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);

          setCount(currentCount);

          if (progress >= 1) {
            setCount(end);
          } else {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      }
    }, [isInView, end, duration]);

    return (
      <span ref={ref} className="text-4xl md:text-5xl font-bold" style={{ color: '#FDEB9E' }}>
        {prefix}{count}{suffix}
      </span>
    );
  };

  const virtualizationCategories = [
    {
      id: 'vmware-vsphere',
      title: 'VMware vSphere',
      description: 'Enterprise virtualization with vCenter and ESXi hypervisor.',
      tools: [
        { name: 'vSphere ESXi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'vCenter Server', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'vSAN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'NSX', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' }
      ],
      gradient: 'custom-blue'
    },
    {
      id: 'proxmox',
      title: 'Proxmox VE',
      description: 'Open-source virtualization platform with KVM and LXC containers.',
      tools: [
        { name: 'Proxmox VE', logo: '/Logos/Proxmox_logo.svg' },
        { name: 'KVM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'LXC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Ceph Storage', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ],
      gradient: 'custom-yellow'
    },
    {
      id: 'nutanix',
      title: 'Nutanix AHV',
      description: 'Hyper-converged infrastructure with built-in virtualization.',
      tools: [
        { name: 'Nutanix AHV', logo: '/Logos/Nutanix_Logo.svg' },
        { name: 'Prism Central', logo: '/Logos/Nutanix_Logo.svg' },
        { name: 'Nutanix Files', logo: '/Logos/Nutanix_Logo.svg' },
        { name: 'Flow Security', logo: '/Logos/Nutanix_Logo.svg' }
      ],
      gradient: 'custom-blue-alt'
    },
    {
      id: 'hyper-v',
      title: 'Microsoft Hyper-V',
      description: 'Windows Server virtualization with System Center integration.',
      tools: [
        { name: 'Hyper-V', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
        { name: 'SCVMM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
        { name: 'Failover Clustering', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
        { name: 'Storage Spaces', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' }
      ],
      gradient: 'custom-yellow-alt'
    },
    {
      id: 'xcp-ng',
      title: 'XCP-ng',
      description: 'Open-source Xen-based virtualization platform.',
      tools: [
        { name: 'XCP-ng', logo: '/Logos/xcp-ng.png' },
        { name: 'Xen Orchestra', logo: '/Logos/xen-orchestra.png' },
        { name: 'XOSAN', logo: '/Logos/xcpng_logo.png' },
        { name: 'XenMotion', logo: '/Logos/xcpng_logo.png' }
      ],
      gradient: 'custom-blue-dark'
    },
    {
      id: 'container-platforms',
      title: 'Container Platforms',
      description: 'Docker and Kubernetes container orchestration.',
      tools: [
        { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png' },
        { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2560px-Kubernetes_logo_without_workmark.svg.png' },
        { name: 'OpenShift', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/2560px-OpenShift-LogoType.svg.png' },
        { name: 'Rancher', logo: '/Logos/rancher.svg' }
      ],
      gradient: 'custom-yellow-orange'
    }
  ];

  const metrics = [
    { value: 300, suffix: '+', label: 'VMs Deployed', icon: Server },
    { value: 70, suffix: '%', label: 'Resource Efficiency', icon: Cpu },
    { value: 99.9, suffix: '%', label: 'VM Uptime', icon: Zap },
    { value: 120, suffix: '+', label: 'Virtualized Clients', icon: Users }
  ];

  const whyChooseReasons = [
    {
      title: 'Multi-Platform Expertise',
      description: 'Certified professionals across VMware, Proxmox, Nutanix, and Hyper-V platforms',
      icon: Shield
    },
    {
      title: 'High Availability Design',
      description: 'Fault-tolerant virtualization architectures with automated failover capabilities',
      icon: CheckCircle
    },
    {
      title: 'Performance Optimization',
      description: 'Resource optimization and performance tuning for maximum efficiency',
      icon: Zap
    },
    {
      title: 'Seamless Migration',
      description: 'Zero-downtime VM migration and P2V conversion services',
      icon: Clock
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003161 0%, #001a3d 100%)' }}>
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FDEB9E' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Virtualization Animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Server Icons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`server-${i}`}
              className="absolute"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Server size={24} style={{ color: '#FDEB9E' }} />
            </motion.div>
          ))}

          {/* VM Container Boxes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`vm-${i}`}
              className="absolute w-8 h-6 border border-yellow-400/30 rounded"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${15 + Math.random() * 70}%`,
                backgroundColor: 'rgba(253, 235, 158, 0.1)',
              }}
              animate={{
                x: [0, 10, 0],
                opacity: [0.2, 0.6, 0.2],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {Array.from({ length: 4 }).map((_, i) => {
              const startX = 20 + (i * 20);
              const startY = 30 + (i * 15);
              const endX = startX + 30;
              const endY = startY + 20;

              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="#FDEB9E"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </svg>

          {/* Hypervisor Layer Animation */}
          <motion.div
            className="absolute bottom-10 left-10 right-10 h-1 rounded-full"
            style={{ backgroundColor: 'rgba(253, 235, 158, 0.2)' }}
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Data Flow Particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: '#FDEB9E',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -30, 20, 0],
                opacity: [0, 1, 0.5, 0],
                scale: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                  style={{ backgroundColor: 'rgba(253, 235, 158, 0.1)', color: '#FDEB9E', border: '1px solid rgba(253, 235, 158, 0.3)' }}>
                  Virtualization Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Enterprise Virtualization Solutions
              </h1>

              <p className="text-xl mb-6 leading-relaxed" style={{ color: '#FDEB9E' }}>
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  VMware
                </motion.span>
                , Proxmox,
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Nutanix
                </motion.span>
                ,
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  XCP-ng
                </motion.span>
                & Enterprise Hypervisors
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Optimize your infrastructure with enterprise virtualization solutions that provide
                scalability, efficiency, and high availability for your critical workloads and applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: '#FDEB9E', color: '#003161' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e17a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#FDEB9E'}
                >
                  <span>Plan Virtualization</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300"
                  style={{ borderColor: 'rgba(253, 235, 158, 0.3)', color: '#FDEB9E' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(253, 235, 158, 0.1)';
                    e.target.style.borderColor = '#FDEB9E';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'rgba(253, 235, 158, 0.3)';
                  }}
                >
                  View All Services
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Animated Spiral */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Professional Infrastructure Animation */}
                <div className="absolute inset-0">
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 320 320"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.8 }} />
                        <stop offset="50%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.4 }} />
                        <stop offset="100%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.1 }} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Clean Spiral Lines */}
                    {Array.from({ length: 8 }).map((_, i) => {
                      const centerX = 160;
                      const centerY = 160;
                      const angle = (i * 45) * (Math.PI / 180);
                      const startRadius = 40;
                      const endRadius = 120;

                      // Create smooth spiral curve
                      const spiralTurns = 2;
                      const points = [];

                      for (let t = 0; t <= 1; t += 0.1) {
                        const currentAngle = angle + (spiralTurns * Math.PI * 2 * t);
                        const currentRadius = startRadius + (endRadius - startRadius) * t;
                        const x = centerX + Math.cos(currentAngle) * currentRadius;
                        const y = centerY + Math.sin(currentAngle) * currentRadius;
                        points.push(`${x},${y}`);
                      }

                      const pathData = `M ${points.join(' L ')}`;

                      return (
                        <motion.path
                          key={i}
                          d={pathData}
                          fill="none"
                          stroke="url(#professionalGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          filter="url(#glow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.8, 0]
                          }}
                          transition={{
                            duration: 6,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      );
                    })}

                    {/* Concentric Circles */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.circle
                        key={`circle-${i}`}
                        cx="160"
                        cy="160"
                        r={30 + (i * 25)}
                        fill="none"
                        stroke="#FDEB9E"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeDasharray="4,8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0.8, 1.1, 0.8],
                          opacity: [0.2, 0.6, 0.2],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 8 + (i * 2),
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Central Hub */}
                <motion.div
                  className="absolute w-16 h-16 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: '#FDEB9E',
                    backgroundColor: 'rgba(253, 235, 158, 0.1)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    borderColor: ['#FDEB9E', '#f5e17a', '#FDEB9E']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: '#FDEB9E' }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left - Icon */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start"
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #003161, #001a3d)' }}>
                  <Server size={40} className="text-white" />
                </div>
              </motion.div>

              {/* Center - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{ backgroundColor: 'rgba(253, 235, 158, 0.1)', color: '#FDEB9E', border: '1px solid rgba(253, 235, 158, 0.3)' }}>
                    About Our Solutions
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#003161' }}>
                  Foundation of Modern IT Infrastructure
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Virtualization is the foundation of modern IT infrastructure efficiency. At Atlas Defenders, we implement
                  enterprise-grade virtualization solutions using VMware vSphere, Proxmox, Nutanix, and other leading platforms
                  to maximize resource utilization, improve scalability, and ensure high availability for your critical systems.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtualization Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                style={{ backgroundColor: 'rgba(253, 235, 158, 0.1)', color: '#FDEB9E', border: '1px solid rgba(253, 235, 158, 0.3)' }}>
                Our Platforms
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003161' }}>
              Modern Virtualization Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our virtualization portfolio spans all major hypervisor platforms, providing complete
              solutions for server consolidation, resource optimization, and high availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualizationCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-300 overflow-hidden h-full">
                  {/* Header with gradient */}
                  <div
                    className="p-6 text-white relative overflow-hidden"
                    style={{
                      background: category.gradient === 'custom-blue' ? 'linear-gradient(to right, #003161, #001a3d)' :
                        category.gradient === 'custom-yellow' ? 'linear-gradient(to right, #FDEB9E, #f5e17a)' :
                          category.gradient === 'custom-blue-alt' ? 'linear-gradient(to right, #003161, #002a5c)' :
                            category.gradient === 'custom-yellow-alt' ? 'linear-gradient(to right, #FDEB9E, #f0d875)' :
                              category.gradient === 'custom-blue-dark' ? 'linear-gradient(to right, #001a3d, #003161)' :
                                category.gradient === 'custom-yellow-orange' ? 'linear-gradient(to right, #FDEB9E, #f5d76e)' :
                                  'linear-gradient(to right, #003161, #001a3d)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={hoveredCard === category.id ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="relative z-10">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: (category.title === 'VMware vSphere' ||
                            category.title === 'Nutanix AHV' ||
                            category.title === 'XCP-ng') ? '#FDEB9E' :
                            (category.title === 'Container Platforms' ||
                              category.title === 'Microsoft Hyper-V' ||
                              category.title === 'Proxmox VE') ? '#003161' : 'white'
                        }}
                      >
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>

                  {/* Tools Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: toolIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 group/tool"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="h-8 flex items-center justify-center mb-2">
                            <img
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              className="max-h-6 max-w-full object-contain transition-all duration-300"
                              title={tool.name}
                            />
                          </div>
                          <p className="text-xs text-gray-600 text-center font-medium group-hover/tool:text-gray-800 transition-colors duration-300">
                            {tool.name}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover pulse effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                      background: category.gradient === 'custom-blue' ? 'linear-gradient(to right, #003161, #001a3d)' :
                        category.gradient === 'custom-yellow' ? 'linear-gradient(to right, #FDEB9E, #f5e17a)' :
                          category.gradient === 'custom-blue-alt' ? 'linear-gradient(to right, #003161, #002a5c)' :
                            category.gradient === 'custom-yellow-alt' ? 'linear-gradient(to right, #FDEB9E, #f0d875)' :
                              category.gradient === 'custom-blue-dark' ? 'linear-gradient(to right, #001a3d, #003161)' :
                                category.gradient === 'custom-yellow-orange' ? 'linear-gradient(to right, #FDEB9E, #f5d76e)' :
                                  'linear-gradient(to right, #003161, #001a3d)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Defenders Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Atlas Defenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our virtualization approach combines deep technical expertise with proven methodologies
              to deliver reliable, scalable, and efficient virtual infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseReasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 group"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(0, 49, 97, 0.1), rgba(253, 235, 158, 0.1))' }}>
                      <Icon size={24} style={{ color: '#003161' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 transition-colors duration-300" style={{ color: '#003161' }}>
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #003161, #001a3d, #003161)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Professional Spiral Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
          <motion.div
            className="relative w-96 h-96 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg
              width="384"
              height="384"
              viewBox="0 0 384 384"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.6 }} />
                  <stop offset="50%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#FDEB9E', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              {/* Clean Spiral Lines */}
              {Array.from({ length: 6 }).map((_, i) => {
                const centerX = 192;
                const centerY = 192;
                const angle = (i * 60) * (Math.PI / 180);
                const startRadius = 50;
                const endRadius = 150;

                const spiralTurns = 1.5;
                const points = [];

                for (let t = 0; t <= 1; t += 0.1) {
                  const currentAngle = angle + (spiralTurns * Math.PI * 2 * t);
                  const currentRadius = startRadius + (endRadius - startRadius) * t;
                  const x = centerX + Math.cos(currentAngle) * currentRadius;
                  const y = centerY + Math.sin(currentAngle) * currentRadius;
                  points.push(`${x},${y}`);
                }

                const pathData = `M ${points.join(' L ')}`;

                return (
                  <motion.path
                    key={i}
                    d={pathData}
                    fill="none"
                    stroke="url(#successGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 8,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Virtualization Success
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our virtualization solutions deliver measurable improvements in resource utilization,
              cost efficiency, and operational reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Icon size={28} style={{ color: '#FDEB9E' }} />
                  </div>

                  <div className="mb-4">
                    <Counter
                      end={metric.value}
                      suffix={metric.suffix}
                      duration={2.5}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {metric.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(to right, #003161, #001a3d)' }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Server size={32} className="text-white" />
                </div>
              </div>

              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-xl mx-auto">
                Ready to Virtualize Your Infrastructure?
              </h2>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Maximize your IT efficiency with our expert virtualization services.
                Let us help you consolidate resources, improve scalability, and reduce operational costs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#FDEB9E', color: '#003161' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f5e17a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#FDEB9E'}
                >
                  Plan Virtualization
                </Link>
                <Link
                  to="/services"
                  className="btn px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  style={{ backgroundColor: 'white', color: '#003161' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  View All Infrastructure Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VirtualizationPage;