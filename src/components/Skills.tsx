import React from 'react';
import { Code2, Wrench, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const skills = {
    languages: ['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'NoSQL', 'JavaScript', 'HTML/CSS'],
    frameworks: ['React', 'Node.js', 'FastAPI', 'Material-UI', 'Vite', 'OpenCV'],
    tools: ['AWS', 'Google Cloud Platform', 'Git', 'Docker', 'VS Code', 'Anaconda', 'PyCharm', 'Jupyter Notebook'],
    datascience: ['TensorFlow', 'Keras', 'pandas', 'NumPy', 'Matplotlib', 'Scikit-learn']
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Code2 className="text-accent-600 dark:text-accent-400" size={24} />
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white">Technical Skills</h2>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <SkillCard title="Languages" icon={<Code2 className="text-accent-600 dark:text-accent-400" />} skills={skills.languages} />
          <SkillCard title="Frameworks" icon={<Wrench className="text-accent-600 dark:text-accent-400" />} skills={skills.frameworks} />
          <SkillCard title="Developer Tools" icon={<Database className="text-accent-600 dark:text-accent-400" />} skills={skills.tools} />
          <SkillCard title="Data Science & ML" icon={<Brain className="text-accent-600 dark:text-accent-400" />} skills={skills.datascience} />
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

function SkillCard({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span>{icon}</span>
        <h3 className="font-semibold text-primary-900 dark:text-white">{title}</h3>
      </div>
      <motion.ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-primary-600 dark:text-primary-400"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}