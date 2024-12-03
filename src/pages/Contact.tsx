import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Contact() {
  const contactInfo = [
    { icon: <Mail />, label: 'Email', value: 'emaniboy123@myemail.com' },
    { icon: <Phone />, label: 'Phone', value: '123-456-7890' },
    { icon: <MapPin />, label: 'Location', value: 'Dallas, TX' },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]"> {/* Ensures full viewport height minus navbar */}
      <section className="flex-grow py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary-900 dark:text-white mb-12"
          >
            Get in Touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <ThreeDCard key={info.label} className="h-48">
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center transform-gpu transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="w-full"
                  >
                    <span className="text-accent-600 dark:text-accent-400 mb-4 block">
                      {info.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      {info.label}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {info.value}
                    </p>
                  </motion.div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}