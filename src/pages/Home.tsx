import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Home() {
  const subtitleWords = [
    "Computer Science Student",
    "Software Engineer", 
    "Machine Learning Engineer",
    "Tech Enthusiast",
    "AWS Cloud Engineer"
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitleWords.length);
    }, 3000); // Change subtitle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Hi, I'm Karthik Emani"
            className="text-5xl md:text-7xl font-bold text-primary-900 dark:text-white mb-6"
          />
          <AnimatedText
            key={currentSubtitle}
            text={subtitleWords[currentSubtitle]}
            className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-primary-700 dark:text-primary-300 max-w-2xl mx-auto mb-12"
          >
            Passionate about developing innovative solutions with a focus on machine learning and artificial intelligence.
            Continuously exploring new technologies to enhance problem-solving skills and create impactful applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { href: "https://github.com/EmaniBoy", icon: <Github />, label: "GitHub" },
              { href: "mailto:kxe6005@mavs.uta.edu", icon: <Mail />, label: "Email" },
              { href: "https://linkedin.com/in/karthikemani", icon: <Linkedin />, label: "LinkedIn" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}