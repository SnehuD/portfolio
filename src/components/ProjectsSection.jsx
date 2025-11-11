import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { ExternalLink, Github, Code2, Rocket, Sparkles, Star } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = useMemo(() => [
    {
      title: 'QR Based Ticket Entry System',
      description: 'A comprehensive ticketing system where visitors can register, verify email, book slots, make payments, and receive QR codes for entry and exit verification.',
      tags: ['React', 'Node.js', 'MongoDB', 'QR Code', 'Payment Gateway'],      
      link: 'https://github.com/SnehuD/Ticketless-Entry-System-for-Museum',
      github: 'https://github.com/SnehuD/Ticketless-Entry-System-for-Museum',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Code2,
      featured: true,
    },
    {
      title: 'Resume Ranker',
      description: 'AI-powered resume ranking system that helps job seekers create profiles and upload resumes while allowing recruiters to post jobs and receive ranked applications based on matching percentage.',
      tags: ['Django', 'Python', 'Machine Learning', 'PostgreSQL'],
      link: 'https://github.com/PrasadDhobale/ResumeRanker-frontend',
      github: 'https://github.com/PrasadDhobale/ResumeRanker-frontend',
      gradient: 'from-purple-500 to-pink-500',
      icon: Rocket,
      featured: true,
    },
    {
      title: 'Spyinte E-Commerce Website',
      description: 'Fully functional e-commerce platform with responsive design, cross-browser compatibility, and seamless user experience for Teehzone\'s child company.',
      tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],  
      link: 'https://github.com/SnehuD/Spyinte--Ab-Har-Ghar-Hoga-Surkshit',
      github: 'https://github.com/SnehuD/Spyinte--Ab-Har-Ghar-Hoga-Surkshit',
      gradient: 'from-orange-500 to-red-500',
      icon: Star,
    },
  ], []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: i * 0.15,
      },
    }),
  }), []);

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-20 relative overflow-hidden"
      aria-label="Featured Projects"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
          >
            <Sparkles size={18} className="text-primary-600" />
            <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">
              My Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Some of my notable works and contributions that showcase my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            
            return (
              <motion.article
                key={`${project.title}-${index}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-glass overflow-hidden group relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="absolute top-4 left-4 z-20 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1"
                  >
                    <Star size={12} fill="white" />
                    FEATURED
                  </motion.div>
                )}

                {/* Animated Gradient Header */}
                <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 bg-white/10"
                  />

                  {/* Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Floating Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      {/* Glow Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 bg-white/30 rounded-3xl blur-xl"
                      />
                      
                      {/* Icon Container */}
                      <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                        <ProjectIcon className="text-white" size={40} strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.15 + i * 0.05 }}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2,
                        }}
                        className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-semibold shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow group/btn"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform" />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center p-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>

                  {/* Decorative Corner Gradient */}
                  <motion.div
                    className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-tl-full`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 45, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* 3D Hover Shadow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl -z-10`}
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/SnehuD?tab=repositories"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
