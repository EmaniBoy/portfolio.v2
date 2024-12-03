import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  // Mobile menu variants
  const menuVariants = {
    closed: { 
      x: '100%',
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40 
      }
    },
    open: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40 
      }
    }
  };

  // Link list variants for staggered animation
  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1
      }
    })
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Blur overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-md"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-accent-600 dark:text-accent-400'
                        : 'text-gray-600 hover:text-accent-600 dark:text-gray-300 dark:hover:text-accent-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="z-50 relative"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
                )}
              </motion.button>
            </div>

            {/* Theme Toggle (Visible on both mobile and desktop) */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center cursor-pointer"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="light"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                  >
                    <Sun className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="dark"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-1 w-6 h-6 bg-gray-800 rounded-full shadow-md flex items-center justify-center"
                  >
                    <Moon className="w-4 h-4 text-blue-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Slide-Out Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden"
              >
                <div className="flex flex-col h-full pt-20 space-y-6 px-6">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.to}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                      onClick={toggleMenu}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `block text-lg font-medium transition-colors duration-300 ${
                            isActive
                              ? 'text-accent-600 dark:text-accent-400'
                              : 'text-black hover:text-accent-600 dark:text-gray-300 dark:hover:text-accent-400'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}