import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="bg-white dark:bg-gray-900 py-6 text-center text-primary-600 dark:text-primary-400 transition-colors duration-300">
            <p>© {new Date().getFullYear()} Karthik Emani. All rights reserved.</p>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;