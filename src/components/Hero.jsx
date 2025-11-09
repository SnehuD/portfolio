import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-purple-400 mb-4"
            >
              Hi, I'm
            </motion.h2>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
            >
              Snehal Dahake
            </motion.h1>
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-4xl text-gray-300 mb-6"
            >
              Full Stack Developer & Founder
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Passionate about building user-friendly, secure, and high-performance applications. 
              Founder of CompWallah, delivering real-world software solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/snehud"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-full"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/snehal-dahake"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-full"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:snehal.dahake@dypic.in"
                className="glass glass-hover p-3 rounded-full"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://snehal-dahake.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-full"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image with Glass Effect */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-2xl opacity-50"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative glass p-8 rounded-3xl animate-float"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold">
                <img src="/profile.png" alt="Profile" width={300} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
