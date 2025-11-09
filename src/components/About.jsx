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

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="text-purple-400" />
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dedicated Web Developer and Software Engineer with expertise in front-end 
              and back-end development. Passionate about building user-friendly, secure, 
              and high-performance applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Experienced in IT consulting, software development, and cloud management, 
              with a strong problem-solving mindset. As the Founder of CompWallah, I'm 
              committed to delivering real-world software solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="text-purple-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="border-l-2 border-purple-500 pl-4"
                >
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-purple-400">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                    <span className="text-green-400 font-semibold">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-4xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
