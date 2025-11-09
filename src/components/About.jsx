import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Computer Engineering',
      institution: 'Ajeenkya D Y Patil School of Engineering',
      year: '2022-2025',
      score: 'CGPA: 8.64',
    },
    {
      degree: 'Information Technology (Diploma)',
      institution: 'Government Polytechnic, Pune',
      year: '2019-2022',
      score: 'Percentage: 87.47%',
    },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2 sm:mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Get to know me better
          </p>
        </motion.div>

        {/* Professional Summary & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <Briefcase className="text-purple-400 flex-shrink-0" size={24} />
              <span>Professional Summary</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Dedicated Web Developer and Software Engineer with expertise in front-end 
              and back-end development. Passionate about building user-friendly, secure, 
              and high-performance applications.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Experienced in IT consulting, software development, and cloud management, 
              with a strong problem-solving mindset. As the Founder of CompWallah, I'm 
              committed to delivering real-world software solutions that make a difference.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <BookOpen className="text-purple-400 flex-shrink-0" size={24} />
              <span>Education</span>
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="border-l-2 border-purple-500 pl-3 sm:pl-4"
                >
                  <h4 className="font-bold text-base sm:text-lg mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-400 text-sm sm:text-base mb-2 leading-snug">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2">
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {edu.year}
                    </span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Responsive from 2 to 4 columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.2, 
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
