import React from 'react';
import { Link } from 'react-router-dom';
import {
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
import image1 from '../assets/images/heading image.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', icon: <FaCoins />, path: '/notfound' },
    { name: 'Investment Plans', icon: <FaClock />, path: '/notfound' },
    // ✅ REPLACED FaRocket WITH image1
    { name: 'Referral Program', icon: <img src={image1} className="w-5 h-5 object-contain rounded-full" />, path: '/notfound' },
    { name: 'Blog', icon: <FaShieldHalved />, path: '/notfound' },
    { name: 'Carrers', icon: <FaShieldHalved />, path: '/notfound' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/notfound' },
    { name: 'Careers', path: '/notfound' },
    { name: 'Blog', path: '/notfound' },
    { name: 'Press Kit', path: '/notfound' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/notfound' },
    { name: 'FAQs', path: '/notfound' },
    { name: 'Privacy Policy', path: '/notfound' },
    { name: 'Contact Us', path: '/notfound' },
    { name: 'Terms & conditions', path: '/notfound' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, path: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, path: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, path: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative pt-6 pb-6 overflow-hidden bg-dark-900 text-white border-t border-accent-purple/10">

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-[#1a1040] to-[#0d0d2b]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-transparent to-accent-pink/5"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top Section: Main Footer Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* 1. Brand & Newsletter Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                
                {/* ✅ Logo Image */}
                <img
                  src={image1}
                  alt="Marin Club"
                  className="w-8 h-8 object-contain rounded-lg"
                />

                <span className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                  Marin Club
                </span>
              </div>
            </div>

            <p className="text-dark-muted text-sm leading-relaxed">
              Empowering your financial future with high-return investment plans and secure trading platforms.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-2">
              <p className="text-xs font-semibold text-white mb-2">Subscribe to our newsletter</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-dark-900/50 border border-border-glass rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 focus:ring-1 focus:ring-accent-purple/20 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-md hover:opacity-90 transition-opacity">
                  <FaArrowRight className="text-white text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-border-glass pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="flex items-center gap-3 text-dark-muted hover:text-accent-gold transition-colors duration-200 text-sm group">
                    <span className="text-accent-purple group-hover:text-accent-gold transition-colors">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-border-glass pb-2 inline-block">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-dark-muted hover:text-accent-gold transition-colors duration-200 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Support & Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 border-b border-border-glass pb-2 inline-block">Support</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-dark-muted hover:text-accent-gold transition-colors duration-200 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-accent-purple/10">
              <div className="flex items-center gap-3 text-sm text-dark-muted">
                <FaEnvelope className="text-accent-pink text-sm" />
                <a href="mailto:support@marinclub.com" className="hover:text-white transition-colors">support@marinclub.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-dark-muted">
                <FaPhone className="text-accent-purple text-sm" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 1234567890</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Social Media & Trust Badges --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-accent-purple/10 gap-6 mb-8">

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-accent-purple/10 backdrop-blur-sm border border-border-glass flex items-center justify-center text-dark-muted hover:text-white hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-pink hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-xs text-dark-muted">
            <div className="flex items-center gap-1.5">
              <FaShieldHalved className="text-accent-gold" /> SSL Secured
            </div>
            <div className="flex items-center gap-1.5">
              <FaClock className="text-accent-purple" /> 24/7 Support
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-muted">
          <p>
            &copy; {currentYear} <span className="text-white font-medium">Marin Club</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent-gold transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-accent-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;