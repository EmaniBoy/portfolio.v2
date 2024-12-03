import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Certifications() {
  const certifications = [
    'AWS AI Practitioner 2024',
    'AWS Cloud Practitioner 2024',
    'Microsoft Word 2019',
    'Microsoft Excel 2019',
    'SolidWorks 2021',
    'OSHA 2021'
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Award className="text-accent-600 dark:text-accent-400" size={24} />
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white">Certifications</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert} 
              
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg flex items-center gap-3 transition-all duration-300"
            >
              <Award className="text-accent-600 dark:text-accent-400" size={20} />
              <span className="text-primary-600 dark:text-primary-400">{cert}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}