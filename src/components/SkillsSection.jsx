import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Code, Server, Terminal, Wrench, Sparkles, Zap } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = useMemo(() => ({
    Frontend: {
      items: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap', 'Tailwind CSS'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-500',
    },
    Backend: {
      items: ['Node.js', 'PHP', 'Python', 'Django', 'MongoDB', 'MySQL'],
      icon: Server,
      color: 'from-green-500 to-teal-500',
      iconColor: 'text-green-500',
    },
    Languages: {
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP'],
      icon: Terminal,
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-500',
    },
    Tools: {
      items: ['Git', 'GitHub', 'Postman', 'JIRA', 'VS Code', 'WordPress'],
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-500',
    },
  }), []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }), []);

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden"
      aria-label="Skills and Technologies"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, data], categoryIndex) => {
            const CategoryIcon = data.icon;

            return (
              <motion.article
                key={category}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-glass p-6 md:p-8 relative overflow-hidden group"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Decorative Corner */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${data.color} opacity-10 rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 bg-gradient-to-br ${data.color} rounded-2xl shadow-lg relative`}
                  >
                    {/* Icon Glow */}
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${data.color} rounded-2xl blur-md`}
                    />
                    <CategoryIcon className="text-white relative z-10" size={28} />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      {category}
                      <motion.span
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className={`w-2 h-2 bg-gradient-to-r ${data.color} rounded-full`}
                      />
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {data.items.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                  {data.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.15 + index * 0.05,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -3, 3, 0],
                        y: -5,
                      }}
                      className="relative group/skill"
                    >
                      {/* Skill Badge */}
                      <div className="relative px-4 py-3 bg-white dark:bg-gray-800 rounded-xl text-center font-semibold text-sm text-gray-800 dark:text-gray-200 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover/skill:border-transparent overflow-hidden">
                        {/* Hover Gradient Background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                          initial={false}
                        />
                        
                        {/* Skill Text */}
                        <span className="relative z-10 group-hover/skill:text-white transition-colors duration-300">
                          {skill}
                        </span>

                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/skill:opacity-100"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      </div>

                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${data.color} rounded-full origin-left`}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating Particles on Hover */}
                      <motion.div
                        className={`absolute top-0 left-1/2 w-1 h-1 bg-gradient-to-r ${data.color} rounded-full opacity-0 group-hover/skill:opacity-100`}
                        animate={{
                          y: [0, -20],
                          x: [-10, 10],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + categoryIndex * 0.15, type: 'spring' }}
                  className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {data.items.length}
                  </motion.span>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Skills', value: Object.values(skills).reduce((acc, cat) => acc + cat.items.length, 0), icon: Zap },
            { label: 'Categories', value: Object.keys(skills).length, icon: Code },
            { label: 'Years Exp', value: '3+', icon: Server },
            { label: 'Projects', value: '15+', icon: Terminal },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="card-glass p-6 text-center relative overflow-hidden group"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 opacity-0 group-hover:opacity-5"
              />
              
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
