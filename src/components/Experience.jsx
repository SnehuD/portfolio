import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & CEO',
      company: 'CompWallah',
      location: 'Pune, Maharashtra',
      period: 'Feb 2024 - Present',
      points: [
        'Leading CompWallah, a software development company, providing real-world IT solutions',
        'Handling real-time clients and delivering custom software solutions tailored to business needs',
        'Managing project lifecycles from requirement gathering to deployment',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Teehzone Corporation Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Jan 2024 - Mar 2024',
      points: [
        'Developed a fully functional e-commerce website for Spyinte',
        'Worked with HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, and WordPress',
        'Designed responsive and user-friendly UI/UX to enhance customer experience',
        'Collaborated with a team of 3 developers to meet project deadlines',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Linkcode Technology Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Aug 2021 - Sep 2021',
      points: [
        'Developed a dynamic website for Shivratna Mangal Karyalay, Alandi',
        'Worked with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL',
        'Improved website responsiveness and user experience',
        'Collaborated with a team to ensure on-time project delivery',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass glass-hover rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-purple-500/20 rounded-full"
                  >
                    <Briefcase className="text-purple-400" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={20} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
