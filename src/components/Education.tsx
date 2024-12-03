import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Education() {
  return (
    <AnimatedSection>
      <section className="py-12 bg-primary-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GraduationCap className="text-accent-600 dark:text-accent-400" size={24} />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">Education</h2>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary-900 dark:text-white">University of Texas at Arlington</h3>
              <p className="text-accent-600 dark:text-accent-400">Bachelor of Science in Computer Science</p>
              <p className="text-primary-500 dark:text-primary-400 mt-1">Aug. 2023 – Present | Arlington, TX</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary-900 dark:text-white">Coppell High School</h3>
              <p className="text-primary-500 dark:text-primary-400 mt-1">Aug. 2019 – May 2023 | Coppell, TX</p>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}