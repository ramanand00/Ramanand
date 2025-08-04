import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r dark:from-gray-700 dark:from-gray-800 to-indigo-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span role="img" aria-label="logo" className="text-3xl">🌐</span>
              <h3 className="text-2xl font-bold tracking-tight">Ramanand</h3>
            </div>
            <p className="text-indigo-200 text-sm">
              Building digital experiences that inspire and innovate.
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { icon: <FaGithub />, url: "https://github.com/ramanand00" },
                { icon: <FaTwitter />, url: "https://x.com/csit_ramanand" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ramanand-mandal-24a124324/" },
                { icon: <FaFacebook />, url: "https://www.facebook.com/razzanand.mandal.2025" },
                // { icon: <FaYoutube />, url: "https://youtube.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#a5b4fc' }}
                  className="text-xl text-white hover:dark:from-gray-900 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b dark:from-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Skills", url: "/skills" },
                { name: "Projects", url: "/projects" },
                { name: "Contact", url: "/contact" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.url} 
                    className="text-indigo-200 dark:from-gray-600 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-indigo-400">•</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b dark:from-gray-800 pb-2">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "GitHub Repos", url: "#" },
                { name: "Code Sandbox", url: "#" },
                { name: "Dev Community", url: "#" },
                { name: "MDN Docs", url: "#" },
                { name: "React Docs", url: "#" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.url} 
                    className="text-indigo-200 dark:from-gray-600 transition-colors text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-indigo-400">•</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-lg font-semibold border-b dark:from-gray-800 pb-2">Get In Touch</h4>
            <p className="text-indigo-200 text-sm">
              Have a project in mind or want to collaborate?
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm dark:from-gray-900">
              <HiMail className="text-lg" />
              <a href="mailto:contact@ramanand.com" className="dark:from-gray-600 transition-colors">
                contact@ramanand.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-indigo-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs dark:from-gray-900 flex items-center gap-1">
            Made with <FaHeart className="text-red-400 mx-1" /> by Ramanand
          </div>
          <div className="flex gap-6 text-xs">
            <a href="/privacy" className="dark:from-gray-900 dark:from-gray-500 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms&conditions" className="dark:from-gray-900 dark:from-gray-600 transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="dark:from-gray-900 dark:from-gray-600 transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="text-xs dark:from-gray-900">
            © {currentYear} Ramanand. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;