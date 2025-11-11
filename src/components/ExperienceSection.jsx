import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Sparkles } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = useMemo(() => [
    {
      title: 'Founder & CEO',
      company: 'CompWallah',
      location: 'Pune, Maharashtra',
      period: 'Feb 2024 - Present',
      description: [
        'Leading CompWallah, a software development company, providing real-world IT solutions',
        'Handling real-time clients and delivering custom software solutions tailored to business needs',
        'Managing project lifecycles from requirement gathering to deployment',
      ],
      current: true,
      icon: Award,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Web Development Intern',
      company: 'Teehzone Corporation Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Jan 2024 - Mar 2024',
      description: [
        'Developed a fully functional e-commerce website for Spyinte, a child company of Teehzone',
        'Worked with HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, and WordPress',
        'Designed a responsive and user-friendly UI/UX to enhance the customer experience',
        'Collaborated with a team of 3 developers to meet project deadlines',
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development Intern',
      company: 'Linkcode Technology Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Aug 2021 - Sep 2021',
      description: [
        'Developed a dynamic website for Shivratna Mangal Karyalay, Alandi',
        'Worked with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL',
        'Improved website responsiveness and user experience',
        'Collaborated with a team to ensure on-time project delivery',
      ],
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
    },
  ], []);

  // Optimized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }), []);

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden"
      aria-label="Work Experience"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              Professional Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development and entrepreneurship
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-6xl mx-auto"
        >
          {/* Animated Timeline Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />
            
            {/* Animated Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary-400 to-purple-400 blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const ExperienceIcon = exp.icon;

            return (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={itemVariants}
                className={`relative mb-16 md:mb-20 ${
                  isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 200 }}
                  className={`hidden md:block absolute top-8 ${
                    isLeft ? 'right-0' : 'left-0'
                  } w-1/2 h-0.5 bg-gradient-to-${isLeft ? 'r' : 'l'} from-transparent via-primary-500 to-transparent`}
                />

                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 items-center justify-center bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 shadow-lg z-20"
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-20`} />
                  <ExperienceIcon className="text-primary-600 relative z-10" size={20} />
                </motion.div>

                {/* Experience Card */}
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative card-glass p-6 md:p-8 group overflow-hidden"
                >
                  {/* Animated Gradient Border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />

                  {/* Current Badge */}
                  {exp.current && (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(34, 197, 94, 0)',
                          '0 0 0 8px rgba(34, 197, 94, 0.2)',
                          '0 0 0 0 rgba(34, 197, 94, 0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 right-4 px-4 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                      CURRENT
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 bg-gradient-to-br ${exp.color} rounded-xl shadow-lg`}
                    >
                      <ExperienceIcon className="text-white" size={28} />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Calendar size={16} className="text-primary-600" />
                      <span className="font-medium">{exp.period}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                    >
                      <MapPin size={16} className="text-primary-600" />
                      <span className="font-medium">{exp.location}</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 0.5 + index * 0.2 + i * 0.1,
                          type: 'spring',
                          stiffness: 100,
                        }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group/item"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.3, rotate: 90 }}
                          className={`text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-bold mt-0.5`}
                        >
                          ▹
                        </motion.span>
                        <span className="leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative Corner */}
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${exp.color} opacity-5 rounded-tl-full`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.article>

                {/* Mobile Timeline Connector */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500" />
                <div className="md:hidden absolute left-6 top-8 w-4 h-4 -translate-x-[7px] bg-primary-500 rounded-full border-2 border-white dark:border-gray-900" />
              </motion.div>
            );
          })}

          {/* End Marker */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5, type: 'spring' }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-16 items-center justify-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(168, 85, 247, 0.4)',
                  '0 0 0 20px rgba(168, 85, 247, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
            >
              <Sparkles className="text-white" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
