import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-white shadow-lg backdrop-blur-sm bg-opacity-80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-accent-800 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Karthik Emani
          </motion.h1>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {[
              { href: "tel:214-897-1200", icon: <Phone size={18} />, text: "214-897-1200" },
              { href: "mailto:kxe6005@mavs.uta.edu", icon: <Mail size={18} />, text: "kxe6005@mavs.uta.edu" },
              { href: "https://github.com/EmaniBoy", icon: <Github size={18} />, text: "GitHub" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-2 text-primary-600 hover:text-accent-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}