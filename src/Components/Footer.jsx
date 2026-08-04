import React from 'react';
import { Link } from 'react-router-dom'; // <--- Added React Router import
import { 
  FaRocket, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaArrowRight, 
  FaShieldHalved, 
  FaClock, 
  FaCoins 
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Changed 'href' to 'path' for React Router
  const quickLinks = [
    { name: 'Investment Plans', icon: <FaCoins />, path: '/plans' },
    { name: 'How It Works', icon: <FaClock />, path: '/how-it-works' },
    { name: 'Live Trading', icon: <FaRocket />, path: '/trading' },
    { name: 'Security', icon: <FaShieldHalved />, path: '/security' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Press Kit', path: '/press' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact Support', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, path: 'https://facebook.com', label: 'Facebook' }, // External links can stay as full URLs or use # if currently empty
    { icon: <FaTwitter />, path: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, path: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative pt-6 pb-6 overflow-hidden bg-[#0a0a1a] text-white border-t border-purple-400/10">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Section: Main Footer Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* 1. Brand & Newsletter Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <FaRocket className="text-[#D9B34A] text-2xl" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Marin Club
                </span>
              </div>
            </div>
            
            <p className="text-[#A8B4C8] text-sm leading-relaxed">
              Empowering your financial future with high-return investment plans and secure trading platforms.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-2">
              <p className="text-xs font-semibold text-white mb-2">Subscribe to our newsletter</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#0a0a1a]/50 border border-purple-400/20 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder-[#A8B4C8] focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 transition-opacity">
                  <FaArrowRight className="text-white text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-purple-400/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {/* Replaced <a> with <Link> */}
                  <Link to={link.path} className="flex items-center gap-3 text-[#A8B4C8] hover:text-[#D9B34A] transition-colors duration-200 text-sm group">
                    <span className="text-purple-400 group-hover:text-[#D9B34A] transition-colors">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-purple-400/20 pb-2 inline-block">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {/* Replaced <a> with <Link> */}
                  <Link to={link.path} className="text-[#A8B4C8] hover:text-[#D9B34A] transition-colors duration-200 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Support & Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-purple-400/20 pb-2 inline-block">Support</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {/* Replaced <a> with <Link> */}
                  <Link to={link.path} className="text-[#A8B4C8] hover:text-[#D9B34A] transition-colors duration-200 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info (Kept as <a> for mailto and tel) */}
            <div className="space-y-3 pt-4 border-t border-purple-400/10">
              <div className="flex items-center gap-3 text-sm text-[#A8B4C8]">
                <FaEnvelope className="text-pink-400 text-sm" />
                <a href="mailto:support@marinclub.com" className="hover:text-white transition-colors">support@marinclub.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#A8B4C8]">
                <FaPhone className="text-purple-400 text-sm" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 1234567890</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Social Media & Trust Badges --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-purple-400/10 gap-6 mb-8">
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.path} // Kept as <a> because these are external URLs (Social media)
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center text-[#A8B4C8] hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-xs text-[#A8B4C8]">
            <div className="flex items-center gap-1.5">
              <FaShieldHalved className="text-[#D9B34A]" /> SSL Secured
            </div>
            <div className="flex items-center gap-1.5">
              <FaClock className="text-purple-400" /> 24/7 Support
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A8B4C8]">
          <p>
            &copy; {currentYear} <span className="text-white font-medium">Marin Club</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Replaced <a> with <Link> */}
            <Link to="/privacy" className="hover:text-[#D9B34A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D9B34A] transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-[#D9B34A] transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;