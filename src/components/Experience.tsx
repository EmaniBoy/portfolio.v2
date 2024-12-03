import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
  const experiences = [
    {
      title: 'Software/Data Infrastructure Engineer Intern',
      company: 'State Farm',
      location: 'Richardson, TX',
      period: 'May 2025 - August 2025',
      description: [
        'Assisted in managing a clothing business using Shopify and handling warehouse efficiently.',
        'Maintain upkeep of customer orders and equipment'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Helius Power',
      location: 'Boston, MA',
      period: 'November 2024 - Present',
      description: [
        'Taught and graded student work, managed new student admissions, and updated student data in the SQL database.',
        'Created engaging graphics to enhance learning materials.'
      ]
    },
    {
      title: 'Technology & Teaching Assistant',
      company: 'Kumon – Coppell West',
      location: 'Coppell, TX',
      period: 'March 2022 – May 2023',
      description: [
        'Taught and graded student work, managed new student admissions, and updated student data in the SQL database.',
        'Created engaging graphics to enhance learning materials.'
      ]
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Briefcase className="text-accent-600 dark:text-accent-400" size={24} />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">Work Experience</h2>
          </motion.div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-white">{exp.title}</h3>
                    <p className="text-accent-600 dark:text-accent-400">{exp.company}</p>
                  </div>
                  <div className="text-primary-500 dark:text-primary-400 mt-2 md:mt-0">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="text-primary-600 dark:text-primary-400">• {desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}