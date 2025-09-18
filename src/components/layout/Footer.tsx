import { Link, useLocation } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  // Check if we're on the offensive security page
  const isOffensiveSecurityPage = location.pathname === '/services/cybersecurity/offensive-security';

  return (
    <footer className={`pt-16 pb-8 transition-colors duration-300 ${
      isOffensiveSecurityPage ? 'bg-black text-white' : 'bg-primary text-white'
    }`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold font-poppins">Atlas Defenders</span>
            </div>
            <p className="mb-6 text-gray-300">
              Leading IT and cybersecurity services provider in Morocco, delivering enterprise-grade solutions to protect your digital assets.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#network" className="text-gray-300 hover:text-white transition-colors">Network Configuration</Link>
              </li>
              <li>
                <Link to="/services#firewall" className="text-gray-300 hover:text-white transition-colors">Firewall & Security</Link>
              </li>
              <li>
                <Link to="/services#wireless" className="text-gray-300 hover:text-white transition-colors">Wireless Solutions</Link>
              </li>
              <li>
                <Link to="/services#virtualization" className="text-gray-300 hover:text-white transition-colors">Virtualization</Link>
              </li>
              <li>
                <Link to="/services#cloud" className="text-gray-300 hover:text-white transition-colors">Cloud Integration</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-accent" />
                <span className="text-gray-300">Casablanca Business District, Morocco</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <span className="text-gray-300">+212 522 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <a href="mailto:info@atlasdefenders.com" className="text-gray-300 hover:text-white transition-colors">info@atlasdefenders.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Atlas Defenders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;