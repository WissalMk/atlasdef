import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffensiveSecurityPage = () => {
  useEffect(() => {
    document.title = 'Offensive Security | Atlas Defenders';
  }, []);

  // Professional Terminal Typing Animation Component with Rotating Text
  const TerminalTypingAnimation = () => {
    const [commandText, setCommandText] = useState('');
    const [responseText, setResponseText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [animationPhase, setAnimationPhase] = useState('waiting'); // 'waiting', 'typing-command', 'cycling-responses'

    const responses = [
      'ATLAS DEFENDERS',
      'Empowering Security, Elevating Trust',
      'Protecting Digital Assets Worldwide',
      'Your Cybersecurity Partner'
    ];

    useEffect(() => {
      // Cursor blinking
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 600);
      return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
      let timeouts: ReturnType<typeof setTimeout>[] = [];
      let intervals: ReturnType<typeof setInterval>[] = [];

      const clearAllTimers = () => {
        timeouts.forEach(clearTimeout);
        intervals.forEach(clearInterval);
        timeouts = [];
        intervals = [];
      };

      const startAnimation = () => {
        // Step 1: Wait 2 seconds, then type command
        timeouts.push(setTimeout(() => {
          setAnimationPhase('typing-command');
          const command = '$ whoami';
          let charIndex = 0;

          const commandInterval = setInterval(() => {
            if (charIndex <= command.length) {
              setCommandText(command.slice(0, charIndex));
              charIndex++;
            } else {
              clearInterval(commandInterval);
              setAnimationPhase('cycling-responses');

              // Step 2: Start response cycling
              let responseIndex = 0;

              const cycleResponses = () => {
                const currentResponse = responses[responseIndex];
                let charIndex = 0;

                // Type response
                const typeInterval = setInterval(() => {
                  if (charIndex <= currentResponse.length) {
                    setResponseText(currentResponse.slice(0, charIndex));
                    charIndex++;
                  } else {
                    clearInterval(typeInterval);

                    // Wait 3 seconds then delete
                    timeouts.push(setTimeout(() => {
                      let deleteIndex = currentResponse.length;

                      const deleteInterval = setInterval(() => {
                        if (deleteIndex >= 0) {
                          setResponseText(currentResponse.slice(0, deleteIndex));
                          deleteIndex--;
                        } else {
                          clearInterval(deleteInterval);

                          // Move to next response
                          responseIndex = (responseIndex + 1) % responses.length;

                          // Wait 500ms then cycle to next
                          timeouts.push(setTimeout(() => {
                            cycleResponses();
                          }, 500));
                        }
                      }, 50);
                      intervals.push(deleteInterval);
                    }, 3000));
                  }
                }, 100);
                intervals.push(typeInterval);
              };

              // Start response cycling after 1 second
              timeouts.push(setTimeout(() => {
                cycleResponses();
              }, 1000));
            }
          }, 120);
          intervals.push(commandInterval);
        }, 2000));
      };

      startAnimation();

      return clearAllTimers;
    }, []);

    return (
      <div className="space-y-2 h-12"> {/* Fixed height container */}
        {/* Command line - typed once and stays visible */}
        <div className="text-green-400">
          {commandText}
        </div>

        {/* Response line - cycles through responses */}
        {animationPhase === 'cycling-responses' && (
          <div className="text-green-400 flex items-center min-h-[20px]">
            {responseText}
            {showCursor && (
              <span className="inline-block w-0.5 h-4 bg-green-400 ml-1">|</span>
            )}
          </div>
        )}
      </div>
    );
  };

  // Counter component for animated statistics
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
      <span ref={ref}>
        {prefix}{count}{suffix}
      </span>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
        <div className="container max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >


              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Uncover the</span>
                <br />
                <span className="text-red-500">Unknown</span>
                <br />
                <span className="text-white">Before Attackers Do</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Atlas Defenders simulates real-world cyberattacks to discover your weaknesses before hackers do.
                Our certified red team experts use advanced techniques to test your defenses.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Request a Red Team Assessment</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <button
                  onClick={() => {
                    const servicesSection = document.getElementById('offensive-services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group relative inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden"
                >
                  <span className="relative z-10 font-medium tracking-wide">View Service Details</span>

                  {/* Professional hover effect overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-1 bg-white rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:blur-md"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
              </div>
            </motion.div>

            {/* Right Content - Professional Terminal with Typing Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-black/90 rounded-lg p-6 border border-red-500/30 backdrop-blur-sm relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">atlas-defenders-redteam.sh</span>
                </div>

                {/* Terminal Content with Professional Typing Animation */}
                <div className="text-green-400 font-mono text-sm space-y-2 min-h-[280px]">
                  <div>$ nmap -sS -O target.company.com</div>
                  <div>Starting Nmap scan...</div>
                  <div>PORT     STATE SERVICE</div>
                  <div>22/tcp   open  ssh</div>
                  <div>80/tcp   open  http</div>
                  <div>443/tcp  open  https</div>
                  <div className="text-red-400">$ sqlmap -u "https://target.com/login"</div>
                  <div className="text-red-400">Vulnerability detected: SQL Injection</div>
                  <div className="text-yellow-400">$ msfconsole</div>
                  <div className="text-yellow-400">Payload delivered successfully</div>

                  {/* Professional Typing Animation Component */}
                  <TerminalTypingAnimation />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Offensive Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Is Offensive Security?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offensive security is the proactive approach to cybersecurity. Our certified experts simulate
                real-world cyberattacks to detect vulnerabilities in your systems, applications, cloud, and
                employees — before real adversaries exploit them.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike traditional security assessments, offensive security testing uses the same tools,
                techniques, and procedures as actual attackers. This approach provides a realistic view of
                your security posture and helps prioritize remediation efforts based on actual risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  {/* Professional Hacker Logo */}
                  <img
                    src="/Logos/hacker_logo.svg"
                    alt="Ethical Hacker"
                    className="w-12 h-12 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Red Team Simulation</h3>
                <p className="text-red-100 mb-6">
                  Our red team exercises simulate advanced persistent threats, testing your organization's
                  ability to detect, respond to, and recover from sophisticated attacks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Multi-vector attack simulation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Stealth and persistence testing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Detection capability assessment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="offensive-services-section" className="py-20 bg-gray-50">
        <div className="container max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offensive Security Services
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive offensive security testing across all attack vectors and platforms.
            </p>
          </motion.div>

          {/* First Row - 3 Services */}
          <div className="grid lg:grid-cols-3 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Web Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="32" r="4" fill="currentColor" />
                  <circle cx="16" cy="16" r="3" fill="currentColor" />
                  <circle cx="48" cy="16" r="3" fill="currentColor" />
                  <circle cx="16" cy="48" r="3" fill="currentColor" />
                  <circle cx="48" cy="48" r="3" fill="currentColor" />
                  <path d="M32 28 L32 36 M28 32 L36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 8 L32 24 M8 32 L24 32 M32 40 L32 56 M40 32 L56 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20 20 L28 28 M44 20 L36 28 M20 44 L28 36 M44 44 L36 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Web Application Penetration Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Simulate attacks against your websites using OWASP and zero-day discovery techniques.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">OWASP Top 10 Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Zero-day Discovery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Business Logic Flaws</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Authentication Bypass</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Mobile Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <rect x="18" y="8" width="28" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="22" y="16" width="20" height="28" fill="currentColor" opacity="0.1" />
                  <circle cx="32" cy="50" r="2" fill="currentColor" />
                  <path d="M26 12 L38 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 20 L36 20 M28 24 L36 24 M28 28 L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="38" cy="32" r="2" fill="currentColor" />
                  <path d="M24 36 L40 36 M24 40 L36 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Mobile Application Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Evaluate Android & iOS apps against OWASP Mobile Top 10.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">iOS Security Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Android Penetration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Mobile API Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Runtime Analysis</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional API Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <rect x="8" y="20" width="48" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="32" r="3" fill="currentColor" />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                  <circle cx="44" cy="32" r="3" fill="currentColor" />
                  <path d="M23 32 L29 32 M35 32 L41 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 8 L32 20 M32 44 L32 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 8 L16 20 M48 8 L48 20 M16 44 L16 56 M48 44 L48 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="16" cy="6" r="2" fill="currentColor" />
                  <circle cx="32" cy="6" r="2" fill="currentColor" />
                  <circle cx="48" cy="6" r="2" fill="currentColor" />
                  <circle cx="16" cy="58" r="2" fill="currentColor" />
                  <circle cx="32" cy="58" r="2" fill="currentColor" />
                  <circle cx="48" cy="58" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                API Penetration Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Test your APIs against abuse, insecure endpoints, and authorization bypass.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">REST API Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">GraphQL Security</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Authorization Bypass</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Rate Limiting Tests</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Second Row - 3 Services */}
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Network Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="32" r="6" fill="currentColor" />
                  <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="48" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="48" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 20 L26 26 M44 20 L38 26 M20 44 L26 38 M44 44 L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                  <circle cx="48" cy="16" r="2" fill="currentColor" />
                  <circle cx="16" cy="48" r="2" fill="currentColor" />
                  <circle cx="48" cy="48" r="2" fill="currentColor" />
                  <path d="M8 32 L24 32 M40 32 L56 32 M32 8 L32 24 M32 40 L32 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Network & Infrastructure Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Simulate external and internal attacks to find misconfigurations and escalation vectors.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">External Penetration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Internal Network Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Privilege Escalation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Lateral Movement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Cloud Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <path d="M16 40 C12 40 8 36 8 32 C8 28 12 24 16 24 C18 20 22 16 28 16 C34 16 38 20 40 24 C44 24 48 28 48 32 C48 36 44 40 40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="32" r="2" fill="currentColor" />
                  <circle cx="32" cy="32" r="2" fill="currentColor" />
                  <circle cx="44" cy="32" r="2" fill="currentColor" />
                  <path d="M22 32 L30 32 M34 32 L42 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M32 44 L32 52 M28 48 L36 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="24" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="40" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="48" cy="48" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Cloud Security Assessment
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                AWS, Azure & GCP red teaming — IAM misconfigurations, public buckets, exposed secrets.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Multi-Cloud Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">IAM Misconfigurations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Container Security</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Serverless Testing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Social Engineering Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M32 28 C28 28 24 32 24 36 L24 44 L40 44 L40 36 C40 32 36 28 32 28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="32" cy="20" r="4" fill="currentColor" />
                  <path d="M16 52 L48 52 M20 48 L44 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="56" r="2" fill="currentColor" />
                  <circle cx="20" cy="56" r="2" fill="currentColor" />
                  <circle cx="32" cy="56" r="2" fill="currentColor" />
                  <circle cx="44" cy="56" r="2" fill="currentColor" />
                  <circle cx="52" cy="56" r="2" fill="currentColor" />
                  <path d="M8 8 L16 16 M48 8 L56 16 M8 16 L16 8 M48 16 L56 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Social Engineering Simulations
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Phishing, vishing, USB drop, and physical breach attempts.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Phishing Campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Vishing Attacks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">USB Drop Tests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Pretexting Scenarios</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success & Project Statistics Section - Oblique Design */}
      <section className="relative overflow-hidden">
        {/* Oblique Background with Linear Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-800 to-black transform -skew-y-1 origin-top-left scale-110"></div>

        {/* Content Container */}
        <div className="relative z-10 py-16 px-4">
          <div className="container max-w-6xl mx-auto">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Proven Excellence in Cybersecurity
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Our offensive security expertise delivers measurable results across global enterprises
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

              {/* Satisfied Clients */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={6561} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Satisfied Clients
                </div>
              </motion.div>

              {/* Penetration Tests */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={600} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Penetration Tests
                </div>
              </motion.div>

              {/* Security Experts */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={250} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Security Experts
                </div>
              </motion.div>

              {/* Vulnerabilities Found */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={15420} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Vulnerabilities Found
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Offensive Security Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offensive Security Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our red team experts hold industry-leading offensive security certifications, ensuring advanced penetration testing and ethical hacking capabilities
            </p>
          </motion.div>

          {/* Professional Certification Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center flex-wrap gap-8 lg:gap-12"
          >
            {/* eJPTv2 */}
            <img src="/Certifications/EJPTV2.svg" alt="eJPTv2" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* eCPPT */}
            <img src="/Certifications/ECPPT.svg" alt="eCPPT" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSCP */}
            <img src="/Certifications/OSCP.svg" alt="OSCP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSEP */}
            <img src="/Certifications/OSEP.svg" alt="OSEP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSWP */}
            <img src="/Certifications/OSWP.svg" alt="OSWP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CRTP */}
            <img src="/Certifications/CRTP.svg" alt="CRTP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CRTE */}
            <img src="/Certifications/CRTE.svg" alt="CRTE" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section - CrowdStrike Style */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Diagonal Red Lines Background - Exact CrowdStrike Pattern */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
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
              Ready to Uncover the Gaps in Your Security?
            </motion.h2>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary Red Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Secondary Black Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-semibold text-base transition-all duration-300"
              >
                <span>Contact us</span>
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
              Don't wait for a breach to happen. Get proactive protection with our comprehensive offensive security services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Arsenal of Offensive Technologies Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Section Title */}
              <div>
                <div className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  ATLAS DEFENDERS + OFFENSIVE SECURITY
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Arsenal of Offensive Technologies
                </h2>
              </div>

              {/* Strategic Paragraph */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Atlas Defenders, we simulate real-world threats using the same powerful tools and frameworks trusted by elite red teams and adversaries worldwide.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our expertise spans across reconnaissance, exploitation, post-exploitation, and lateral movement, delivering advanced testing scenarios powered by:
                </p>

                {/* Checkmark List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Realistic adversarial simulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Industry-trusted offensive security tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Actionable insights tailored to enterprise environments</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  From the first scan to full domain compromise — we use the right tools, the right way, with surgical precision.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Challenge Your Defenses</span>
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Animated Tool Cubes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[600px] overflow-hidden"
            >
              {/* Animated Columns Container */}
              <div className="flex justify-center space-x-4 h-full">

                {/* Column 1 - Moving Up */}
                <div className="flex flex-col space-y-4 animate-[slideUp_20s_linear_infinite]">
                  <ToolCube tool="Metasploit" />
                  <ToolCube tool="Burp Suite" />
                  <ToolCube tool="Wireshark" />
                  <ToolCube tool="OpenVAS" />
                  <ToolCube tool="Hydra" />
                  <ToolCube tool="John the Ripper" />
                  {/* Duplicate for seamless loop */}
                  <ToolCube tool="Metasploit" />
                  <ToolCube tool="Burp Suite" />
                  <ToolCube tool="Wireshark" />
                  <ToolCube tool="OpenVAS" />
                </div>

                {/* Column 2 - Moving Down */}
                <div className="flex flex-col space-y-4 animate-[slideDown_25s_linear_infinite]">
                  <ToolCube tool="Nessus" />
                  <ToolCube tool="Nmap" />
                  <ToolCube tool="Nikto" />
                  <ToolCube tool="SQLmap" />
                  <ToolCube tool="Aircrack-ng" />
                  <ToolCube tool="Maltego" />
                  <ToolCube tool="Qualys" />
                  <ToolCube tool="Empire" />
                  {/* Duplicate for seamless loop */}
                  <ToolCube tool="Nessus" />
                  <ToolCube tool="Nmap" />
                  <ToolCube tool="Nikto" />
                  <ToolCube tool="SQLmap" />
                </div>

                {/* Column 3 - Moving Up (Different Speed) */}
                <div className="flex flex-col space-y-4 animate-[slideUp_30s_linear_infinite]">
                  <ToolCube tool="Metasploit" />
                  <ToolCube tool="Wireshark" />
                  <ToolCube tool="SQLmap" />
                  <ToolCube tool="Maltego" />
                  <ToolCube tool="Burp Suite" />
                  <ToolCube tool="Nmap" />
                  <ToolCube tool="Qualys" />
                  <ToolCube tool="Hydra" />
                  {/* Duplicate for seamless loop */}
                  <ToolCube tool="Metasploit" />
                  <ToolCube tool="Wireshark" />
                  <ToolCube tool="SQLmap" />
                  <ToolCube tool="Maltego" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx> {`
          @keyframes slideUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          
          @keyframes slideDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </section>
    </>
  );
};

// Tool Cube Component
const ToolCube = ({ tool }: { tool: string }) => {
  // Tool logo mapping - using actual logos from /public/Logos/
  const getToolLogo = (toolName: string) => {
    const logoMap: { [key: string]: string } = {
      'Metasploit': '/Logos/metasploit_logo.svg',
      'Nessus': '/Logos/nessus_logo.png',
      'Empire': '/Logos/powershell_logo.svg',
      'Burp Suite': '/Logos/bruipsuite_logo.svg',
      'Nmap': '/Logos/nmap_logo.svg',
      'Wireshark': '/Logos/wireshark_logo.svg',
      'Nikto': '/Logos/nikto_logo.svg',
      'OpenVAS': '/Logos/openvas_logo.svg',
      'SQLmap': '/Logos/sqlmap_logo.svg',
      'Hydra': '/Logos/hydra_logo.svg',
      'Aircrack-ng': '/Logos/aircrackng_logo.svg',
      'John the Ripper': '/Logos/john_the_ripper_logo.svg',
      'Maltego': '/Logos/maltego.svg',
      'Qualys': '/Logos/qualys_logo.png',
      'Acunetix': '/Logos/acuentix_logo.png'
    };
    return logoMap[toolName] || '/Logos/hacker_logo.svg';
  };

  // Special display rules: Qualys, Acunetix, and Nessus show logo only (no name)
  const shouldShowName = (toolName: string) => {
    return !['Qualys', 'Acunetix', 'Nessus'].includes(toolName);
  };

  // Special logo sizing for very big logos
  const getLogoSize = (toolName: string) => {
    if (['Qualys', 'OpenVAS', 'Acunetix', 'Nessus'].includes(toolName)) {
      return 'w-20 h-20'; // Very very big logos
    }
    return 'w-12 h-12'; // Normal size
  };

  return (
    <div className="w-32 h-32 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className={`${getLogoSize(tool)} ${shouldShowName(tool) ? 'mb-2' : ''} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        <img
          src={getToolLogo(tool)}
          alt={`${tool} logo`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            // Fallback to hacker logo if image fails to load
            (e.target as HTMLImageElement).src = '/Logos/hacker_logo.svg';
          }}
        />
      </div>
      {shouldShowName(tool) && (
        <div className="text-sm font-semibold text-gray-700 text-center px-2 leading-tight">
          {tool}
        </div>
      )}
    </div>
  );
};

export default OffensiveSecurityPage;