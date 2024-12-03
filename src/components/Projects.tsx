import React from 'react';
import { Code, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const projects = [
    {
      title: 'Serverless To-Do Web Application',
      tech: ['React', 'Vite', 'Tailwind CSS', 'AWS', 'Firebase'],
      description: [
        'Built a serverless to-do app with user authentication and event management using Firestore as a NoSQL database.',
        'Deployed via AWS (CloudFront, S3) for high availability, scalability and performance.',
        'Designed a fully responsive UI with Tailwind CSS, ensuring cross-device usability.',
      ],
      links: {
        github: 'https://github.com/EmaniBoy/Serverless-To-Do-WebApp',
      },
    },
    {
      title: 'Deep Learning Digit Recognition',
      tech: ['TensorFlow', 'FastAPI', 'Python', 'React', 'Tailwind CSS'],
      description: [
        'Developed full-stack DL web application achieving 98.6% accuracy in real-time handwritten digit recognition.',
        'Engineered convolutional neural network using TensorFlow/Keras, optimized for accuracy and inference speed.',
        'Built efficient FastAPI backend with custom image preprocessing pipeline, achieving < 3s end-to-end response time.',
        'Implemented responsive React frontend with interactive canvas and real-time visualization using Tailwind CSS.',
      ],
      links: {
        github: 'https://github.com/EmaniBoy/DigitRecognizer',
      },
    },
    {
      title: 'Hand Tracking Cursor Tool',
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      description: [
        'Designed a hand-tracking tool to control the mouse cursor using gestures, achieving 30 FPS tracking.',
        'Integrated left-click, right-click, and volume control using thumb, index, and pinky gestures.',
        'Leveraged OpenCV and MediaPipe for real-time hand gesture detection.',
      ],
      links: {
        github: 'https://github.com/EmaniBoy/HandTrackingMouse',
      },
    },
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
            <Code className="text-accent-600 dark:text-accent-400" size={24} />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">Featured Projects</h2>
          </motion.div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-white">{project.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium text-white bg-accent-500 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <GitBranch className="text-primary-400 dark:text-primary-600" size={20} />
                </div>
                <ul className="mt-4 space-y-2">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-primary-600 dark:text-primary-400 text-sm">• {point}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent-500/90 backdrop-blur-lg px-6 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                    >
                      <span className="text-sm">View Code</span>
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10 bg-white/20"></div>
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}