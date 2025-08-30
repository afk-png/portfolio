import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: "About",
    content: "Full-stack developer passionate about creating beautiful and functional web applications."
  },
  {
    title: "Projects",
    content: "Working on innovative solutions that make a difference."
  },
  {
    title: "Contact",
    content: "Let's connect and create something amazing together."
  }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              afk-png
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium
                    ${activeSection === index ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(index)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Welcome
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building the future, one line of code at a time.
            </motion.p>
          </motion.section>

          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              variants={itemVariants}
              className="py-16"
            >
              <motion.h2
                className="text-3xl font-bold mb-8"
                whileHover={{ scale: 1.05 }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {section.content}
              </motion.p>
            </motion.section>
          ))}

          <motion.div
            className="flex justify-center space-x-6 py-12"
            variants={containerVariants}
          >
            {[SiGithub, SiTwitter, SiLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </main>

      <footer className="bg-black/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} afk-png. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default App;